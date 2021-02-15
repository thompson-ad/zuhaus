import * as React from 'react'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Heading from '../components/Heading'

const SignIn = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  React.useEffect(() => {
    if (session) {
      router.push('/app')
    }
  }, [session, router])

  return (
    <div className="signin">
      <div className="signin__pane">
        <Image src="/logo-white.svg" alt="logo" height={100} width={100} />
      </div>
      <div className="signin__pane signin__pane--light">
        <Heading as="h1" size="display">
          Sign In
        </Heading>
        <button onClick={() => signIn('github')}>Sign in with github</button>
      </div>
    </div>
  )
}

export default SignIn
