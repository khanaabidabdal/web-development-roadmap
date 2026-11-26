
import { createStore } from "./store.js";
import { taskReducer, ACTIONS } from "./reducer.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks, renderStats } from "./ui.js";
import {
    ValidationError,
    validateTaskInput
} from "./validators.js";

import { requireElement } from "./dom.js";

import type {
    Task,
    TaskAction,
    TaskFilter,
    TaskSort
} from "./types.js";

const form = requireElement(
    "#task-form",
    HTMLFormElement
);

const taskIdInput = requireElement(
    "#task-id",
    HTMLInputElement
);

const titleInput = requireElement(
    "#task-title",
    HTMLInputElement
);

const descriptionInput = requireElement(
    "#task-description",
    HTMLTextAreaElement
);

const priorityInput = requireElement(
    "#task-priority",
    HTMLSelectElement
);

const submitButton = requireElement(
    "#submit-btn",
    HTMLButtonElement
);

const cancelEditButton = requireElement(
    "#cancel-edit-btn",
    HTMLButtonElement
);

const formHeading = requireElement(
    "#form-heading",
    HTMLHeadingElement
);

const formError = requireElement(
    "#form-error",
    HTMLParagraphElement
);

const taskList = requireElement(
    "#task-list",
    HTMLUListElement
);

const filterSelect = requireElement(
    "#task-filter",
    HTMLSelectElement
);

const sortSelect = requireElement(
    "#task-sort",
    HTMLSelectElement
);

const store = createStore<Task[], TaskAction>(
    taskReducer,
    loadTasks()
);

function getSelectedFilter(): TaskFilter {
    const value = filterSelect.value;

    if (value === "active" || value === "completed") {
        return value;
    }

    return "all";
}

function getSelectedSort(): TaskSort {
    const value = sortSelect.value;

    if (value === "oldest" || value === "priority") {
        return value;
    }

    return "newest";
}

function renderApp(): void {
    const tasks = store.getState();

    renderStats(tasks);

    renderTasks(
        tasks,
        getSelectedFilter(),
        getSelectedSort()
    );
}

store.subscribe(tasks => {
    saveTasks(tasks);
    renderApp();
});

function showError(message: string): void {
    formError.textContent = message;
    formError.hidden = false;
}

function clearError(): void {
    formError.textContent = "";
    formError.hidden = true;
}

function resetForm(): void {
    form.reset();

    taskIdInput.value = "";

    submitButton.textContent = "Add Task";
    formHeading.textContent = "Create a Task";
    cancelEditButton.hidden = true;

    clearError();
}

function startEditing(task: Task): void {
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

    const editingId = taskIdInput.value;

    try {
        const taskInput = validateTaskInput({
            title: titleInput.value,
            description: descriptionInput.value,
            priority: priorityInput.value
        });

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
                    id: crypto.randomUUID(),
                    createdAt: new Date().toISOString()
                }
            });
        }

        resetForm();

    } catch (error) {
        if (error instanceof ValidationError) {
            showError(error.message);
        } else {
            console.error(
                "Unexpected task error:",
                error
            );

            showError(
                "Something went wrong. Please try again."
            );
        }
    }
});

taskList.addEventListener("click", event => {
    if (!(event.target instanceof Element)) {
        return;
    }

    const button = event.target.closest(
        "button[data-action]"
    );

    if (
        !(button instanceof HTMLButtonElement) ||
        !taskList.contains(button)
    ) {
        return;
    }

    const { action, id } = button.dataset;

    if (!id) {
        return;
    }

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

cancelEditButton.addEventListener(
    "click",
    resetForm
);

filterSelect.addEventListener(
    "change",
    renderApp
);

sortSelect.addEventListener(
    "change",
    renderApp
);

// Initial rendering after restoring saved tasks
renderApp();