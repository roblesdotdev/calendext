'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { type FieldValues, useForm } from 'react-hook-form'
import { type EventCreateInput } from '~/lib/validation'

export default function CreatePage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventCreateInput>()
  const { mutate, isLoading } = useMutation({
    mutationFn: async (fields: FieldValues) => {
      const { data } = await axios.post('/api/events', fields)
      console.log(data)
    },
    onError: err => {
      // TODO: handle errors
      console.error(err)
    },
  })

  const onSubmit = (data: FieldValues) => {
    mutate(data)
  }

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold">New Event</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <input
            disabled={isLoading}
            type="text"
            placeholder="Event name..."
            {...register('name', {
              required: 'The event name is required',
              minLength: {
                value: 3,
                message: 'Name is too short',
              },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => router.back()}>
            Cancel
          </button>
          <button disabled={isLoading} type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
