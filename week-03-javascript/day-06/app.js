"use strict";

const employees = [
  {
    id: 101,
    name: "Ahmed",
    department: "IT",
    basicSalary: 5000,
    housingAllowance: 1500,
    transportAllowance: 500,
    deduction: 300,
    isActive: true
  },
  {
    id: 102,
    name: "Ali",
    department: "HR",
    basicSalary: 4500,
    housingAllowance: 1200,
    transportAllowance: 400,
    deduction: 200,
    isActive: true
  },
  {
    id: 103,
    name: "Omar",
    department: "IT",
    basicSalary: 6500,
    housingAllowance: 1800,
    transportAllowance: 600,
    deduction: 400,
    isActive: false
  },
  {
    id: 104,
    name: "Sara",
    department: "Finance",
    basicSalary: 7000,
    housingAllowance: 2000,
    transportAllowance: 700,
    deduction: 500,
    isActive: true
  }
];

//Get All Employees:
function getAllEmployees() {
    return employees;
}
console.log(getAllEmployees());

//Find Employees By ID
function findEmployeeById(id) {
    return employees.find(employee => employee.id === id) ?? null;
}
console.log(findEmployeeById(103));
console.log(findEmployeeById(999));

//Calculate Gross Salary
// Fixed Function Body
function calculateGrossSalary(employee) {
    // Check if a valid employee object was actually passed in
    if (!employee) return "Employee not found";

    // Access properties directly from the passed-in object
    const grossSalary = employee.basicSalary + employee.housingAllowance + employee.transportAllowance;
    return grossSalary;
}

// 1. First find the target employee
const targetEmployee = employees.find(emp => emp.id === 104); // Sara

// 2. Pass that employee object into your calculation function
console.log(calculateGrossSalary(targetEmployee));
// Output: 9700 (7000 + 2000 + 700)

//Net Salary
function calculateNetSalary(employee) {
    if (!employee) return "Employee not found";

    return calculateGrossSalary(employee) - employee.deduction;
}
const targetEmployeeForNet = employees.find(emp => emp.id === 104);
console.log(calculateNetSalary(targetEmployeeForNet));


//Get Active Employees
function getActiveEmployees(){
    const activeEmployees=employees.filter(employee=>employee.isActive);
    return activeEmployees;
}
console.log(getActiveEmployees());

//Calculate Total Payroll
function calculateTotalPayroll() {
  return employees
    .filter(employee => employee.isActive) // 1. Throw out inactive people first
    .reduce((runningTotal, employee) => {   // 2. Sum up the remaining active records
        const netSalary = (employee.basicSalary + employee.housingAllowance + employee.transportAllowance) - employee.deduction;
        return runningTotal + netSalary;
    }, 0);
}

console.log("Active Staff Payroll Cost:", calculateTotalPayroll());

//Get Employees By Department
function getEmployeesByDepartment(department) {
    return employees.filter(employee => employee.department === department);
}

console.log(getEmployeesByDepartment("IT"));
console.log(getEmployeesByDepartment("Sales"));

//Payroll Summary
 function generatePayrollReport() {
  // 1. Count totals using .length and .filter()
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(emp => emp.isActive).length;
  const inactiveEmployees = employees.filter(emp => !emp.isActive).length;

  // 2. Calculate the total net payroll for active employees only
  const totalActivePayroll = employees
    .filter(emp => emp.isActive)
    .reduce((runningTotal, emp) => {
      const grossSalary = emp.basicSalary + emp.housingAllowance + emp.transportAllowance;
      const netSalary = grossSalary - emp.deduction;
      return runningTotal + netSalary;
    }, 0);

  // 3. Return the compiled, structured summary object
  return {
    totalEmployees,
    activeEmployees,
    inactiveEmployees,
    totalActivePayroll
  };
}

// Execute and inspect the report output
console.log(generatePayrollReport());