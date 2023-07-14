import { z } from 'zod'

let envSchema = z.object({
  DATABASE_URL: z.string().nonempty(),
})

export const env = envSchema.parse(process.env)
