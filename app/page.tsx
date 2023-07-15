import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getUserSession } from '~/lib/session'

export default async function Home() {
  const user = await getUserSession()

  if (user) return redirect('/me')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Calendext</h1>
      <Link href="/me">Get started</Link>
    </div>
  )
}
