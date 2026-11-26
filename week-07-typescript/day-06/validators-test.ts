
import { validateTaskInput, ValidationError } from "./validators.js";

const testCases = [
    {
        title: "  Learn TypeScript  ",
        priority: "high"
    },
    {
        title: "Complete TaskFlow",
        description: "  Migrate to TypeScript  ",
        priority: "medium"
    },
    {
        title: "AB",
        priority: "low"
    },
    {
        title: "Learn TypeScript",
        priority: "urgent"
    },
    {
        title: "Learn TypeScript",
        description: null,
        priority: "low"
    },
    null,
    [],
    {
        title: "A".repeat(101),
        priority: "high"
    },
    {
        title: "Valid task",
        description: "A".repeat(501),
        priority: "medium"
    }
];

for (const input of testCases) {
    try {
        console.log("VALID:", validateTaskInput(input));
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("INVALID:", error.message);
        } else {
            throw error;
        }
    }
}
