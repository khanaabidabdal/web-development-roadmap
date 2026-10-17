// Exercise 1 — Array operations
// Create an array containing three department names. 
// Add one department using push(), remove the last department using pop(), 
// and check whether "IT" exists using includes(). Print the results.

const arr=['IT','Finance','Purchase'];
console.log(arr);
arr.push('MIS');
console.log(arr);
console.log(arr.pop());
console.log(arr)
console.log(arr.includes('IT'));

//Dataset for 2-6 Exercise
const employees = [
  { id: 101, name: "Ahmed", department: "IT", salary: 5000, isActive: true },
  { id: 102, name: "Ali", department: "HR", salary: 4500, isActive: true },
  { id: 103, name: "Omar", department: "IT", salary: 6500, isActive: false },
  { id: 104, name: "Sara", department: "Finance", salary: 7000, isActive: true },
  { id: 105, name: "Zaid", department: "IT", salary: 5500, isActive: true }
];

// Exercise 2 — Employee directory
// Use forEach() to print every employee's name and department.
// Example: Ahmed works in IT.
employees.forEach((employee)=>{
    console.log(`${employee.name} works in ${employee.department}.`);
});

// Exercise 3 — Active employees
// Use filter() to create a new array containing only active employees. Print their names.
// Expected count: 4 employees.
let activeEmployees = employees.filter((employee) => {
    return employee.isActive === true; // Or simply: return employee.isActive;
});

// To print just their names as requested:
activeEmployees.forEach(emp => console.log(emp.name));

// Exercise 4 — Salary increase
// Use map() to create a new array of employee objects with a 10% salary increase.
// Do not modify the original employees array.
// Hint: Research the object spread syntax { ...employee, salary: ... }.

// Exercise 4 — Salary increase
// Exercise 4 — Salary increase
const upgradedSalaries = employees.map((employee) => {
    return {
        ...employee,
        salary: employee.salary * 1.10
    };
});

console.log(upgradedSalaries);

// Exercise 5 — Employee search
// Use find() to retrieve the employee whose ID is 103.
// Print their name, department, and salary. Also test an ID that doesn't exist, such as 999, without causing a runtime error.
function empFind(empId) {
    const employee = employees.find((employee) => employee.id === empId);

    if (!employee) {
        return `Employee with ID ${empId} not found`;
    }

    return `Name: ${employee.name}, Department: ${employee.department}, Salary: SAR ${employee.salary}`;
}

console.log(empFind(103));
console.log(empFind(999));

// Exercise 6 — Payroll summary
// Use reduce() to calculate the total salary of all employees.
// Then use filter() and reduce() together to calculate the total salary of active employees only.
// Expected results:
// Calculation	Result
// All employees	SAR 28,500
// Active employees only	SAR 22,000
const totalSalary=employees.reduce((total,employee)=>{
    return total+employee.salary;
},0);
console.log(totalSalary);


const activeSalary=activeEmployees.reduce((total,employee)=>{
    return total+employee.salary;
},0);
console.log(activeSalary);

// Exercise 7 — Department report (challenge)
// Use filter() to find employees in the IT department, then map() to create an array containing only their names.
// Expected output: ["Ahmed", "Omar", "Zaid"].
const itEmployee=employees.filter((employee)=>{
    return employee.department==='IT';
});
console.log(itEmployee);

const itName=itEmployee.map((employee)=>{
    return employee.name;
});
console.log(itName);