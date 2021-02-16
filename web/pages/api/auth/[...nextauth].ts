// any request to /api/auth will hit this
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { connectToDB } from '../../../db'

export default (req, res) =>
  NextAuth(req, res, {
    session: {
      // use JWTs instead
      // by default it will use DB sessions
      jwt: true,
    },
    jwt: {
      // in order to encrypt a JWT we need a secret
      secret: process.env.JWT_SECRET,
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],
    // url for you database
    // it can detect what kind of DB you are connecting to
    // It uses Type ORM which is like a universal ORM
    // to facilitate the connection and management of your models
    // between your app and the DB
    // it will create some models for you like a user model
    // users email, provider ID, name, avatar etc
    // account table...see docs
    database: process.env.DATABASE_URL,
    // It will  generate the auth pages for us so we don't have to make them
    // It doesn't look good though so we tell it to use our one at /signin
    pages: {
      signIn: '/signin',
    },
    callbacks: {
      // add the user id to the session id
      // session object gets passed to jwt callback as first param
      async session(session, user) {
        session.user.id = user.id
        return session
      },
      // async jwt(tokenPayload, user, account, profile, isNewUser) {
      //   const { db } = await connectToDB()

      //   if (isNewUser) {
      //     // ADD GETTING STARTED DATA
      //     // const personalFolder = await folder.createFolder(db, { createdBy: `${user.id}`, name: 'Getting Started' })
      //     // await doc.createDoc(db, {
      //     //   name: 'Start Here',
      //     //   folder: personalFolder._id,
      //     //   createdBy: `${user.id}`,
      //     //   content: {
      //     //     time: 1556098174501,
      //     //     blocks: [
      //     //       {
      //     //         type: 'header',
      //     //         data: {
      //     //           text: 'Some default content',
      //     //           level: 2,
      //     //         },
      //     //       },
      //     //     ],
      //     //     version: '2.12.4',
      //     //   },
      //     // })
      //   }

      //   if (tokenPayload && user) {
      //     return { ...tokenPayload, id: `${user.id}` }
      //   }

      //   return tokenPayload
      // },
    },
  })
