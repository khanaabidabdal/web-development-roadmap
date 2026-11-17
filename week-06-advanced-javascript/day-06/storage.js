
const STORAGE_KEY = "taskflow.tasks.v1";

export function saveTasks(tasks) {
    try {
        const serializedTasks = JSON.stringify(tasks);

        localStorage.setItem(
            STORAGE_KEY,
            serializedTasks
        );

        return true;
    } catch (error) {
        console.error("Failed to save tasks:", error);
        return false;
    }
}

export function loadTasks() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (savedData === null) {
            return [];
        }

        const parsedData = JSON.parse(savedData);

        if (!Array.isArray(parsedData)) {
            throw new Error("Saved tasks must be an array.");
        }

        return parsedData.filter(isValidStoredTask);
    } catch (error) {
        console.error("Failed to load tasks:", error);
        return [];
    }
}

function isValidStoredTask(task) {
    if (
        task === null ||
        typeof task !== "object" ||
        Array.isArray(task)
    ) {
        return false;
    }

    const validPriorities = ["low", "medium", "high"];

    return (
        typeof task.id === "string" &&
        task.id.length > 0 &&
        typeof task.title === "string" &&
        task.title.trim().length >= 3 &&
        task.title.trim().length <= 100 &&
        typeof task.description === "string" &&
        task.description.trim().length <= 500 &&
        validPriorities.includes(task.priority) &&
        typeof task.completed === "boolean" &&
        typeof task.createdAt === "string" &&
        !Number.isNaN(Date.parse(task.createdAt))
    );
}
