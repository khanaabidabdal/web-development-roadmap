# Day 02 — TypeScript Interfaces and Type Aliases

## Objective

Understand how TypeScript defines reusable data structures, enforces object contracts, and combines types to model real-world application data.

## Concepts Covered

### 1. Interfaces
- Defining reusable object structures
- Using interfaces with arrays
- Required and optional properties
- Readonly properties

### 2. Interface Extension
- Extending interfaces using `extends`
- Inheriting required properties and readonly restrictions
- Reducing duplication in related data models

### 3. Type Aliases
- Creating reusable types using `type`
- Defining literal union types
- Restricting values to predefined alternatives

### 4. Intersection Types
- Combining object types using `&`
- Understanding the difference between union (`|`) and intersection (`&`)
- Building composite data models

### 5. Interfaces vs Type Aliases
- Shared capabilities for object structures
- Interface declaration merging
- Type alias limitations on duplicate declarations
- Choosing the appropriate construct for different requirements

## Practical Exercises

Implemented examples covering:

- Customer management
- User and administrator interfaces
- Payment statuses
- Product inventory
- Book interfaces and declaration merging
- E-commerce product modeling

## Key Learnings

- Interfaces and type aliases help establish reusable, type-safe contracts.
- Optional properties can be omitted, but their values must still satisfy their declared types.
- Readonly properties cannot be reassigned through their declared types.
- Extended interfaces inherit the requirements of their parent interfaces.
- Union types represent alternatives, while intersection types combine requirements.
- A string union cannot be intersected directly with object types to create a named object property.
- TypeScript's compiler can identify structural mistakes before runtime.

## Validation

Verified the Day 02 exercises using:

```bash
npx tsc --noEmit
```

Result: TypeScript compilation completed without errors.