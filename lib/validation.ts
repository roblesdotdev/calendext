import { z } from 'zod'

export const EventCreateInputSchema = z.object({
  name: z.string().min(3),
})

export type EventCreateInput = z.infer<typeof EventCreateInputSchema>
