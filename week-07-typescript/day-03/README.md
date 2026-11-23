# Day 03 — TypeScript Functions and Generics

## Objective

Learn how TypeScript enforces function contracts and how generics enable reusable, type-safe functions across different data structures.

## Concepts Covered

### 1. Function Parameters and Return Types
- Explicit parameter annotations
- Inferred and explicit return types
- Compiler validation of function arguments and return values
- Difference between returning a value and printing output

### 2. Optional and Default Parameters
- Optional parameters using `?`
- Handling `undefined` safely
- Default parameter values
- Difference between omitted arguments and explicitly supplied values

### 3. Rest Parameters
- Collecting multiple arguments using `...`
- Rest parameters versus array parameters
- Type checking individual arguments

### 4. Generic Functions
- Type parameters using `<T>`
- Type inference with numbers, strings, and objects
- Preserving object structures
- Handling potentially undefined array elements

### 5. Generic Constraints
- Restricting generic types using `extends`
- Requiring minimum object properties
- Preserving additional object properties

### 6. Immutable Updates
- Using object spread syntax
- Updating properties without mutating the original object
- Reusing generic functions across different object structures

## Practical Exercises

Implemented:

- Order total and discount calculations
- Order logging and customer greetings
- Shipping fee calculations
- Shopping cart totals using rest parameters
- Generic array and identity functions
- Generic entity ID extraction
- Generic product price updates

## Key Learnings

- Function annotations establish contracts between callers and implementations.
- Explicit return types help detect incorrect return values.
- Optional parameters may contain `undefined` and must be handled safely.
- Rest parameters collect arguments into arrays without converting their types.
- Generics preserve type information while supporting reusable implementations.
- Generic constraints establish minimum structural requirements.
- Object spread syntax enables immutable updates.

## Validation

TypeScript validation:

```bash
npx tsc --noEmit
```

Runtime execution:

```bash
npx tsx day-03/practice.ts
```

Both completed successfully.

## Practical Result

Created a reusable `updatePrice` function that accepts different product objects, preserves their additional properties, and returns updated copies without modifying the originals.