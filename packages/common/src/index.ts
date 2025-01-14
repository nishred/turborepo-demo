import { z } from "zod";

export const personSchema = z.object({
  name: z.string(),
  age: z.number().int(),
});
