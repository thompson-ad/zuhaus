import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Heading from '../components/Heading'
import { useAuth } from '../lib/auth'

const SignIn = () => {
  const auth = useAuth()
  const router = useRouter()

  React.useEffect(() => {
    if (auth.user) {
      router.push('/app')
    }
  }, [auth, router])

  return (
    <div className="signin">
      <div className="signin__pane">
        <Image src="/logo-white.svg" alt="logo" height={100} width={100} />
      </div>
      <div className="signin__pane signin__pane--light">
        <Heading as="h1" size="display">
          Sign In
        </Heading>
        <button onClick={() => auth.signinWithGitHub()}>Sign in with github</button>
      </div>
    </div>
  )
}

export default SignIn
