'use client'
import { useForm, type FieldValues } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  EventUpdateSchema,
  type EventUpdateResponse,
  type EventUpdateInput,
} from '~/lib/validation'
import type { getEventDetail } from '~/lib/events'
import { useCallback, useEffect, useRef, useState } from 'react'
import type EditorJS from '@editorjs/editorjs'
import { Calendar } from './ui/calendar'
import { DateRange } from 'react-day-picker'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { type OutputData } from '@editorjs/editorjs'
import { useRouter } from 'next/navigation'

type EventEditorProps = {
  eventData: NonNullable<Awaited<ReturnType<typeof getEventDetail>>>
}

export default function EventEditor({ eventData }: EventEditorProps) {
  const router = useRouter()
  const [date, setDate] = useState<DateRange | undefined>({
    from: eventData.startAt || undefined,
    to: eventData.endAt || undefined,
  })
  const { name, content, startAt, endAt } = eventData
  const { mutate: updateEvent, isLoading } = useMutation({
    mutationFn: async (payload: EventUpdateInput) => {
      console.log(payload)
      const { data } = await axios.put(`/api/events/${eventData.id}`, {
        data: payload,
      })

      console.log(data)

      return true
    },
    onError: error => {
      // TODO handle error
      console.error(error)
    },
    onSuccess: () => {
      router.refresh()
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventUpdateResponse>({
    resolver: zodResolver(EventUpdateSchema),
    defaultValues: {
      name,
      content,
      startAt: startAt?.toISOString(),
      endAt: endAt?.toISOString(),
    },
  })

  const onSubmit = async ({ name }: FieldValues) => {
    const content = await ref.current?.save()
    const payload: EventUpdateInput = {
      name,
      content,
      startAt: date?.from?.toISOString(),
      endAt: date?.to?.toISOString(),
    }
    updateEvent(payload)
  }

  const ref = useRef<EditorJS>()
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    const EditorHeader = (await import('@editorjs/header')).default
    const EditorParagraph = (await import('@editorjs/paragraph')).default
    const EditorList = (await import('@editorjs/list')).default

    if (!ref.current) {
      const editor = new EditorJS({
        autofocus: true,
        holder: 'editor',
        onReady() {
          ref.current = editor
        },
        placeholder: 'Type here the notes for you awesome event...',
        inlineToolbar: true,
        data: { blocks: (eventData.content as unknown as OutputData).blocks },
        tools: {
          heading: EditorHeader,
          paragraph: EditorParagraph,
          list: EditorList,
        },
      })
    }
  }, [eventData.content])

  useEffect(() => {
    const init = async () => {
      await initializeEditor()
    }
    if (isMounted) {
      init()
    }

    return () => {
      ref.current?.destroy()
      ref.current = undefined
    }
  }, [isMounted, initializeEditor])

  return (
    <div className="mx-auto max-w-7xl">
      <form id="event-editor-form" onSubmit={handleSubmit(onSubmit)}>
        <TextareaAutosize
          {...register('name')}
          className="w-full resize-none appearance-none overflow-hidden bg-transparent text-3xl font-bold outline-none"
        />
        {errors?.name && <span>{errors.name.message}</span>}

        <div className="flex items-start">
          <div id="editor" className="min-h-[480px]" />
        </div>
        <div className="flex max-w-2xl items-center">
          <Calendar
            selected={date}
            onSelect={setDate}
            mode="range"
            className="rounded-md border"
          />
        </div>
      </form>
    </div>
  )
}
