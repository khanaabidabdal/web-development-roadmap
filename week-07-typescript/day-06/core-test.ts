
import { createStore } from "./store.js";
import { taskReducer, ACTIONS } from "./reducer.js";
import type { Task, TaskAction } from "./types.js";

let passed = 0;

function assert(
    condition: boolean,
    message: string
): void {
    if (!condition) {
        throw new Error(`FAIL: ${message}`);
    }

    passed++;
    console.log(`PASS: ${message}`);
}

const initialState: Task[] = [];

const store = createStore<Task[], TaskAction>(
    taskReducer,
    initialState
);

let notifications = 0;

const unsubscribe = store.subscribe(() => {
    notifications++;
});

// Test 1: Initial state
assert(
    store.getState().length === 0,
    "Initial state is empty"
);

// Test 2: Add task
store.dispatch({
    type: ACTIONS.ADD_TASK,
    payload: {
        id: "task-001",
        title: "  Learn TypeScript  ",
        description: "Complete Week 07",
        priority: "high",
        createdAt: "2026-11-26T08:00:00.000Z"
    }
});

assert(
    store.getState().length === 1,
    "Task added successfully"
);

// Test 3: Immutability
assert(
    initialState.length === 0,
    "Original state remains unchanged"
);

// Test 4: Normalization
assert(
    store.getState()[0]?.title === "Learn TypeScript",
    "Task title normalized"
);

// Test 5: Default completion status
assert(
    store.getState()[0]?.completed === false,
    "New task is pending"
);

// Test 6: Subscriber notification
assert(
    notifications === 1,
    "Subscriber notified after state change"
);

// Test 7: Update task
const previousState = store.getState();

store.dispatch({
    type: ACTIONS.UPDATE_TASK,
    payload: {
        id: "task-001",
        title: "Master TypeScript",
        priority: "medium"
    }
});

assert(
    store.getState()[0]?.title === "Master TypeScript",
    "Task updated successfully"
);

// Test 8: Immutable update
assert(
    previousState[0]?.title === "Learn TypeScript",
    "Previous task remains unchanged"
);

// Test 9: No-op update
const unchangedState = store.getState();
const previousNotifications = notifications;

store.dispatch({
    type: ACTIONS.UPDATE_TASK,
    payload: {
        id: "task-001",
        title: "Master TypeScript"
    }
});

assert(
    Object.is(unchangedState, store.getState()),
    "No-op update preserves state reference"
);

// Test 10: No unnecessary notification
assert(
    notifications === previousNotifications,
    "No-op update does not notify subscribers"
);

// Test 11: Complete task
store.dispatch({
    type: ACTIONS.TOGGLE_TASK,
    payload: { id: "task-001" }
});

assert(
    store.getState()[0]?.completed === true,
    "Task completed successfully"
);

// Test 12: Undo completion
store.dispatch({
    type: ACTIONS.TOGGLE_TASK,
    payload: { id: "task-001" }
});

assert(
    store.getState()[0]?.completed === false,
    "Task completion reversed"
);

// Test 13: Unknown task ID
const beforeInvalidAction = store.getState();

store.dispatch({
    type: ACTIONS.DELETE_TASK,
    payload: { id: "missing-task" }
});

assert(
    Object.is(beforeInvalidAction, store.getState()),
    "Unknown task ID preserves state"
);

// Test 14: Unsubscribe
unsubscribe();

const beforeDeleteNotifications = notifications;

store.dispatch({
    type: ACTIONS.DELETE_TASK,
    payload: { id: "task-001" }
});

assert(
    notifications === beforeDeleteNotifications,
    "Unsubscribed listener is not notified"
);

// Test 15: Delete task
assert(
    store.getState().length === 0,
    "Task deleted successfully"
);

console.log(`\nAll ${passed} core tests passed.`);