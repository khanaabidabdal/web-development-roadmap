// Challenge: Array to track employees in the current page session
const registeredEmployees = [];

const form = document.getElementById('employee-form');

// Exercise 2: Listen for submit event
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop form submission / page refresh

    // Fetch Form Inputs
    const nameInput = document.getElementById('employee-name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const deptInput = document.getElementById('department');
    const salaryInput = document.getElementById('salary');
    const typeRadio = document.querySelector('input[name="emp-type"]:checked');

    // Fetch Error Containers
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const ageError = document.getElementById('age-error');
    const deptError = document.getElementById('department-error');
    const salaryError = document.getElementById('salary-error');
    const typeError = document.getElementById('type-error');

    // Exercise 5: Reset previous error messages before running validations
    nameError.textContent = '';
    emailError.textContent = '';
    ageError.textContent = '';
    deptError.textContent = '';
    salaryError.textContent = '';
    typeError.textContent = '';

    // Flag to track form validity status
    let isValid = true;

    // Exercise 3: Custom Field-by-Field Validation Logic
    // Name Validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Employee name is required.';
        isValid = false;
    } else if (nameInput.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        isValid = false;
    }
    nameInput.setAttribute(
        'aria-invalid',
        nameError.textContent !== '' ? 'true' : 'false'
    );

    // Email Validation (Using a simple regex pattern)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email format.';
        isValid = false;
    }
    emailInput.setAttribute(
        'aria-invalid',
        emailError.textContent!== '' ? 'true' : 'false'
    );

    // Age Validation
   const ageValue = Number(ageInput.value);
   if (ageInput.value.trim() === '') {
        ageError.textContent = 'Age is required.';
        isValid = false;
    } else if (
        !Number.isInteger(ageValue) ||
        ageValue < 18 ||
        ageValue > 65
    ) {
        ageError.textContent =
            'Age must be a whole number between 18 and 65.';
        isValid = false;
    }
    ageInput.setAttribute(
        'aria-invalid',
        ageError.textContent!== '' ? 'true' : 'false'
    );

    // Department Validation
    if (deptInput.value === '') {
        deptError.textContent = 'Please choose a department.';
        isValid = false;
    }
    deptInput.setAttribute(
        'aria-invalid',
        deptError.textContent!== '' ? 'true' : 'false'
    );

    // Salary Validation
    const salaryValue = Number(salaryInput.value);
    if (salaryInput.value === '') {
        salaryError.textContent = 'Salary is required.';
        isValid = false;
    } else if (!Number.isFinite(salaryValue) || salaryValue <= 0) {
        salaryError.textContent = 'Enter a valid salary greater than zero.';
        isValid = false;
    }
    salaryInput.setAttribute(
        'aria-invalid',
        salaryError.textContent!== '' ? 'true' : 'false'
    );

    // Employment Type Validation
    if (!typeRadio) {
        typeError.textContent = 'Please select an employment type.';
        isValid = false;
    }
    const typeGroup=document.getElementById('employment-type-group');

    typeGroup.setAttribute(
        'aria-invalid',
        typeError.textContent!=='' ? 'true' : 'false'
    );

    // Exercise 2, 4 & 5: If everything passes validation
    if (isValid) {
        // Exercise 2: Create the JavaScript object
        const employeeData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            age: ageValue,
            department: deptInput.value,
            salary: salaryValue,
            type: typeRadio.value
        };

        // Challenge: Store object in session array and update counter UI
        registeredEmployees.push(employeeData);
        document.getElementById('session-counter').textContent =`Total Employees Registered This Session: ${registeredEmployees.length}`;

        // Exercise 4: Safe display in summary card using textContent
        document.getElementById('summary-name').textContent = employeeData.name;
        document.getElementById('summary-email').textContent = employeeData.email;
        document.getElementById('summary-age').textContent = employeeData.age;
        document.getElementById('summary-department').textContent = employeeData.department;
        document.getElementById('summary-salary').textContent = `SAR ${employeeData.salary}`;
        document.getElementById('summary-type').textContent = employeeData.type;

        // Reveal the summary card element
        document.getElementById('summary-card').style.display = 'block';

        // Exercise 5: Reset all form fields (summary card stays visible)
        form.reset();
    }
});
