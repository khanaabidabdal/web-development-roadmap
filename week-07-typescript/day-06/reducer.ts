
import { validateTaskInput } from "./validators.js";
import type { Task, TaskAction } from "./types.js";

export const ACTIONS = Object.freeze({
    ADD_TASK: "ADD_TASK",
    UPDATE_TASK: "UPDATE_TASK",
    TOGGLE_TASK: "TOGGLE_TASK",
    DELETE_TASK: "DELETE_TASK"
} as const);

export function taskReducer(
    state: Task[],
    action: TaskAction
): Task[] {
    switch (action.type) {

        case ACTIONS.ADD_TASK: {
            const { id, createdAt, ...taskInput } =
                action.payload;

            const input = validateTaskInput(taskInput);

            const newTask: Task = {
                id,
                ...input,
                completed: false,
                createdAt
            };

            return [...state, newTask];
        }

        case ACTIONS.UPDATE_TASK: {
            const { id, ...changes } = action.payload;

            const existingTask = state.find(
                task => task.id === id
            );

            if (!existingTask) {
                return state;
            }

            const validatedInput = validateTaskInput({
                title: changes.title ?? existingTask.title,
                description:
                    changes.description ?? existingTask.description,
                priority:
                    changes.priority ?? existingTask.priority
            });

            const hasChanges =
                validatedInput.title !== existingTask.title ||
                validatedInput.description !== existingTask.description ||
                validatedInput.priority !== existingTask.priority;

            if (!hasChanges) {
                return state;
            }

            return state.map(task =>
                task.id === id
                    ? { ...task, ...validatedInput }
                    : task
            );
        }

        case ACTIONS.TOGGLE_TASK: {
            const { id } = action.payload;

            const taskExists = state.some(
                task => task.id === id
            );

            if (!taskExists) {
                return state;
            }

            return state.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            );
        }

        case ACTIONS.DELETE_TASK: {
            const { id } = action.payload;

            const taskExists = state.some(
                task => task.id === id
            );

            if (!taskExists) {
                return state;
            }

            return state.filter(
                task => task.id !== id
            );
        }

        default:
            return state;
    }
}