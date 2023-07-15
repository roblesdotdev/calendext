import UserAuthForm from '~/components/user-auth-form'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <UserAuthForm />
    </div>
  )
}
