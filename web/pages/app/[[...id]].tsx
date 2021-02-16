import * as React from 'react'
import { useAuth } from '../../lib/auth'
import { Pane, Dialog, majorScale } from 'evergreen-ui'
import { useRouter } from 'next/router'
import User from '../../components/User'
import Logo from '../../components/Logo'

const App = () => {
  const router = useRouter()
  const { loading, user } = useAuth()

  if (loading) return null

  if (!loading && !user) {
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
        <User user={user} />
      </Pane>
    </Pane>
  )
}

export default App

// We want to use our CRUD methods in /db inside of gerServersideProps
// because the app page is a catch all optional route
/**
 * Catch all handler. Must handle all different page
 * states.
 * 1. Folders - none selected /app
 * 2. Folders => Folder selected /app/{id} (you clicked on a folder so show content on the right)
 * 3. Folders => Folder selected => Document selected /app/{id}/{id}
 *
 * An unauth user should not be able to access this page.
 *
 * The context object in getServersideProps will tell use what state the page is in
 *
 * @param context
 */

// Why would we put all of those in one route?
// If you make a page for each of these routes (/app/index.tsx), (/app/[id].tsx), (...)
// you could do that but if you look at the app they all have the same layout
// so this way is a little easier
// but you could have done the above way and made a layout component

// export async function getServerSideProps(context) {
//   // this part of our app is a dynamic page, not a static page
//   // we don't want to pregenerate the page at build time
//   // let's fetch everything initially on the server and then handle mutations on the client

//   // the pageprops in _app.tsx now gets the session and passes it to the provider
//   // we can then use the useSession() hook
//   // const session: { user: UserSession } = await getSession(context)
//   // not signed in
//   // if (!session || !session.user) {
//   //   return { props: {} }
//   // }

//   // you might be tempted to fetch() the resources from your own API here
//   // We didn't make an API and
//   // In the docs you are recommended not to do that as this is serverside logic
//   // There's no point in your application reaching outside to the internet to just come back to itself to hit the API when you can just go straight to the database here
//   // That's for querying data but mutating data we need to do this client side and we will need an API

//   //   const { db } = await connectToDB()
//   //   const folders = await folder.getFolders(db, session.user.id)
//   //   props.folders = folders

//   // NOTE the params object on the context is going to be an array of ids as we have a [[...id]] filename
//   //   if (context.params.id) {
//   //     const activeFolder = folders.find((f) => f._id === context.params.id[0])
//   //     const activeDocs = await doc.getDocsByFolder(db, activeFolder._id)
//   //     props.activeFolder = activeFolder
//   //     props.activeDocs = activeDocs

//   //     const activeDocId = context.params.id[1]

//   //     if (activeDocId) {
//   //       props.activeDoc = await doc.getOneDoc(db, activeDocId)
//   //     }
//   //   }

//   const props: any = { session }

//   return {
//     props,
//   }
// }
