(() => {
  const tabs = [...document.querySelectorAll("[data-lab], [data-extra-lab]")];
  const content = document.getElementById("labContent");
  if (!content) return;
  const extras = {
    finance: {
      title: "Personal finance · monthly cash-flow planner",
      intro: "Build a simple monthly cash-flow model from fictional values. This is an educational budgeting exercise, not personal financial, tax, credit or investment advice.",
      html: `<div class="lab-grid"><article class="lab-box"><h3>Enter a fictional monthly budget</h3><label>Take-home income (₹) <input id="finIncome" type="number" min="0" step="any" value="30000"></label><label>Fixed essentials (₹) <input id="finFixed" type="number" min="0" step="any" value="12000"></label><label>Variable spending (₹) <input id="finVariable" type="number" min="0" step="any" value="8000"></label><label>Debt repayments (₹) <input id="finDebt" type="number" min="0" step="any" value="3000"></label><label>Savings goal (₹) <input id="finGoal" type="number" min="0" step="any" value="20000"></label><button class="lab-action" id="finCalc" type="button">Calculate cash flow</button><div class="lab-result" id="finResult" role="status" aria-live="polite">Your monthly cash-flow model will appear here.</div></article><article class="lab-box"><h3>Interpret the model</h3><ul><li>Surplus = income − expenses and repayments.</li><li>Savings rate = surplus ÷ take-home income.</li><li>A negative surplus means the budget needs review; do not assume investment returns will fix it.</li><li>Real budgets must account for irregular expenses, taxes, fees, inflation and changing income.</li></ul><p class="lab-hint">Use fictional numbers. Never enter account numbers or private financial details.</p></article></div>`
    },
    business: {
      title: "Business analysis · unit economics and break-even",
      intro: "Estimate contribution per unit and a simple break-even volume using fictional business data. This model assumes one product, constant price and variable cost, and fixed costs for the period.",
      html: `<div class="lab-grid"><article class="lab-box"><h3>Set a product scenario</h3><label>Selling price per unit (₹) <input id="bizPrice" type="number" min="0" step="any" value="500"></label><label>Variable cost per unit (₹) <input id="bizVariable" type="number" min="0" step="any" value="300"></label><label>Fixed costs for period (₹) <input id="bizFixed" type="number" min="0" step="any" value="10000"></label><label>Planned units <input id="bizUnits" type="number" min="0" step="1" value="80"></label><button class="lab-action" id="bizCalc" type="button">Calculate unit economics</button><div class="lab-result" id="bizResult" role="status" aria-live="polite">Contribution, margin and break-even will appear here.</div></article><article class="lab-box"><h3>What to check</h3><ul><li>Contribution per unit = price − variable cost.</li><li>Contribution margin = contribution ÷ selling price.</li><li>Break-even units = fixed costs ÷ contribution per unit, rounded up.</li><li>The simple model excludes tax, capacity limits, multiple products, price changes and step costs.</li></ul><p class="lab-hint">A break-even estimate is not a forecast. Validate assumptions against actual business evidence.</p></article></div>`
    }
  };
  function setTab(active) {
    tabs.forEach(tab => {
      const selected = (tab.dataset.extraLab || tab.dataset.lab) === active;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", String(selected));
    });
  }
  function render(key) {
    const view = extras[key];
    if (!view) return;
    setTab(key);
    content.innerHTML = '<article class="lab-panel"><div class="eyebrow">PRACTICE LAB</div><h2>' + view.title + '</h2><p>' + view.intro + '</p>' + view.html + '</article>';
    if (key === "finance") document.getElementById("finCalc").addEventListener("click", () => {
      const income = Number(document.getElementById("finIncome").value);
      const fixed = Number(document.getElementById("finFixed").value);
      const variable = Number(document.getElementById("finVariable").value);
      const debt = Number(document.getElementById("finDebt").value);
      const goal = Number(document.getElementById("finGoal").value);
      const values = [income, fixed, variable, debt, goal];
      const result = document.getElementById("finResult");
      if (values.some(value => !Number.isFinite(value) || value < 0)) { result.textContent = "Enter non-negative numeric values."; return; }
      const surplus = income - fixed - variable - debt;
      const rate = income > 0 ? surplus / income * 100 : null;
      const months = surplus > 0 ? Math.ceil(goal / surplus) : null;
      result.textContent = "Monthly surplus: ₹" + surplus.toFixed(2) + "\nSavings rate: " + (rate === null ? "Not defined when income is zero" : rate.toFixed(1) + "%") + "\nTime to savings goal at this unchanged surplus: " + (months === null ? "Not reached with a non-positive surplus" : months + " months") + "\nReview irregular expenses and assumptions before using a real budget.";
    });
    if (key === "business") document.getElementById("bizCalc").addEventListener("click", () => {
      const price = Number(document.getElementById("bizPrice").value);
      const variable = Number(document.getElementById("bizVariable").value);
      const fixed = Number(document.getElementById("bizFixed").value);
      const units = Number(document.getElementById("bizUnits").value);
      const result = document.getElementById("bizResult");
      if ([price, variable, fixed, units].some(value => !Number.isFinite(value) || value < 0) || !Number.isInteger(units)) { result.textContent = "Enter non-negative values and a whole number of planned units."; return; }
      const contribution = price - variable;
      const margin = price > 0 ? contribution / price * 100 : null;
      const breakEven = contribution > 0 ? Math.ceil(fixed / contribution) : null;
      const operating = contribution * units - fixed;
      result.textContent = "Contribution per unit: ₹" + contribution.toFixed(2) + "\nContribution margin: " + (margin === null ? "Not defined when price is zero" : margin.toFixed(1) + "%") + "\nBreak-even volume: " + (breakEven === null ? "No finite break-even at zero/negative contribution" : breakEven + " units") + "\nContribution after fixed costs at planned volume: ₹" + operating.toFixed(2) + "\nThis is a simplified scenario, not a forecast.";
    });
  }
  tabs.filter(tab => tab.dataset.extraLab).forEach(tab => tab.addEventListener("click", () => render(tab.dataset.extraLab)));
  tabs.filter(tab => tab.dataset.lab).forEach(tab => tab.addEventListener("click", () => {
    tabs.filter(item => item.dataset.extraLab).forEach(item => { item.classList.remove("active"); item.setAttribute("aria-selected", "false"); });
  }));
})();
