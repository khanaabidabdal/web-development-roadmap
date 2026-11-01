let employees=[
    {
        id:101,
        name:'Ahmed',
        department:'IT',
        active:true
    },
    {
        id:102,
        name:'Mohammed',
        department:'Finance',
        active:true
    },
    {
        id:103,
        name:'Abdullah',
        department:'HR',
        active:false
    },
    {
        id:104,
        name:'John',
        department:'IT',
        active:true
    },
    {
        id:105,
        name:'Newton',
        department:'Finance',
        active:false
    }
];
let nextEmployeeId=106;

function renderStatistics(){
    const totalCount=document.getElementById('total-count');
    totalCount.textContent=employees.length;

    const activeCount=document.getElementById('active-count');
    const activeFilter=employees.filter(employee=>{
        return employee.active===true;
    });
    activeCount.textContent=activeFilter.length;

    const inactiveCount=document.getElementById('inactive-count');
    const inactiveFilter=employees.filter(employee=>{
        return employee.active===false;
    });
    inactiveCount.textContent=inactiveFilter.length;
}


const emptyMessage=document.getElementById('empty-message')
function renderEmployees(employeeList){
    const tbody=document.getElementById('employee-table-body');

    tbody.replaceChildren();
    employeeList.forEach(employee=>{
        const row=document.createElement('tr');

        const idCell=document.createElement('td');
        idCell.textContent=employee.id;

        const nameCell=document.createElement('td');
        nameCell.textContent=employee.name;

        const departmentCell=document.createElement('td');
        departmentCell.textContent=employee.department;

        const statusCell=document.createElement('td');
        const statusBadge=document.createElement('span');
        statusBadge.textContent=employee.active ? 'Active' : 'Inactive';
        statusBadge.classList.add(
            'badge',
            employee.active ? 'active' : 'inactive'
        );
        statusCell.append(statusBadge);

        const actionCell=document.createElement('td');

        const editButton=document.createElement('button');
        editButton.textContent='Edit';
        editButton.dataset.action='edit';
        editButton.dataset.id=employee.id;
        editButton.type='button';
        editButton.classList.add('action-btn');

        const toggleButton=document.createElement('button');
        toggleButton.textContent='Toggle';
        toggleButton.dataset.action='toggle';
        toggleButton.dataset.id=employee.id;
        toggleButton.type='button';
        toggleButton.classList.add('action-btn');

        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.dataset.action='delete';
        deleteButton.dataset.id=employee.id;
        deleteButton.type='button';
        deleteButton.classList.add('action-btn');

        actionCell.append(editButton,toggleButton,deleteButton);
        row.append(idCell,nameCell,departmentCell,statusCell,actionCell);
        tbody.append(row);
    });

    emptyMessage.hidden = employeeList.length > 0;
    emptyMessage.textContent = 'No employees found. Try adjusting your filters.';
};

//Search Input & Filters
const searchInput=document.getElementById('search-input');
const statusFilter=document.getElementById('status-filter');
const departmentFilter=document.getElementById('department-filter');


function getFilteredEmployees(){
    const searchTerm=searchInput.value.trim().toLowerCase();
    const selectedStatus=statusFilter.value;
    const selectedDepartment=departmentFilter.value;

    return employees.filter(employee=>{
        const matchNames=employee.name
        .toLowerCase()
        .includes(searchTerm);
        
        const matchStatus=
        selectedStatus==='all' ||
        (selectedStatus==='active' && employee.active===true) ||
        (selectedStatus==='inactive' && employee.active===false);

        const matchDepartment=
        selectedDepartment==='all' ||
        employee.department===selectedDepartment;

        return matchNames && matchStatus && matchDepartment; //It will appear when both are true

    });
}


function renderDashboard() {
    renderStatistics();

    const filteredEmployees = getFilteredEmployees();

    renderEmployees(filteredEmployees);
}
renderDashboard();

searchInput.addEventListener('input',()=>{
    renderDashboard();
});

statusFilter.addEventListener('change',()=>{
    renderDashboard();
})

departmentFilter.addEventListener('change',()=>{
    renderDashboard();
})

const registrationForm=document.getElementById('registration-form');
const employeeName=document.getElementById('employee-name');
const employeeDepartment=document.getElementById('employee-department');

registrationForm.addEventListener('submit',event=>{
    event.preventDefault();

    const name=employeeName.value.trim();
    const department=employeeDepartment.value;

    if(name.length<3 || department===''){
        alert('Enter a valid name and select a department');
        return;
    }

    const newEmployee={
        id:nextEmployeeId++,
        name:name,
        department:department,
        active:true
    };

    employees.push(newEmployee);
    

    renderDashboard();

    registrationForm.reset();

});

function deleteEmployee(id){
    employees=employees.filter(employee=>employee.id !==id);


    if(!editSection.hidden && Number(editId.value)===id){
        editForm.reset();
        editSection.hidden=true;
    }
    renderDashboard();
};

function toggleEmployeeStatus(id){
    const employee=employees.find(employee=>employee.id===id);

    if(!employee){
        return;
    }

    employee.active=!employee.active;

    renderDashboard();
}

//Open Edit Form
const editSection=document.getElementById('edit-section');
const editForm=document.getElementById('edit-form');
const editId=document.getElementById('edit-id');
const editName=document.getElementById('edit-name');
const editDepartment=document.getElementById('edit-department');

function openEditForm(id){
    const employee=employees.find(employee=>employee.id===id);

    if(!employee){
        return;
    }

    editId.value=employee.id;
    editName.value=employee.name;
    editDepartment.value=employee.department;

    editSection.hidden =false;

    editSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
});
}

const employeeTableBody=document.getElementById('employee-table-body');

employeeTableBody.addEventListener('click',event=>{
    const button=event.target.closest('button[data-action]');

    if(!button || !employeeTableBody.contains(button)){
        return;
    }

    const action=button.dataset.action;
    const id=Number(button.dataset.id);

    if(action==='delete'){
        deleteEmployee(id);
    }else if(action==='toggle'){
        toggleEmployeeStatus(id);
    }else if(action==='edit'){
        openEditForm(id);
    }

});

editForm.addEventListener('submit',event=>{
    event.preventDefault();

    const id=Number(editId.value);
    const name=editName.value.trim();
    const department=editDepartment.value;

    const employee=employees.find(employee=>employee.id===id);

    if(!employee){
        return;
    }

    if(name.length<3){
        alert('Employee name must be at least 3 Character');
        return;
    }

    if(department===''){
        alert('Please select a department.');
        return;
    }

    employee.name = name;
    employee.department = department;

    renderDashboard();

    editForm.reset();
    editSection.hidden=true;

});

const editCancel=document.getElementById('edit-cancel');
editCancel.addEventListener('click',()=>{
    editForm.reset();
    editSection.hidden=true;
});

