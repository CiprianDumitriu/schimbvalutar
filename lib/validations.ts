import * as z from "zod";

export const EmployeeSchema = z.object({
  name: z.string().min(3),
  firstName: z.string().min(3),
  // shops: z.array(z.string().min(1).max(15)).min(1).max(3),
  title: z.string().min(3),
  workableHours: z.string().min(1),
  flexible: z.string(),
});
