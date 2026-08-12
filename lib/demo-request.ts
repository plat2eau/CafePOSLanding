import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  businessName: z.string().trim().min(2, "Enter your cafe or business name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(20, "Phone number is too long."),
  city: z.string().trim().min(2, "Enter your city."),
  message: z.string().trim().max(1000, "Keep notes under 1000 characters.").optional(),
  company: z.string().trim().max(0, "Spam check failed.").optional(),
  startedAt: z.coerce.number().optional(),
});

export type DemoRequestInput = z.infer<typeof demoRequestSchema>;

export type DemoRequestErrors = Partial<Record<keyof DemoRequestInput, string[]>>;
