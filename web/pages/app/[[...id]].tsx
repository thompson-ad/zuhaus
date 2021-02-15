import * as React from 'react'
import { getSession, useSession } from 'next-auth/client'
import { Pane, Dialog, majorScale } from 'evergreen-ui'
import { useRouter } from 'next/router'
import User from '../../components/User'
import Logo from '../../components/Logo'
import { UserSession } from '../../types'

const App = () => {
  const router = useRouter()
  // you could also access the session as a prop
  const [session, loading] = useSession()
  if (loading) return null

  if (!loading && !session) {
    // you are not authorised
    // show a modal to sign in
    // ensure you cannot cancel it, close it click an overalay or click escape
    return (
      <Dialog
        isShown
        title="Session expired"
        confirmLabel="Ok"
        hasCancel={false}
        hasClose={false}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEscapePress={false}
        onConfirm={() => router.push('/signin')}
      >
        Sign in to continue
      </Dialog>
    )
  }
  return (
    <Pane position="relative">
      <Pane width={300} position="absolute" top={0} left={0} background="tint2" height="100vh" borderRight>
        <Pane padding={majorScale(2)} display="flex" alignItems="center" justifyContent="space-between">
          <Logo />
        </Pane>
      </Pane>
      <Pane marginLeft={300} width="calc(100vw - 300px)" height="100vh" overflowY="auto" position="relative">
        <User user={session.user} />
      </Pane>
    </Pane>
  )
}

export default App

export async function getServerSideProps(context) {
  // this part of our app is a dynamic page, not a static page
  // we don't want to pregenerate the page at build time
  // let's fetch everything initially on the server and then handle mutations on the client

  // the pageprops in _app.tsx now gets the session and passes it to the provider
  // we can then use the useSession() hook
  const session: { user: UserSession } = await getSession(context)
  // not signed in
  if (!session || !session.user) {
    return { props: {} }
  }

  const props: any = { session }

  return {
    props,
  }
}
