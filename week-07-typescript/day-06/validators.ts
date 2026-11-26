import type { Priority,ValidatedTaskInput, Task } from "./types.js";

export class ValidationError extends Error{
    constructor(message:string){
        super(message);
        this.name='ValidationError';
    }
}

export function isPriority(value:unknown):value is Priority{
    return(
        value==='low' ||
        value==='medium'||
        value==='high'
    );
}

export function isRecord(value:unknown):value is Record<string,unknown>{
    return(
        typeof value==='object' &&
        value!==null &&
        !Array.isArray(value)
    )
}


export function validateTaskInput(
    input: unknown
): ValidatedTaskInput {
    if (!isRecord(input)) {
        throw new ValidationError(
            "Task input must be an object."
        );
    }

    const {
        title,
        description = "",
        priority
    } = input;

    if (typeof title !== "string") {
        throw new ValidationError(
            "Task title must be a string."
        );
    }

    const cleanTitle = title.trim();

    if (cleanTitle.length < 3 || cleanTitle.length > 100) {
        throw new ValidationError(
            "Task title must contain 3 to 100 characters."
        );
    }

    if (typeof description !== "string") {
        throw new ValidationError(
            "Task description must be a string."
        );
    }

    const cleanDescription = description.trim();

    if (cleanDescription.length > 500) {
        throw new ValidationError(
            "Task description cannot exceed 500 characters."
        );
    }

    if (!isPriority(priority)) {
        throw new ValidationError(
            "Priority must be low, medium or high."
        );
    }

    return {
        title: cleanTitle,
        description: cleanDescription,
        priority
    };
}


export function isValidStoredTask(
    task: unknown
): task is Task {
    if (!isRecord(task)) {
        return false;
    }

    const {
        id,
        title,
        description,
        priority,
        completed,
        createdAt
    } = task;

    return (
        typeof id === "string" &&
        id.trim().length > 0 &&

        typeof title === "string" &&
        title.trim().length >= 3 &&
        title.trim().length <= 100 &&

        typeof description === "string" &&
        description.trim().length <= 500 &&

        isPriority(priority) &&

        typeof completed === "boolean" &&

        typeof createdAt === "string" &&
        !Number.isNaN(Date.parse(createdAt))
    );
}
