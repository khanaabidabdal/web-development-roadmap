// Exercise 1 — Employee bonus eligibility
// An employee is eligible for a bonus only if:
// - Their employment status is active.
// - Their years of service are at least 2.
// - Their performance score is at least 75.
// Use these starting values:
// const isActive = true;
// const yearsOfService = 3;
// const performanceScore = 82;


// Print either "Bonus eligible" or "Not bonus eligible".
// Then test what happens when yearsOfService becomes 1.

const isActive=true;
const yearsofService=1;
const performanceScore=82;

if(isActive && yearsofService>=2 && performanceScore>=75){
    console.log('Bonus eligible.')
}else {
    console.log('Not bonus eligible')
};

// Exercise 2 — Salary classification
// Write an if / else if / else statement to classify monthly salaries:
// Monthly salary	Classification
// 10,000 or above	High
// 5,000 to below 10,000	Medium
// Below 5,000	Low
// Test your logic with 4500, 7500, and 12000.

let salary=4500;


if(salary>=10000){
    console.log('High Salary')
} else if(salary>=5000 && salary<10000){
    console.log('Medium Salary')
} else {
    console.log('Low Salary ')
}

// Exercise 3 — ERP access control
// A user may access a financial report if their role is "Admin" or "Finance Manager" and their account is active.
// Start with:
// const role = "Finance Manager";
// const isActive = true;
// Be careful with operator precedence. Use parentheses to make the intended logic explicit.

const role='Manager';
const isActivee=true;

if((role==='Finance Manager' || role==='Admin') && isActivee==true){
    console.log('Access Allowed');
} else {
    console.log('Acces Denied');
};

// Exercise 4 — Input validation
// Write a program that checks an employee name.
// - If the name is empty or contains only spaces, print "Employee name is required".
// - Otherwise, print "Valid employee name".
// Hint: Research or experiment with the string method .trim().


let employeeName = "Aabid"; 

// 1. Remove spaces from the edges
const cleanedName = employeeName.trim();

// 2. Check if the remaining string is empty (falsy)
if (cleanedName) {
  console.log("Valid employee name");
} else {
  console.log("Employee name is required");
};

// Use a ternary expression to determine whether an employee is an adult (age 18 or above).
// Print the result using a template literal.
let userAge=16;

const eligibility = userAge>=18
? 'Eligible'
:'Not eligible';

console.log(`Age eligibility ${eligibility}`);