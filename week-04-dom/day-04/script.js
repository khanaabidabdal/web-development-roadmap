//Exercise 1
let employees =[
    {id:101, name:'Ahmed',department:'IT'},
    {id:102, name:'Abdullah',department:'Finance'}
] 

const container=document.getElementById('container');

const card=document.createElement('article');
card.classList.add('card');

const heading=document.createElement('h2');
heading.textContent='Employee Card';

const count=document.createElement('p');
count.classList.add('emp-count');
count.textContent = `Employee Count: ${employees.length}`;

card.append(heading,count);
container.append(card);

//Exercise 2
function renderEmployee(){
    const employeeCard=document.getElementById('employee-card');
    

    employeeCard.replaceChildren();
    if (employees.length===0){
        const emptyMessage=document.createElement('p');

        emptyMessage.textContent='No Employees Registered';
        emptyMessage.classList.add('empty-message');

        employeeCard.append(emptyMessage);
    } else {
        employees.forEach((employee)=>{
            const card=document.createElement('article');
            card.classList.add('employee-card');
            
            const paragraph=document.createElement('p');
            const removeButton=document.createElement('button');
            removeButton.textContent='Remove';
            removeButton.type='button';
            removeButton.classList.add('remove-btn');

            paragraph.textContent=
            `Employee ID:${employee.id} | Name : ${employee.name} | Department : ${employee.department}`;
            card.append(paragraph,removeButton);
            employeeCard.append(card);

            removeButton.addEventListener('click',()=>{
                employees=employees.filter(emp=>emp.id !==employee.id);

                renderEmployee();
        })
    });
    }

    count.textContent=`Employee Count: ${employees.length}`;
}

renderEmployee();

//Exercise 3
let nextEmployeeId=103;
const form=document.getElementById('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const nameInput=document.getElementById('name');
    const deptInput=document.getElementById('dept');

    const nameError=document.getElementById('name-error');
    const deptError=document.getElementById('dept-error');

    nameError.textContent='';
    deptError.textContent='';

    let isValid=true;

    if(nameInput.value.trim()===''){
        nameError.textContent='Employee name is required.';
        isValid=false;
    } else if (nameInput.value.trim().length < 3){
        nameError.textContent='Name must be at least 3 characters.';
        isValid=false;
    }
    nameInput.setAttribute(
        'aria-invalid',
        nameError.textContent !== '' ? 'true' : 'false'
    );

    if(deptInput.value ===''){
        deptError.textContent='Please choose a department';
        isValid=false;
    }
    deptInput.setAttribute(
        'aria-invalid',
        deptError.textContent!== '' ? 'true' : 'false'
    );

    if(isValid){
        const employeeData={
            id:nextEmployeeId,
            name:nameInput.value.trim(),
            department:deptInput.value,
        };
        employees.push(employeeData);

        nextEmployeeId++;
        renderEmployee();

        form.reset();

        nameInput.setAttribute('aria-invalid','false');
        deptInput.setAttribute('aria-invalid','false');
    } 
})

