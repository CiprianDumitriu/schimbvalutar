import * as z from "zod";

export const EmployeeSchema = z.object({
  name: z.string().min(3),
  firstName: z.string().min(3),
  shops: z.string().min(3),
});
