// Exercise 1 — Employee information
// Declare variables for:
const employeeName='Ahmed';
let employeeAge=23;
let dept='IT';
let salary=5000;
const isActive=true;

console.log(typeof employeeName);
console.log(typeof employeeAge);
console.log(typeof dept);
console.log(typeof salary);
console.log(typeof isActive);


let housingAllowance=1500;
let transportAllowance=500;
let deduction=300;

// Exercise 2 — Salary calculation
const gross=(salary+housingAllowance+transportAllowance);
const net=(gross-deduction)

const msg=`Gross Salary:${gross}, Net salary:${net}`;
console.log(msg);


// Exercise 3 -String versus number
// Predict the output before running:
console.log(20 + "10");
console.log("20" - 10);
console.log(true + 1);
console.log(Number("250") + 50);
console.log(typeof NaN);

// Exercise 4 — Employee summary
// Employee: Ahmed
// Department: IT
// Monthly Salary: 5000
// Annual Salary: 60000

const emp=`Employee :${employeeName}
Department:${dept}
Monthly Salary:${salary}
Annual Salary:${salary*12}`
console.log(emp)
