// Exercise 1 — Employee ID generator
// Write a for loop that prints employee IDs from EMP-001 through EMP-010.
// Expected output begins with EMP-001, EMP-002, and ends with EMP-010.
// Hint: Explore the JavaScript string method padStart().

for (let i = 1; i <= 10; i++) {
  // 1. Convert the number (i) to a string
  let numberAsString = String(i);
  
  // 2. Pad the start with zeros until it is 3 digits long
  let paddedNumber = numberAsString.padStart(3, "0");
  
  // 3. Combine with the prefix "EMP-" and print
  console.log("EMP-" + paddedNumber);
}

// Exercise 2 — Payroll calculation
// Five employees have these monthly salaries:
// 4000, 5500, 6000, 4500, 7000
// Store them in an array, use a loop to calculate the total payroll, and calculate the average salary.
// Expected total: SAR 27,000. Expected average: SAR 5,400.
// You may use the array's .length property to determine how many salaries it contains.
// 1. Store the values in an array
// 1. Store the values inside the array brackets
const salaries =[4000, 5500, 6000, 4500, 7000];

// 2. Initialize a variable to hold the running sum
let totalPayroll = 0;

// 3. Use a loop to add each salary to the total
for (let salary of salaries) {
  totalPayroll += salary; 
}

// 4. Calculate the average salary
const averageSalary = totalPayroll / salaries.length;

// 5. Print the results
console.log("Total Payroll: SAR " + totalPayroll);
console.log("Average Salary: SAR " + averageSalary);

// Exercise 3 — Attendance counter
// Use a while loop to count attendance records from 1 to 7.
// After processing the seventh record, print "Attendance processing completed".
let count=1;

while (count<=7){
    console.log("Processing record number: " + count);;
    count++;
};
console.log("Attendance processing completed")

// Exercise 4 — Skip inactive employees
// Given these employee statuses:
// const statuses = [
//   "Active",
//   "Inactive",
//   "Active",
//   "Inactive",
//   "Active"
// ];
// Use a loop and continue to print only active employee positions (1, 3, and 5).

const statuses = [
  "Active",
  "Inactive",
  "Active",
  "Inactive",
  "Active"
];

for (let i = 0; i < statuses.length; i++) {
  // If the employee is inactive, skip the rest of the loop body
  if (statuses[i] === "Inactive") {
    continue;
  }
  
  // Print the human-readable position (index + 1)
  console.log(i + 1);
}

// Exercise 5 — Stop on an invalid transaction
// const transactions = [500, 1200, 750, -200, 900];


// Process transactions in order. If you encounter a negative amount, print "Invalid transaction detected" and stop processing further transactions using break.
// Print each valid amount before the invalid one.
const transaction=[500,1200,750,-200,900];

for(let i=0;i< transaction.length;i++){
    if(transaction[i]<0){
        console.log('Invalid transaction detected')
        break;
    }
    console.log(transaction[i])
}

// Exercise 6 — Nested attendance report
// Use nested loops to print attendance entries for 3 employees over 5 days.
// Expected number of entries: 15.
// Include both the employee number and day number in each line.
const totalEmployees = 3;
const totalDays = 5;

// Outer loop tracks the employee
for (let emp = 1; emp <= totalEmployees; emp++) {
  // Inner loop tracks the day for that specific employee
  for (let day = 1; day <= totalDays; day++) {
    console.log(`Employee ${emp} - Day ${day}`);
  }
}
