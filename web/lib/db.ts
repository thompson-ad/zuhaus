import firebase from './firebase'

const firestore = firebase.firestore()

export const updateUser = (uid, data) => firestore.collection('users').doc(uid).update(data)

export const createUser = (uid, data) =>
  firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
