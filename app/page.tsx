import Link from 'next/link'
import UserMenu from '~/components/user-menu'
import { db } from '~/lib/db'
import { getUserSession } from '~/lib/session'

async function getEvents() {
  return db.event.findMany()
}

export default async function Home() {
  const events = await getEvents()
  const user = await getUserSession()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Calendext</h1>

      {user ? <UserMenu user={user} /> : <Link href="/sign-in">Sign In</Link>}
      <pre>{JSON.stringify(events, null, 2)}</pre>
    </div>
  )
}
