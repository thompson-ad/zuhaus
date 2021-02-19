import * as React from 'react'
import firebase from './firebase'
import { AuthContextInterface } from '../types'
import { createUser } from './db'
import { formatUser } from '../utils/formatUser'

const AuthContext = React.createContext<AuthContextInterface | null>(null)

export const AuthProvider = ({ children }) => {
  const auth: AuthContextInterface = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const handleUser = React.useCallback((rawUser: any) => {
    if (rawUser) {
      const formattedUser = formatUser(rawUser)
      createUser(formattedUser.uid, formattedUser)
      setUser(formattedUser)
      setLoading(false)
    } else {
      setUser(null)
      setLoading(false)
    }
  }, [])

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
      .then(() => setUser(null))
  }

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
  }, [handleUser])

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  }
}
