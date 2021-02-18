import * as React from 'react'
import firebase from './firebase'
import { AuthContextInterface } from '../types'
import { createUser } from './db'

const AuthContext = React.createContext<AuthContextInterface | null>(null)

export function AuthProvider({ children }) {
  const auth: AuthContextInterface = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      createUser(user.uid, user)
      setUser(user)
      setLoading(false)
      return user
    } else {
      setUser(null)
      setLoading(false)
      return false
    }
  }

  const signinWithGoogle = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user)
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false))
  }

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  }
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}
