
import { createStore } from "./store.js";
import { taskReducer, ACTIONS } from "./reducer.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks, renderStats } from "./ui.js";
import { ValidationError } from "./validators.js";

const form = document.querySelector("#task-form");
const taskIdInput = document.querySelector("#task-id");
const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");
const priorityInput = document.querySelector("#task-priority");

const submitButton = document.querySelector("#submit-btn");
const cancelEditButton = document.querySelector("#cancel-edit-btn");
const formHeading = document.querySelector("#form-heading");
const formError = document.querySelector("#form-error");

const taskList = document.querySelector("#task-list");
const filterSelect = document.querySelector("#task-filter");
const sortSelect = document.querySelector("#task-sort");

const store = createStore(taskReducer, loadTasks());

function renderApp() {
    const tasks = store.getState();

    renderStats(tasks);
    renderTasks(
        tasks,
        filterSelect.value,
        sortSelect.value
    );
}

store.subscribe(tasks => {
    saveTasks(tasks);
    renderApp();
});

function showError(message) {
    formError.textContent = message;
    formError.hidden = false;
}

function clearError() {
    formError.textContent = "";
    formError.hidden = true;
}

function resetForm() {
    form.reset();
    taskIdInput.value = "";

    submitButton.textContent = "Add Task";
    formHeading.textContent = "Create a Task";
    cancelEditButton.hidden = true;

    clearError();
}

function startEditing(task) {
    taskIdInput.value = task.id;
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    priorityInput.value = task.priority;

    submitButton.textContent = "Save Changes";
    formHeading.textContent = "Edit Task";
    cancelEditButton.hidden = false;

    clearError();
    titleInput.focus();
}

form.addEventListener("submit", event => {
    event.preventDefault();
    clearError();

    const taskInput = {
        title: titleInput.value,
        description: descriptionInput.value,
        priority: priorityInput.value
    };

    const editingId = taskIdInput.value;

    try {
        if (editingId) {
            store.dispatch({
                type: ACTIONS.UPDATE_TASK,
                payload: {
                    id: editingId,
                    ...taskInput
                }
            });
        } else {
            store.dispatch({
                type: ACTIONS.ADD_TASK,
                payload: {
                    ...taskInput,
                    id:crypto.randomUUID(),
                    createdAt:new Date().toISOString()
                }
            });
        }

        resetForm();
    } catch (error) {
        if (error instanceof ValidationError) {
            showError(error.message);
        } else {
            console.error("Unexpected task error:", error);
            showError("Something went wrong. Please try again.");
        }
    }
});

taskList.addEventListener("click", event => {
    const button = event.target.closest(
        "button[data-action]"
    );

    if (!button || !taskList.contains(button)) {
        return;
    }

    const { action, id } = button.dataset;

    const task = store.getState().find(
        item => item.id === id
    );

    if (!task) {
        return;
    }

    if (action === "toggle") {
        store.dispatch({
            type: ACTIONS.TOGGLE_TASK,
            payload: { id }
        });
    }

    if (action === "edit") {
        startEditing(task);
    }

    if (action === "delete") {
        store.dispatch({
            type: ACTIONS.DELETE_TASK,
            payload: { id }
        });

        if (taskIdInput.value === id) {
            resetForm();
        }
    }
});

cancelEditButton.addEventListener("click", resetForm);

filterSelect.addEventListener("change", renderApp);
sortSelect.addEventListener("change", renderApp);

// Initial rendering after restoring saved tasks
renderApp();
