import nc from 'next-connect'
import db from './db'
import auth from './auth'

const middleware = nc()

// connect to the database and authenticate
middleware.use(db).use(auth)
export default middleware
