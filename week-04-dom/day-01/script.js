//Exercise 1
const title=document.getElementById('heading');
console.log(title);

const para=document.querySelector('.desc');
console.log(para);

const all=document.querySelectorAll('.employee');
console.log(all);

//Exercise 2
const employee={
    name:'Ahmed',
    department:"IT",
    salary:5000,
    isActive:true
};

const updatedName=document.getElementById('employee-name').textContent=employee.name ;
document.getElementById("employee-department").textContent =
    `Department: ${employee.department}`;

document.getElementById("employee-salary").textContent =
    `Salary: SAR ${employee.salary}`;

// Exercise 3
const CheckStatus=document.getElementById('employee-status');
if(employee.isActive){
    CheckStatus.textContent='Status : Active';
    CheckStatus.classList.add('active');
    CheckStatus.classList.remove('inactive');
} else {
    CheckStatus.textContent='Status : Inactive';
    CheckStatus.classList.add('inactive');
    CheckStatus.classList.remove('active');
}

// Exercise 4
const employeeNames=['Ahmed','Ali','Sara'];
const employees=document.querySelectorAll('.employee-info');
employees.forEach((employeeElement, index) => {
    // Check if a name exists at this index to prevent errors
    if (employeeNames[index]) {
        employeeElement.textContent = employeeNames[index];
    }
});

//Exercise 5
const companyLink=document.getElementById('company-link');
companyLink.setAttribute('href','https://developer.mozilla.org/');
companyLink.setAttribute('target', '_blank');
companyLink.setAttribute("rel", "noopener noreferrer");