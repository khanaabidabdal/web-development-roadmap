# Day 04 — Type Narrowing and Null Safety

## Objective

Understand how TypeScript narrows union types, performs control flow analysis, and prevents unsafe access to potentially missing values.

## Concepts Covered

### 1. Type Narrowing
- Understanding union types
- Accessing common properties
- Narrowing types before accessing unique properties
- Distinguishing type narrowing from type conversion

### 2. Type Guards
- Using the `typeof` operator for primitive types
- Using the `in` operator for object properties
- Understanding the limitations of checking common properties

### 3. Control Flow Analysis
- Narrowing types through conditional statements
- Understanding early returns
- Understanding how execution paths influence type inference
- Difference between returning and logging a value

### 4. Discriminated Unions
- Defining interfaces with shared literal properties
- Using discriminant properties to identify response types
- Modelling successful and unsuccessful API responses
- Accessing response-specific properties safely

### 5. Null and Undefined Safety
- Understanding `null` and `undefined`
- Handling nullable union types
- Using explicit null and undefined checks
- Distinguishing empty strings from missing values

### 6. Optional Chaining and Nullish Coalescing
- Safely accessing optional nested properties using `?.`
- Providing fallback values using `??`
- Understanding the difference between `??` and `||`
- Preserving valid falsy values such as zero

## Practical Exercises

- Formatting string and numeric values
- Distinguishing books and laptops using property checks
- Handling successful and unsuccessful API responses
- Safely formatting nullable email addresses
- Handling optional manufacturer and discount information
- Implementing a type-safe product response handler

## Key Learnings

- Type narrowing identifies a more specific type without converting the underlying value.
- Common properties of union members can be accessed without narrowing.
- Early returns influence TypeScript's control flow analysis.
- Discriminated unions provide predictable structures for application states and API responses.
- Optional chaining prevents unsafe access to missing nested properties.
- Nullish coalescing preserves valid falsy values while providing defaults for null and undefined.

## Validation

TypeScript compilation:

```bash
npx tsc --noEmit
```

Runtime execution:

```bash
npx tsx day-04/narrowing.ts
npx tsx day-04/discriminated-unions.ts
npx tsx day-04/null-safety.ts
npx tsx day-04/practice.ts
```

All compilation and runtime checks completed successfully.

## Practical Result

Implemented a type-safe e-commerce API response handler that distinguishes successful and unsuccessful responses, handles optional product information, and preserves valid zero discounts.