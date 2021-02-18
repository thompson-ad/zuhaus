export interface UserSession {
  uid: string
  email: string
  name: string
  provider: string
  photoUrl: string
}

export interface AuthContextInterface {
  user: UserSession
  loading: boolean
  signinWithGoogle: () => void
  signout: () => void
}
