import UserMenu from '~/components/user-menu'
import { getUserSession } from '~/lib/session'

export default async function MePage() {
  const user = await getUserSession()
  return (
    <div className="flex flex-col items-center justify-center">
      {user && <UserMenu user={user} />}
      <div className="py-12">
        <h1>User Panel</h1>
      </div>
    </div>
  )
}
