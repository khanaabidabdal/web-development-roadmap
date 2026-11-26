
# Week 07 — TypeScript Revision Questions

## Day 01 — TypeScript Foundations

1. What is TypeScript?
2. How does TypeScript differ from JavaScript?
3. What is type inference?
4. What is an explicit type annotation?
5. How do let and const affect literal type inference?
6. What is a union type?
7. What is the difference between any and unknown?
8. How are arrays and objects typed?
9. What is an optional property?
10. What is the difference between null and undefined?

## Day 02 — Interfaces and Type Aliases

11. What is an interface?
12. What is a type alias?
13. What is the difference between an interface and a type alias?
14. What is a readonly property?
15. How does interface inheritance work?
16. What is an intersection type?
17. How does an intersection differ from a union?
18. What is declaration merging?
19. Can a type alias represent a primitive or literal union?
20. How can product and inventory contracts be combined?

## Day 03 — Functions and Generics

21. How are function parameters typed?
22. What is return type inference?
23. What does the void return type mean?
24. How do optional parameters work?
25. How do default parameters work?
26. What are rest parameters?
27. What is a generic function?
28. What is a generic constraint?
29. How does a generic preserve type information?
30. How can an object be updated immutably?

## Day 04 — Type Narrowing and Null Safety

31. What is type narrowing?
32. How does typeof narrow a value?
33. How does the in operator narrow an object?
34. What is control flow narrowing?
35. How does an early return affect narrowing?
36. What is a discriminated union?
37. How can a success response be distinguished from an error response?
38. What is optional chaining?
39. What is nullish coalescing?
40. How does nullish coalescing differ from logical OR?

## Day 05 — Modules and API Contracts

41. What is an ES module?
42. What is a named export?
43. What is a default export?
44. Can a default import be renamed?
45. What is a type-only import?
46. Why are type-only imports erased?
47. What is a generic API response contract?
48. Why should external API data be treated as unknown?
49. Does a type assertion validate runtime data?
50. What is a custom type guard?

## Day 06 — TaskFlow TypeScript Migration

51. Why was TaskFlow migrated to TypeScript?
52. Why was the original JavaScript implementation preserved?
53. What is the responsibility of types.ts?
54. What is the difference between TaskInput and Task?
55. Why does ValidatedTaskInput require a description?
56. Why is Priority represented as a literal union?
57. Why are reducer actions represented as a discriminated union?
58. Why does validateTaskInput accept unknown?
59. What is the purpose of ValidationError?
60. What is the difference between validation and normalization?
61. What does Record<string, unknown> represent?
62. Why does typeof null return an unexpected result?
63. Why must arrays be explicitly excluded by isRecord?
64. Does isRecord validate individual property values?
65. What is a type predicate?
66. What is the responsibility of a reducer?
67. Why should reducers avoid mutating state?
68. Why should a no-op action preserve the state reference?
69. Why is createStore implemented using generics?
70. When should store subscribers be notified?
71. How does unsubscription work?
72. Why must local storage data be validated?
73. Why are separate storage keys used?
74. What is the purpose of the requireElement helper?
75. Why must event targets be narrowed?
76. Why is textContent used for task descriptions?
77. What is the responsibility of main.ts?
78. Why is form data validated before dispatch?
79. Why is reducer validation retained?
80. Why does TaskFlow use a separate compiler configuration?

## Compiler and Testing Questions

81. What does strict mode enable?
82. What does noUncheckedIndexedAccess protect against?
83. What does exactOptionalPropertyTypes enforce?
84. What is verbatimModuleSyntax?
85. What does tsc --noEmit do?
86. What is the purpose of tsx?
87. Does tsx perform complete TypeScript type checking?
88. Why must TypeScript be compiled for the browser?
89. What are source maps?
90. Why should generated dist files be excluded from Git?
91. What is regression testing?
92. What is the difference between automated and manual testing?
93. How can reducer immutability be tested?
94. How can unnecessary subscriber notifications be tested?
95. Does passing all tests guarantee that an application has no bugs?

## Practical Revision Exercises

### Exercise 1 — Type-Safe Product

Create a product interface with an ID, name,
price, category and optional description.

Restrict category to a literal union.

### Exercise 2 — Generic Function

Create a generic function that updates the stock
of an inventory item without mutating the original.

### Exercise 3 — API Response

Create a generic discriminated union for successful
and unsuccessful API responses.

### Exercise 4 — Runtime Validation

Create a type guard that validates an unknown
product object before accessing its properties.

### Exercise 5 — Null Safety

Demonstrate optional chaining and nullish
coalescing using a product with an optional discount.

### Exercise 6 — TaskFlow Architecture

Explain the responsibilities and relationships of:

- types.ts
- validators.ts
- reducer.ts
- store.ts
- storage.ts
- dom.ts
- ui.ts
- main.ts

### Exercise 7 — Reducer Testing

Write assertions verifying that a reducer:

- Adds a task.
- Updates a task immutably.
- Preserves state for an unknown task ID.
- Deletes a task.

### Exercise 8 — TypeScript Migration Review

Review the differences between the original
JavaScript TaskFlow application and the migrated
TypeScript version.

Identify compile-time and runtime safety improvements.

## Revision Status

Implementation: Completed.

Day 06 conceptual revision: Pending.

The conceptual revision will be completed separately
from the implementation session.