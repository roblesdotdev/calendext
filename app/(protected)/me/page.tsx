import UserMenu from '~/components/user-menu'
import { getUserSession } from '~/lib/session'
import { redirect } from 'next/navigation'

export default async function MePage() {
  const user = await getUserSession()
  if (!user) return redirect('/sign-in')
  return (
    <div className="flex flex-col items-center justify-center">
      <UserMenu user={user} />
      <div className="py-12">
        <h1>User Panel</h1>
      </div>
    </div>
  )
}
