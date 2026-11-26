
import type {
    Task,
    Priority,
    TaskFilter,
    TaskSort,
    TaskUIAction
} from "./types.js";

import { requireElement } from "./dom.js";

const taskList = requireElement(
    "#task-list",
    HTMLUListElement
);

const emptyMessage = requireElement(
    "#empty-message",
    HTMLParagraphElement
);

const totalCount = requireElement(
    "#total-count",
    HTMLSpanElement
);

const completedCount = requireElement(
    "#completed-count",
    HTMLSpanElement
);

const pendingCount = requireElement(
    "#pending-count",
    HTMLSpanElement
);

const priorityOrder: Record<Priority, number> = {
    high: 3,
    medium: 2,
    low: 1
};

export function getVisibleTasks(
    tasks: Task[],
    filter: TaskFilter,
    sort: TaskSort
): Task[] {
    let visibleTasks = [...tasks];

    if (filter === "active") {
        visibleTasks = visibleTasks.filter(
            task => !task.completed
        );
    }

    if (filter === "completed") {
        visibleTasks = visibleTasks.filter(
            task => task.completed
        );
    }

    if (sort === "priority") {
        visibleTasks.sort(
            (a, b) =>
                priorityOrder[b.priority] -
                priorityOrder[a.priority]
        );
    } else if (sort === "oldest") {
        visibleTasks.sort(
            (a, b) =>
                Date.parse(a.createdAt) -
                Date.parse(b.createdAt)
        );
    } else {
        visibleTasks.sort(
            (a, b) =>
                Date.parse(b.createdAt) -
                Date.parse(a.createdAt)
        );
    }

    return visibleTasks;
}

export function renderStats(tasks: Task[]): void {
    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = total - completed;

    totalCount.textContent = String(total);
    completedCount.textContent = String(completed);
    pendingCount.textContent = String(pending);
}

export function renderTasks(
    tasks: Task[],
    filter: TaskFilter = "all",
    sort: TaskSort = "newest"
): void {
    const visibleTasks = getVisibleTasks(
        tasks,
        filter,
        sort
    );

    taskList.replaceChildren();

    emptyMessage.hidden = visibleTasks.length > 0;

    for (const task of visibleTasks) {
        taskList.appendChild(createTaskElement(task));
    }
}

function createTaskElement(
    task: Task
): HTMLLIElement {
    const item = document.createElement("li");

    item.className = "task-item";

    if (task.completed) {
        item.classList.add("completed");
    }

    const content = document.createElement("div");

    const title = document.createElement("h3");

    title.className = "task-title";
    title.textContent = task.title;

    const description = document.createElement("p");

    description.className = "task-description";
    description.textContent = task.description;

    const priority = document.createElement("span");

    priority.className = `priority-${task.priority}`;
    priority.textContent =
        `${task.priority.toUpperCase()} priority`;

    content.append(title, description, priority);

    const actions = document.createElement("div");

    actions.className = "task-actions";

    const toggleButton = createActionButton(
        task.completed ? "Undo" : "Complete",
        "toggle",
        task.id
    );

    const editButton = createActionButton(
        "Edit",
        "edit",
        task.id
    );

    const deleteButton = createActionButton(
        "Delete",
        "delete",
        task.id
    );

    actions.append(
        toggleButton,
        editButton,
        deleteButton
    );

    item.append(content, actions);

    return item;
}

function createActionButton(
    label: string,
    action: TaskUIAction,
    taskId: string
): HTMLButtonElement {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = label;
    button.dataset.action = action;
    button.dataset.id = taskId;

    return button;
}