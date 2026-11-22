/* SkillSpring shared assessment helpers.
   - options(): deterministic option shuffling so the correct answer is not always "A".
   - finalAssessment(): cumulative, course-level assessment built from every lesson check. */
(function () {
  const PASS_MARK = 0.7;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function hash(text) {
    let h = 2166136261;
    for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  // Seeded Fisher-Yates permutation of 0..n-1 (stable for the same seed).
  function permutation(n, seed) {
    const idx = Array.from({ length: n }, (_, i) => i);
    let h = hash(String(seed));
    for (let i = n - 1; i > 0; i--) {
      h = Math.imul(h ^ (h >>> 15), 2246822519) >>> 0;
      h = (h + 0x9e3779b9) >>> 0;
      const j = h % (i + 1);
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  }

  // choices[0] must be the correct answer. Returns display labels and the index of the correct one.
  function options(choices, seed) {
    const order = permutation(choices.length, seed);
    return { labels: order.map((i) => choices[i]), correct: order.indexOf(0) };
  }

  function readJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (e) { return fallback; }
  }

  // items: [{ lesson, question, correct, wrong: [] }]
  function finalAssessment(container, items, storeKey, title, slug) {
    const saved = readJson(storeKey, null);
    const need = Math.ceil(items.length * PASS_MARK);
    const attempt = Math.random().toString(36).slice(2);
    const order = permutation(items.length, attempt);
    const prepared = order.map((n, pos) => {
      const it = items[n];
      return { it, opt: options([it.correct, ...it.wrong], attempt + ":" + n) };
    });

    const history = saved
      ? '<p class="final-saved">Best result on this device: <strong>' + saved.best + ' / ' + saved.total + '</strong>' + (saved.passed ? ' · <strong>Passed</strong>' : ' · not yet passed') + '</p>'
      : "";

    container.innerHTML =
      '<div class="topic-kicker">FINAL ASSESSMENT</div><h2>' + esc(title) + ' — cumulative check</h2>' +
      '<p>One question from every lesson, in a new order each attempt. Pass mark: <strong>' + need + ' of ' + items.length + '</strong> (70%). ' +
      'It checks recall and understanding only; it is not a certificate, and a practical project is still needed as evidence.</p>' + history +
      '<form id="finalForm" class="final-form">' +
      prepared.map((p, qi) =>
        '<fieldset class="final-q"><legend>' + (qi + 1) + '. ' + esc(p.it.question) + '</legend>' +
        p.opt.labels.map((v, i) => '<label><input type="radio" name="fq' + qi + '" value="' + i + '"> ' + esc(v) + '</label>').join("") +
        '</fieldset>').join("") +
      '<button type="submit" class="primary" id="finalSubmit">Submit assessment</button></form>' +
      '<div id="finalResult" class="final-result" aria-live="polite"></div>';

    container.querySelector("#finalForm").onsubmit = (e) => {
      e.preventDefault();
      let score = 0;
      const missed = [];
      prepared.forEach((p, qi) => {
        const a = container.querySelector('input[name="fq' + qi + '"]:checked');
        if (a && +a.value === p.opt.correct) score++;
        else missed.push(p);
      });
      const passed = score >= need;
      const best = Math.max(score, saved ? saved.best : 0);
      localStorage.setItem(storeKey, JSON.stringify({ best, total: items.length, passed: passed || (saved ? saved.passed : false), date: new Date().toISOString().slice(0, 10) }));
      const review = missed.length
        ? '<h3>Review these lessons</h3><ul>' + missed.map((p) => '<li><strong>' + esc(p.it.lesson) + '</strong> — correct answer: ' + esc(p.it.correct) + '</li>').join("") + '</ul>'
        : "<p>Every answer was correct.</p>";
      container.querySelector("#finalResult").innerHTML =
        '<h3>' + (passed ? "Passed" : "Not passed yet") + ': ' + score + ' / ' + items.length + '</h3>' + review +
        '<button type="button" class="secondary" id="finalRetry">Try again with a new order</button>';
      container.querySelector("#finalRetry").onclick = () => finalAssessment(container, items, storeKey, title, slug);
      container.querySelector("#finalResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
    };    brief(container, slug);
    rubric(container, storeKey + "-rubric");
  }

  // Capstone brief for the course, from capstone-briefs.js (loaded separately; optional).
  function brief(container, slug) {
    const b = window.SkillSpringBriefs && window.SkillSpringBriefs[slug];
    if (!b) return;
    const list = (items) => "<ul>" + items.map((i) => "<li>" + esc(i) + "</li>").join("") + "</ul>";
    const wrap = document.createElement("section");
    wrap.className = "brief";
    wrap.innerHTML = '<h3>Capstone project brief: ' + esc(b.title) + '</h3><p>' + esc(b.scenario) + '</p>' +
      '<h4>Build</h4>' + list(b.build) + '<h4>Evidence to submit</h4>' + list(b.evidence) +
      '<p><strong>Stretch goal:</strong> ' + esc(b.stretch) + '</p>' +
      '<p class="brief-note">Use fictional or properly licensed data only, keep your work in a place a reviewer can open, and score it with the rubric below.</p>';
    container.appendChild(wrap);
  }

  const RUBRIC = [
    ["Meets the brief", "The project does what the task asked, with a clear scope and a working result."],
    ["Correctness and evidence", "Outputs, tests, screenshots or calculations show that it works, including an edge case."],
    ["Quality and clarity", "Names, structure and layout are tidy and consistent; someone else could follow it."],
    ["Explanation", "A short README or write-up states the purpose, how to run or use it, and key decisions."],
    ["Reflection and next steps", "Mistakes, trade-offs and what you would improve are described honestly."]
  ];
  const LEVELS = ["Not yet", "Developing", "Proficient", "Strong"];

  // Practical capstone self-assessment, saved on this device. A mentor should confirm the scores.
  function rubric(container, storeKey) {
    const saved = readJson(storeKey, {});
    const wrap = document.createElement("section");
    wrap.className = "rubric";
    wrap.innerHTML = '<h3>Practical project rubric</h3><p>Score your capstone project honestly. Evidence from a real project matters more than a quiz score, so ask a mentor or peer to confirm your ratings. Aim for at least Proficient in every row.</p>' +
      '<div class="rubric-rows">' + RUBRIC.map((r, i) =>
        '<fieldset class="rubric-row"><legend>' + esc(r[0]) + '</legend><p>' + esc(r[1]) + '</p>' +
        LEVELS.map((lv, k) => '<label><input type="radio" name="rb' + i + '" value="' + k + '"' + (saved[i] === k ? " checked" : "") + '> ' + esc(lv) + '</label>').join("") + '</fieldset>').join("") +
      '</div><p class="rubric-total" aria-live="polite"></p>';
    const total = wrap.querySelector(".rubric-total");
    function update() {
      const picked = {};
      RUBRIC.forEach((r, i) => { const c = wrap.querySelector('input[name="rb' + i + '"]:checked'); if (c) picked[i] = +c.value; });
      try { localStorage.setItem(storeKey, JSON.stringify(picked)); } catch (e) {}
      const n = Object.keys(picked).length;
      const sum = Object.values(picked).reduce((a, b) => a + b, 0);
      const ready = n === RUBRIC.length && Object.values(picked).every((v) => v >= 2);
      total.textContent = n === 0 ? "" : "Rated " + n + " of " + RUBRIC.length + " · score " + sum + " / " + RUBRIC.length * 3 + (n === RUBRIC.length ? (ready ? " · Ready to show as portfolio evidence once a mentor confirms." : " · Improve rows below Proficient, then rate again.") : "");
    }
    wrap.addEventListener("change", update);
    update();
    container.appendChild(wrap);
  }

  window.SkillSpringAssessment = { options, finalAssessment, rubric, passMark: PASS_MARK };
})();
