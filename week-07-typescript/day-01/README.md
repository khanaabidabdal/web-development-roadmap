
# Day 01 — TypeScript Foundations

## Objective

Understand how TypeScript introduces static type checking
into JavaScript development and how type annotations help
prevent invalid operations during development.

## Concepts Covered

### 1. Primitive Types
- string
- number
- boolean

### 2. Type Inference
TypeScript can infer variable types from their initial values.

### 3. Type Annotations
Explicitly declare types using the colon (`:`) syntax.

### 4. Literal and Union Types
Restrict variables to specific permitted values.

### 5. any vs unknown
Understand why `unknown` requires type checking before
performing operations.

### 6. Arrays
Define typed arrays and validate element assignments.

### 7. Objects
Understand inferred and explicitly annotated object structures.

### 8. Optional Properties
Use `?` for properties that may be absent.

### 9. Optional Chaining
Safely access optional values using `?.`.

### 10. null and undefined
Represent missing or intentionally absent values.

## Practical Exercise

Created a typed bookstore product object containing:

- Book ID
- Title
- Price
- Stock availability
- Supported languages
- Optional ISBN
- Nullable discount

Practiced identifying and correcting TypeScript compiler errors.

## Running the Type Checker

From the `week-07-typescript` directory:

```powershell
npm install
npx tsc --noEmit
```

The `--noEmit` option checks the code without generating
JavaScript output files.

## Key Takeaways

- TypeScript detects many type-related mistakes before runtime.
- Type inference reduces unnecessary annotations.
- Union types help enforce permitted application values.
- Optional properties require safe handling.
- TypeScript's type system does not replace runtime validation.
