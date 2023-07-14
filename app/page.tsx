import { db } from './lib/db'

async function getEvents() {
  return db.event.findMany()
}

export default async function Home() {
  const events = await getEvents()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Calendext</h1>
      <pre>{JSON.stringify(events, null, 2)}</pre>
    </div>
  )
}
