"use strict";
// Exercise 1 — Gross salary function
// Create a function named calculateGrossSalary() that accepts basic salary, housing allowance, and transport allowance.
// Return the gross salary and call the function for three different employees.

function calculateGrossSalary(salary,allowanc=0,transportAllowance=0){
    const grossTotal=salary+allowanc+transportAllowance
    return grossTotal

}
console.log(calculateGrossSalary(5000,2000,1000));
console.log(calculateGrossSalary(6000));
console.log(calculateGrossSalary(9000,1200,500));

// Exercise 2 — Employee bonus calculation
// Create a function named calculateBonus() that accepts:
// - Basic salary
// - Performance score
// - Years of service
// Business rules:
// Condition	Bonus
// Performance ≥ 90 and service ≥ 3 years	20% of basic salary
// Performance ≥ 75 and service ≥ 2 years	10% of basic salary
// Otherwise	0
// Test with at least three different employees.

function calculateBonus(salary,performanceScore,yearsOfService){
    if(performanceScore>=90 && yearsOfService>=3){
        const bonus=(salary*20)/100
        return bonus
    } else if (performanceScore>=75 && yearsOfService>=2){
        const bonus=(salary*10)/100
        return bonus
    } else {
        return 0
    }

}
console.log(calculateBonus(5000,96,3));
console.log(calculateBonus(5000,80,2));
console.log(calculateBonus(5000,60,2));

// Exercise 3 — Net salary with default parameters
// Create calculateNetSalary(basic, allowance = 0, deduction = 0).
// Return the net salary and test it both with and without optional arguments.
function calculateNetSalary(basic,allowance=0,deduction=0){
    const netSalary=basic+allowance-deduction
    return netSalary
}

console.log(calculateNetSalary(5000,1500,500));
console.log(calculateNetSalary(5000));

// Exercise 4 — Arrow function
// Write an arrow function named calculateAnnualSalary().
// It should accept a monthly salary and return the annual salary.
// Test it using SAR 5,000 and SAR 7,500.
const calculateAnnualSalary=(salary) => {
    return salary*12
}
console.log(calculateAnnualSalary(5000));
console.log(calculateAnnualSalary(7500));

// Exercise 5 — Employee access validation
// Create a function named canAccessFinancialReport() that accepts an employee role and account status.
// Return true only when the employee is active and their role is "Admin" or "Finance Manager".
// Test the function with these inputs:
// Role	Active	Expected
// Admin	true	true
// Finance Manager	false	false
// Employee	true	false
// Finance Manager	true	true
function canAccessFinancialReport(role,isActive){
    if((role==='Admin' || role==='Finance Manager') && isActive){
        return true
    } else {
        return false
    }
}
console.log(canAccessFinancialReport('Admin',true));
console.log(canAccessFinancialReport('Finance Manager',false));
console.log(canAccessFinancialReport('Employee',true));
console.log(canAccessFinancialReport('Finance Manager',true));

// Exercise 6 — Scope experiment
// Create a global variable called companyName.
// Inside a function, create a local variable called departmentName.
// Print both variables inside the function, then try to access departmentName outside it.
// Observe the error, explain why it occurs, and comment out the line afterward so your other exercises can execute.
let companyName='Aramco';

function info(){
    const departmentName='IT'
    console.log(companyName);
    console.log(departmentName);
}

info();

// console.log(departmentName); //ReferenceError
//Here the Error occured because of scope, the departmentName is only accesibe within a function while companyName is global variable and can be access from anywhere.