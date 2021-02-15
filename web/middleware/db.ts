import { connectToDB } from '../db/connect'

// attaches database and client to the request object

export default async function database(req, res, next) {
  const { db, dbClient } = await connectToDB()
  req.db = db
  req.dbClinet = dbClient

  next()
}
