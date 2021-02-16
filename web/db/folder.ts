import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

// TODO - replace with my own resources
// Add schemas?
// Use prisma?
export const createFolder = async (db: Db, folder: { createdBy: string; name: string }) => {
  return db
    .collection('folders')
    .insertOne({
      _id: nanoid(12),
      ...folder,
      // the date needs to be converted to a string if you are going to pass as props from serverside props
      createdAt: new Date().toDateString(),
    })
    .then(({ ops }) => ops[0])
}

export const getFolders = async (db: Db, userId: string) => {
  return db
    .collection('folders')
    .find({
      createdBy: userId,
    })
    .toArray()
}
