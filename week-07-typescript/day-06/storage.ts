
import type { Task } from "./types.js";
import { isValidStoredTask } from "./validators.js";

const STORAGE_KEY = "taskflow.tasks.ts.v1";

export function saveTasks(tasks: Task[]): boolean {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(tasks)
        );

        return true;
    } catch (error) {
        console.error("Failed to save tasks:", error);

        return false;
    }
}

export function loadTasks(): Task[] {
    try {
        const savedTasks = localStorage.getItem(STORAGE_KEY);

        if (savedTasks === null) {
            return [];
        }

        const parsedTasks: unknown = JSON.parse(savedTasks);

        if (!Array.isArray(parsedTasks)) {
            throw new Error("Saved tasks must be an array.");
        }

        return parsedTasks.filter(isValidStoredTask);

    } catch (error) {
        console.error("Failed to load tasks:", error);

        return [];
    }
}
