
# TaskFlow — Modular JavaScript Task Manager

TaskFlow is a browser-based task management application built with
vanilla JavaScript, ES modules, and a lightweight state-management
architecture.

The project demonstrates separation of concerns, immutable state
updates, input validation, browser persistence, and predictable
application behavior without relying on a frontend framework.

## Features

- Create tasks with a title, description, and priority.
- Edit existing tasks.
- Mark tasks as completed or active.
- Delete tasks.
- Filter tasks by completion status.
- Sort tasks by priority or creation date.
- View total, completed, and pending task counts.
- Persist tasks using browser localStorage.
- Display validation errors for invalid inputs.

## Technology Stack

- HTML5
- CSS3
- JavaScript (ES Modules)
- Browser DOM APIs
- localStorage

## Project Structure

```text
day-06/
├── index.html
├── styles.css
├── main.js
├── ui.js
├── store.js
├── reducer.js
├── storage.js
├── validators.js
└── README.md
```

## Architecture

TaskFlow separates application responsibilities into independent
modules.

### main.js — Application Controller

Coordinates user interactions and connects the application modules.

Responsibilities:
- Handles form submissions.
- Dispatches actions to the store.
- Registers event listeners.
- Generates task IDs and timestamps.
- Coordinates UI rendering and persistence.

### reducer.js — State Transitions

Defines how application state changes in response to actions.

Supported actions:
- ADD_TASK
- UPDATE_TASK
- TOGGLE_TASK
- DELETE_TASK

The reducer uses immutable updates and preserves the existing state
reference when an action produces no change.

Task IDs and timestamps are generated outside the reducer to
maintain deterministic state transitions.

### store.js — State Management

Provides a lightweight centralized state container.

Responsibilities:
- Stores the current application state.
- Exposes getState().
- Processes actions through dispatch().
- Supports subscribe() and unsubscribe().
- Notifies subscribers when the state reference changes.

### ui.js — Presentation Layer

Handles rendering and task presentation.

Responsibilities:
- Renders task lists.
- Displays task statistics.
- Applies filtering and sorting.
- Creates DOM elements using safe text assignment.

### validators.js — Input Validation

Validates and normalizes task data.

Validation rules:
- Title must contain 3–100 characters after trimming.
- Description is optional, with a maximum of 500 characters.
- Priority must be low, medium, or high.

Invalid input produces a ValidationError.

### storage.js — Persistence Layer

Handles browser localStorage operations.

Responsibilities:
- Saves task data as JSON.
- Restores saved tasks when the application loads.
- Rejects invalid stored task records.
- Handles malformed JSON and storage failures.

## Application Data Flow

1. The user interacts with the interface.
2. main.js receives the event.
3. main.js dispatches an action.
4. store.js passes the action to reducer.js.
5. reducer.js calculates the next state.
6. store.js updates its state if the reference changes.
7. Subscribers trigger persistence and UI rendering.

## Engineering Decisions

### Separation of Concerns

Each module owns a specific responsibility, reducing coupling
and making the application easier to maintain.

### Immutable State Updates

State changes use array and object operations that avoid mutating
existing state.

This makes state transitions easier to reason about and test.

### Pure Reducer Design

The reducer does not generate random IDs or timestamps.

Instead, these values are provided through actions, making state
transitions deterministic for equivalent inputs.

### Avoiding Unnecessary Updates

UPDATE_TASK, TOGGLE_TASK, and DELETE_TASK return the existing
state reference when no actual change is required.

The store uses Object.is() to avoid notifying subscribers for
these no-op actions.

### Defensive Persistence

Stored data is validated when loaded because localStorage
contents may be malformed, outdated, or manually modified.

## Testing

Manual functional verification includes:

- Creating tasks with different priorities.
- Editing task details.
- Toggling task completion.
- Filtering active and completed tasks.
- Sorting tasks.
- Deleting tasks.
- Refreshing the browser to verify persistence.
- Checking reducer immutability.
- Verifying deterministic reducer output.
- Confirming no-op actions preserve state references.

JavaScript syntax can be checked with:

```powershell
Get-ChildItem .\*.js | ForEach-Object {
    node --check $_.FullName
}
```

These checks provide basic confidence but do not replace an
automated test suite.

## Running Locally

1. Start a local development server in the project directory.
2. Open the application through localhost.
3. Use the task form to create and manage tasks.

For example, with VS Code Live Server, open index.html using
the Live Server extension.

## Future Improvements

- Automated unit and integration tests.
- Keyboard accessibility improvements.
- Stronger validation of action metadata.
- Task due dates and categories.
- Search functionality.
- Import/export support.
- Improved handling of storage quota errors.
```
