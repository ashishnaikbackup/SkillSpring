/* SkillSpring light/dark theme. Loaded in <head> so the saved theme applies before first paint. */
(function () {
  var KEY = "skillspring-theme";
  var root = document.documentElement;
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function systemTheme() { return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"; }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.setAttribute("aria-pressed", String(theme === "light"));
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
      btn.textContent = theme === "light" ? "☾ Dark" : "☀ Light";
    }
  }
  var current = stored() || systemTheme();
  apply(current);
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.createElement("button");
    btn.id = "themeToggle";
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.onclick = function () {
      current = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      try { localStorage.setItem(KEY, current); } catch (e) {}
      apply(current);
    };
    document.body.appendChild(btn);
    apply(current);
  });
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: light)");
    var onChange = function (e) { if (!stored()) apply(e.matches ? "light" : "dark"); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
  }
})();
