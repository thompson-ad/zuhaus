import firebase from './firebase'
import { UserSession } from '../types'

const firestore = firebase.firestore()

export const updateUser = (uid: string, data: UserSession) => firestore.collection('users').doc(uid).update(data)

export const createUser = (uid: string, data: UserSession) =>
  firestore.collection('users').doc(uid).set(data, { merge: true })
