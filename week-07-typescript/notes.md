
# Week 07 — TypeScript Technical Notes

## 1. Introduction to TypeScript

TypeScript is a statically typed superset of JavaScript.

It provides compile-time type checking, improved
developer tooling and explicit application contracts.

TypeScript types are erased during compilation.
The browser executes JavaScript, not TypeScript types.

Static type checking does not replace runtime validation.

## 2. Type Annotations and Inference

Explicit type annotation:

    let price: number = 500;

Type inference:

    let price = 500;

TypeScript can infer types from assigned values.

Use explicit annotations when defining important
application contracts and function boundaries.

## 3. Literal Types and Unions

Literal types restrict values to specific possibilities.

    type Priority = "low" | "medium" | "high";

Union types allow a value to belong to one of
multiple permitted types.

They are useful for application statuses,
categories, actions and configuration options.

## 4. Any vs Unknown

The any type bypasses many TypeScript safety checks.

The unknown type accepts any value but requires
narrowing before performing type-specific operations.

    function inspect(value: unknown) {
        if (typeof value === "string") {
            console.log(value.toUpperCase());
        }
    }

Prefer unknown when receiving untrusted data.

## 5. Interfaces

Interfaces define object contracts.

    interface Product {
        id: number;
        name: string;
        price: number;
        description?: string;
    }

Optional properties may be absent.

Readonly properties cannot be reassigned through
the typed reference.

Interfaces support inheritance and declaration merging.

## 6. Type Aliases

Type aliases can represent object structures,
primitive types, unions and intersections.

    type ProductCategory = "books" | "electronics";

    type Inventory = {
        stock: number;
    };

    type StoreProduct = Product & Inventory;

Intersection types combine type requirements.
They do not merge runtime objects.

## 7. Functions

TypeScript supports typed parameters and return values.

    function calculateTotal(
        price: number,
        quantity: number
    ): number {
        return price * quantity;
    }

Functions can also use optional, default and
rest parameters.

The void return type indicates that a function
does not provide a meaningful return value.

## 8. Generics

Generics allow reusable implementations while
preserving relationships between types.

    function identity<T>(value: T): T {
        return value;
    }

Generic constraints restrict acceptable types.

    interface PricedItem {
        price: number;
    }

    function updatePrice<T extends PricedItem>(
        item: T,
        newPrice: number
    ): T {
        return {
            ...item,
            price: newPrice
        };
    }

The spread operation creates a new object without
directly modifying the original object.

## 9. Type Narrowing

Type narrowing reduces the possible types of a value
based on runtime checks and control flow.

Common narrowing techniques:

- typeof
- instanceof
- in operator
- Equality comparisons
- Custom type guards
- Discriminated unions

An early return or throw can narrow the remaining
execution path.

## 10. Discriminated Unions

Discriminated unions use a shared literal property
to distinguish between different object structures.

    type ApiResponse<T> =
        | { status: "success"; data: T }
        | { status: "error"; message: string };

Checking the status allows TypeScript to determine
which properties are available.

TaskFlow uses discriminated unions to represent
its different reducer actions.

## 11. Null Safety

With strict null checking, null and undefined
must be handled explicitly.

Optional chaining:

    product.manufacturer?.name

Nullish coalescing:

    product.discount ?? 10

The nullish coalescing operator uses its fallback
only when the value is null or undefined.

Unlike the logical OR operator, it preserves
valid falsy values such as zero and false.

## 12. Modules

Named exports:

    export function calculateTotal() {}

Default exports:

    export default function formatCurrency() {}

Type-only imports:

    import type { Product } from "./types.js";

Type-only imports are removed during compilation.

Modules improve separation of responsibilities,
reusability and maintainability.

## 13. Runtime Validation

TypeScript cannot guarantee that external data
matches its declared types at runtime.

External data sources include:

- API responses
- HTML forms
- Local storage
- JSON files
- User input

Type assertions do not validate or convert values.

Runtime validation must establish that data
satisfies the required application contract.

## 14. Custom Type Guards

A type predicate communicates the result of
runtime validation to TypeScript.

    function isPriority(
        value: unknown
    ): value is Priority {
        return (
            value === "low" ||
            value === "medium" ||
            value === "high"
        );
    }

The function returns a boolean at runtime.

When it returns true, TypeScript narrows the value
to the declared predicate type.

## 15. Validating Unknown Objects

    function isRecord(
        value: unknown
    ): value is Record<string, unknown> {
        return (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)
        );
    }

Important JavaScript behaviour:

    typeof null  // "object"
    typeof []    // "object"
    typeof {}    // "object"

Object validation does not automatically validate
individual property values.

Each required property must be checked separately.

## 16. Validation and Normalization

Validation determines whether data is acceptable.

Normalization converts acceptable data into a
consistent representation.

TaskFlow validates:

- Object structure
- Title type and length
- Description type and length
- Priority values

It normalizes input by trimming whitespace
and supplying a default description.

Invalid task input throws a ValidationError.

## 17. Immutable State Management

Reducers calculate the next state from the
current state and an action.

    nextState = reducer(currentState, action);

Reducers should avoid directly mutating state.

TaskFlow uses:

- Spread syntax for creation and updates
- Array map for updates and toggling
- Array filter for deletion

No-op actions preserve the existing state reference.

## 18. Generic Store

The TaskFlow store uses generic state and action types.

    createStore<S, A>(reducer, initialState)

Its responsibilities include:

- Maintaining application state
- Dispatching actions
- Notifying subscribers
- Supporting unsubscription
- Avoiding notifications for unchanged state

The generic implementation is reusable with
different state structures and action contracts.

## 19. Local Storage

Local storage stores string values.

Objects must be serialized before saving:

    JSON.stringify(tasks)

Stored JSON must be parsed before use:

    JSON.parse(savedTasks)

Parsed data should be treated as unknown and
validated before entering application state.

The TypeScript TaskFlow application uses an
independent storage key to preserve the original
JavaScript application's data.

## 20. Type-Safe DOM Manipulation

DOM queries may return null or unexpected elements.

TaskFlow uses a reusable requireElement helper
to verify element existence and runtime type.

The instanceof operator is used to narrow
DOM elements and event targets.

User-generated text is rendered through textContent
rather than interpreted as HTML.

## 21. TypeScript Compiler Configuration

Important compiler options used during Week 07:

- strict
- noUncheckedIndexedAccess
- exactOptionalPropertyTypes
- verbatimModuleSyntax
- isolatedModules
- noUncheckedSideEffectImports

TaskFlow uses a separate browser build configuration
that targets ES2022 and generates JavaScript modules.

## 22. Type Checking vs Execution

Type checking:

    npm run typecheck

Executing TypeScript exercises:

    npx tsx day-01/types.ts

Browser compilation:

    npm run build:taskflow

Running TypeScript through tsx does not replace
a complete TypeScript type-checking step.

## 23. Testing Strategy

Week 07 verification included:

- Strict TypeScript compilation
- Browser build verification
- Nine manually inspected validator cases
- Fifteen automated reducer and store assertions
- Seventeen manual browser functional checks
- Previous-day regression execution

Successful tests increase confidence but do not
prove the absence of every possible defect.

## 24. Key Engineering Principles

- Use types to establish application contracts.
- Validate untrusted data at runtime.
- Avoid unnecessary use of any.
- Prefer safe narrowing over unsafe assertions.
- Separate application responsibilities.
- Preserve immutable state transitions.
- Keep generated files out of version control.
- Test application behaviour before committing.