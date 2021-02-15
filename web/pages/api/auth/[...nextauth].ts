// any request to /api/auth will hit this
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

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
  })
