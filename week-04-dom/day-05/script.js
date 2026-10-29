let employees=[
    {
        id:101,
        name:'Ahmed',
        department:'IT',
        active:true
    },
    {
        id:102,
        name:'Abdullah',
        department:'Finance',
        active:false 
    },
    {
        id:103,
        name:'Abdul Ahad',
        department:'HR',
        active:true

    }
];

function renderEmployees(){
    const tbody=document.getElementById('employee-table-body');

    tbody.replaceChildren();
    employees.forEach(employee=>{
        const row=document.createElement('tr');

        const idCell=document.createElement('td');
        idCell.textContent=employee.id;

        const nameCell=document.createElement('td');
        nameCell.textContent=employee.name;

        const departmentCell=document.createElement('td');
        departmentCell.textContent=employee.department;

        const statusCell=document.createElement('td');
        statusCell.textContent=employee.active ? 'Active' : 'Inactive';
        statusCell.classList.add(
            employee.active ? 'status-active' : 'status-inactive'
        );

        const actionCell=document.createElement('td');
        
        const editButton=document.createElement('button');
        editButton.textContent='Edit';
        editButton.dataset.action='edit';
        editButton.dataset.id=employee.id;
        editButton.type='button';

        const toggleButton=document.createElement('button');
        toggleButton.textContent='Toggle';
        toggleButton.dataset.action='toggle';
        toggleButton.dataset.id=employee.id;
        toggleButton.type='button';

        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.dataset.action='delete';
        deleteButton.dataset.id=employee.id;
        deleteButton.type='button';

        actionCell.append(editButton,toggleButton,deleteButton);



        row.append(idCell,nameCell,departmentCell,statusCell,actionCell);
        tbody.append(row);
    });

    const count=document.getElementById('count');
    count.textContent=employees.length;

}
renderEmployees();

const tbody=document.getElementById('employee-table-body');
const editSection=document.getElementById('edit-section');
const editForm=document.getElementById('edit-form');
const editId=document.getElementById('edit-id');
const editName=document.getElementById('edit-name');
const editDepartment=document.getElementById('edit-department');
const cancelEdit=document.getElementById('cancel-edit');

tbody.addEventListener('click',(event)=>{
    const button=event.target.closest('button[data-action]');

    if(!button||!tbody.contains(button)) return;

    const action=button.dataset.action;
    const employeeId=Number(button.dataset.id);

    if(action==='delete'){
        const index=employees.findIndex(emp=>emp.id===employeeId);

        if(index!==-1){
            employees.splice(index,1);
        }
        renderEmployees();
    } else if(action==='toggle'){
        const employee=employees.find(emp=>emp.id===employeeId);

        if(employee){
            employee.active=!employee.active;
        }
        renderEmployees();
    } else if(action==='edit'){
        const employee=employees.find(emp=>emp.id===employeeId);

        if(!employee) return;

        editId.value=employee.id;
        editName.value=employee.name;
        editDepartment.value=employee.department;

        editSection.hidden=false;
    }
})

editForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const employeeId=Number(editId.value);

    const employee=employees.find(emp=>emp.id===employeeId);

    if(!employee) return;

    const newName=editName.value.trim();
    const newDepartment=editDepartment.value;

    if(newName.length<3){
        alert('Employeee name msut be at least 3 character');
        return;
    }

    if(newDepartment===''){
        alert('Please select a department.');
        return;
    }

    employee.name=newName;
    employee.department=newDepartment;

    renderEmployees();

    editForm.reset();
    editSection.hidden=true;
})


cancelEdit.addEventListener('click',()=>{
    editForm.reset();
    editSection.hidden=true;
})