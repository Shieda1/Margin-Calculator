// https://www.omnicalculator.com/finance/margin

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const marginRadio = document.getElementById('marginRadio');
const revenueRadio = document.getElementById('revenueRadio');
const costRadio = document.getElementById('costRadio');

let margin;
let revenue = v1;
let cost = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

marginRadio.addEventListener('click', function() {
  variable1.textContent = 'Revenue';
  variable2.textContent = 'Cost';
  revenue = v1;
  cost = v2;
  result.textContent = '';
});

revenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Margin';
  variable2.textContent = 'Cost';
  margin = v1;
  cost = v2;
  result.textContent = '';
});

costRadio.addEventListener('click', function() {
  variable1.textContent = 'Margin';
  variable2.textContent = 'Revenue';
  margin = v1;
  revenue = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(marginRadio.checked)
    result.textContent = `Margin = ${computemargin().toFixed(2)}`;

  else if(revenueRadio.checked)
    result.textContent = `Revenue = ${computerevenue().toFixed(2)}`;

  else if(costRadio.checked)
    result.textContent = `Cost = ${computecost().toFixed(2)}`;
})

// calculation

function computemargin() {
  return 100 * (Number(revenue.value) - Number(cost.value)) / Number(revenue.value);
}

function computerevenue() {
  return Number(margin.value) / Number(cost.value);
}

function computecost() {
  return Number(revenue.value) - Number(margin.value) * Number(revenue.value) / 100;
}