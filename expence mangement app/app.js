let expenses = [];
let totalAmount = 0;
let categorySelect = document.getElementById('category-select')
let amountInput = document.getElementById('amount-input')
let dateInput = document.getElementById('date-input')
let addBtn = document.getElementById('add-btn')
let expenseTableBody =document.getElementById('Expnese-table-body')
let totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click', function() {
let category = categorySelect.value ;
let amount = Number(amountInput.value);
let date = dateInput.value;
if(category === ''){

    alert('Please select a catogery')
}
if(isNaN(amount) || amount <=0){
    alert('please enter a valid amount')
    return;
}
if( date === ''){
    alert('please select a date')
return;
}
expenses.push({category,amount,date})
totalAmount += amount;
totalAmountCell.textContent = totalAmount;

let newRow = expenseTableBody.insertRow();
let categoryCell = newRow.insertCell();
let AmountCell = newRow.insertCell();
let dateCell = newRow.insertCell();
let deleteCell = newRow.insertCell();
let deleteBtn =document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.classList.add('delete-btn');
deleteBtn.addEventListener('click' ,function(){
expenses.splice(expenses.indexOf(expense), 1);
totalAmount -= expense.amount;
totalAmountCell.textContent =totalAmount;
expenseTableBody.removeChild(newRow);
})
let expense = expenses[expenses.length - 1];
categoryCell.textContent = expense.category;
AmountCell.textContent = expense.amount;
dateCell.textContent = expense.date;
deleteCell.appendChild(deleteBtn);
});
for(let expense of expenses){
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;
    let newRow = expenseTableBody.insertRow();
    let categoryCell = newRow.insertCell();
    let AmountCell = newRow.insertCell();
    let dateCell = newRow.insertCell();
    let deleteCell =newRow.insertCell();
    let deleteBtn =document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click' ,function(){
    expenses.splioce(expenses.indexOf(expense),1);
    totalAmount -= expense.amount;
    totalAmountCell.textContent =totalAmount;
    expenseTableBody.removeChild(newRow);
        })
let expense= expenses[expenses.length - 1];
 categoryCell.textContent = expense.category;
AmountCell.textContent = expense.amount;
dateCell.textContent = expense.date;
deleteCell.appendChild(deleteBtn);
}