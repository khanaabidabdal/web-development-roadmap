
import { validateTaskInput } from "./validators.js";

export const ACTIONS = Object.freeze({
    ADD_TASK: "ADD_TASK",
    UPDATE_TASK: "UPDATE_TASK",
    TOGGLE_TASK: "TOGGLE_TASK",
    DELETE_TASK: "DELETE_TASK"
});

export function taskReducer(state, action) {
    switch (action.type) {

        // Create a new task
        case ACTIONS.ADD_TASK: {
            const { id, createdAt, ...taskInput } = action.payload;

            const input = validateTaskInput(taskInput);

            const newTask = {
                id,
                ...input,
                completed: false,
                createdAt
            };

            return [...state, newTask];
        }

        // Update an existing task
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
                priority: changes.priority ?? existingTask.priority
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

        // Toggle task completion
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

        // Delete a task
        case ACTIONS.DELETE_TASK: {
            const { id } = action.payload;

            const taskExits=state.some(
                task=>task.id===id
            );

            if(!taskExits){
                return state;
            }

            return state.filter(
                task => task.id !== id
            );
        }

        // Unknown action: preserve existing state
        default:
            return state;
    }
}
