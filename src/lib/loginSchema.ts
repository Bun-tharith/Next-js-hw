// src/schemas/loginSchema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Create a TypeScript type based on the schema
export type LoginInput = z.infer<typeof loginSchema>;
