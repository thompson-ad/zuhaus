import firestore from '@react-native-firebase/firestore';
import {UserSession} from '../types';

export const updateUser = (uid: string, data: UserSession) =>
  firestore().collection('users').doc(uid).update(data);

export const createUser = (uid: string, data: UserSession) =>
  firestore().collection('users').doc(uid).set(data, {merge: true});
