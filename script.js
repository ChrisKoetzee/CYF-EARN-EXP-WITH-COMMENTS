var total_earnings, total_expenses, total_balance, inputs, comments;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


total_earnings = [];
total_expenses = [];
total_balance = [];
comments = [];
inputs = 0;


document.getElementById('add_earnings').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('earn_input').value) >= inputs) {
    total_earnings.push(getNumberOrString(document.getElementById('earn_input').value));
    total_balance.push(getNumberOrString(document.getElementById('earn_input').value));
    let element_total = document.getElementById('total');
    element_total.innerText = total_balance.reduce((a,b) => a+b, 0);
    let element_list_1 = document.getElementById('list_1');
    let new_li = document.createElement('li');
    new_li.innerText = total_earnings.slice(-1)[0];

    element_list_1.appendChild(new_li);
  }

});

document.getElementById('add_expense').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('exp_input').value) < inputs) {
    total_expenses.push(getNumberOrString(document.getElementById('exp_input').value));
    total_balance.push(getNumberOrString(document.getElementById('exp_input').value));
    let element_total2 = document.getElementById('total');
    element_total2.innerText = total_balance.reduce((a,b) => a+b, 0);
    let element_list_2 = document.getElementById('list_2');
    let new_li2 = document.createElement('li');
    new_li2.innerText = total_expenses.slice(-1)[0];

    element_list_2.appendChild(new_li2);
  }

});

document.getElementById('submit').addEventListener('click', (event) => {
  let element_comments = document.getElementById('comments');
  comments.unshift(getNumberOrString(document.getElementById('comments').value));
  let element_comment_list = document.getElementById('comment_list');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Thanks, comment saved';

  element_comment_list.appendChild(new_li3);

});