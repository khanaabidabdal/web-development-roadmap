# Day 05 — TypeScript Modules and API Contracts

## Objective

Understand modular TypeScript application development, reusable type definitions, type-safe API contracts, and runtime validation of external data.

## Concepts Covered

- ECMAScript modules (ESM)
- Named exports and imports
- Default exports and imports
- Import aliases
- Type-only imports
- Shared interfaces and type aliases
- Generic API response contracts
- Discriminated unions
- Type assertions
- Runtime validation
- Custom type guards and type predicates
- Module side effects
- Separation of responsibilities

## File Structure

| File | Responsibility |
|---|---|
| `calculator.ts` | Reusable calculation functions |
| `formatter.ts` | Currency formatting using a default export |
| `types.ts` | Shared interfaces and generic API response types |
| `cart.ts` | Shopping cart calculation logic |
| `api.ts` | Simulated API responses and product response parsing |
| `validators.ts` | Reusable runtime validation functions |
| `validation.ts` | Type assertion and runtime validation demonstrations |
| `app.ts` | Application entry point and module integration |

## Practical Implementation

Developed a modular product catalogue application that demonstrates:

- Product price and discount calculations.
- Reusable currency formatting.
- Type-safe shopping cart calculations.
- Generic success and error API responses.
- Runtime validation of unknown product data.
- Handling valid and invalid product responses.

## Key Engineering Takeaways

- Modules improve maintainability, reusability, and separation of responsibilities.
- Named exports support multiple exports, while each module can have only one default export.
- Type-only imports are erased during compilation.
- Shared interfaces maintain consistent data contracts across modules.
- Generics enable reusable API response structures.
- Type assertions do not validate or convert runtime values.
- External data should be treated as unknown until validated.
- Custom type guards enable runtime validation and compile-time narrowing.
- Reusable modules should avoid unnecessary top-level side effects.

## Validation

TypeScript compilation:

```powershell
npx tsc --noEmit
```

Application execution:

```powershell
npx tsx day-05/app.ts
```

Runtime validation demonstration:

```powershell
npx tsx day-05/validation.ts
```

## Outcome

Successfully implemented a modular TypeScript application with shared type definitions, reusable business logic, generic API contracts, and runtime validation.

The exercises demonstrated the distinction between compile-time type safety and runtime data integrity.