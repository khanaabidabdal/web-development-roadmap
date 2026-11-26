
# Day 06 — TaskFlow TypeScript Migration

## Objective

Migrate the modular TaskFlow application developed
during Week 06 from JavaScript to TypeScript while
preserving its architecture, functionality and design.

## Concepts Applied

- TypeScript interfaces and type aliases
- Literal types and discriminated unions
- Generic functions and interfaces
- Runtime validation
- Custom type guards
- Control flow narrowing
- Unknown types
- Strict null safety
- Type-safe DOM manipulation
- ES modules and type-only imports
- Immutable state management
- Browser compilation
- Runtime and regression testing

## Application Features

- Create, edit and delete tasks
- Complete and undo tasks
- Cancel task editing
- Filter by task status
- Sort by date and priority
- Display task statistics
- Persist tasks using localStorage
- Validate and normalize user input
- Handle empty states and validation errors

## Project Structure

| File | Responsibility |
| --- | --- |
| types.ts | Shared types and interfaces |
| validators.ts | Runtime validation and normalization |
| reducer.ts | Immutable state transitions |
| store.ts | Generic state management |
| storage.ts | Local storage persistence |
| dom.ts | Type-safe DOM element access |
| ui.ts | Rendering, filtering and sorting |
| main.ts | Application controller |
| validators-test.ts | Validator test cases |
| core-test.ts | Automated reducer and store tests |
| index.html | Application structure |
| styles.css | Application styling |

## Architecture

The application follows a modular architecture
with separate responsibilities for presentation,
state management, validation and persistence.

The application controller coordinates user events,
dispatches typed actions and triggers rendering.

The reducer handles immutable state transitions,
while the generic store manages application state
and subscriber notifications.

## Storage Isolation

The TypeScript application uses:

    taskflow.tasks.ts.v1

The original JavaScript application uses:

    taskflow.tasks.v1

Separate storage keys prevent the two versions
from overwriting each other's data.

## Build Configuration

The application uses a dedicated TypeScript
configuration:

    tsconfig.taskflow.json

The compiler targets ES2022 and generates browser
JavaScript and source maps inside day-06/dist.

Generated files are excluded from version control.

## Running the Application

Execute the following commands from the
week-07-typescript directory.

### Install dependencies

    npm ci

### Type checking

    npm run typecheck

### Build

    npm run build:taskflow

### Start a local server using Python

    python -m http.server 8080 --bind 127.0.0.1 --directory day-06

Open:

    http://localhost:8080/

Alternatively, use the PHP development server:

    php -S localhost:8000 -t day-06

## Testing

### Validator test cases

    npm run test:validators

### Automated core tests

    npm run test:core

## Verification Results

| Verification | Result |
| --- | --- |
| Strict TypeScript compilation | Passed |
| Browser build | Passed |
| Validator cases | 9/9 |
| Automated core tests | 15/15 |
| Manual browser tests | 17/17 |
| Previous-day regression checks | Passed |

## Engineering Principles

- Preserve existing application behaviour.
- Validate untrusted data at runtime.
- Avoid explicit any and unsafe type assertions.
- Keep state transitions immutable.
- Separate business logic from presentation.
- Maintain reusable and strongly typed modules.
- Preserve the original JavaScript implementation.
- Verify functionality before committing changes.

## Outcome

Successfully migrated TaskFlow from JavaScript
to TypeScript while maintaining its existing
features and modular architecture.

The application demonstrates practical TypeScript
usage in a complete browser-based application.