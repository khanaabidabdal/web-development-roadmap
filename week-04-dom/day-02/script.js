// Exercise 1 — Show and hide employee information
// Create a button labeled Show Employee Details and a paragraph or card containing employee information.

// When the button is clicked, show the employee details. When clicked again, hide them. Update the button label accordingly.

// Use addEventListener() and classList.toggle() or equivalent class operations.

const button=document.getElementById('btn');
const message=document.getElementById('message');

button.addEventListener('click',function(){
    if (message.textContent===''){
        message.textContent='Employee: Ahmed';
    button.textContent='Hide Employee';
    } else {
        message.textContent='';
        button.textContent = 'Show Employee Details';
    }
});

// Exercise 2 — Live employee name preview
// Create an input field for the employee's name.

// As the user types, update a preview paragraph immediately using the input event.

// When the input is empty, display No name entered.
const nameInput=document.getElementById('employee-name');
const preview=document.getElementById('preview');

nameInput.addEventListener('input',function(){
    if(nameInput.value.trim()===''){
        preview.textContent='No name entered';
    } else {
        preview.textContent=nameInput.value;
    }
});

// Exercise 3 — Toggle employee status

// Start with:
// const employee = {
//     name: "Ahmed",
//     isActive: true
// };
// Create a Toggle Status button.
// Each click should change employee.isActive between true and false,
// update the status text, and apply the appropriate active or inactive CSS class.
const employee={
    name:'Ahmed',
    isActive:true
};

const statusButton=document.getElementById('status-btn');
const statusText=document.getElementById('status-text');

statusButton.addEventListener('click',function(){

    employee.isActive=!employee.isActive;

    if(employee.isActive){
        statusText.textContent='Status: Active';
        statusButton.textContent='Deactivate';

        statusText.classList.add('active');
        statusText.classList.remove('inactive');
    } else {
        statusText.textContent='Status:Inactive';
        statusButton.textContent='Activate';
        statusText.classList.add('inactive');
        statusText.classList.remove('active');

    }

});

// Exercise 4 — Event object inspection
// Create a button that logs the following information when clicked:
// event.type
// event.target
// event.currentTarget


// Observe the console output and explain what each property represents.
const eventButton=document.getElementById('event-check');

eventButton.addEventListener('click',(event)=>{
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
});

// Exercise 5 — Click counter
// Create a button and a counter starting at zero.
// Every click should increase the counter by one and update the displayed number.
// Challenge: Add a Reset button that returns the counter to zero.
const count=document.getElementById('count');
const reset=document.getElementById('reset');
const display=document.getElementById('display');

let value=0;

count.addEventListener('click',()=>{
    value++;
    display.textContent=value;
});
reset.addEventListener('click',()=>{
    value=0;
    display.textContent=value;

});