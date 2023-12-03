import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { db } from '@db'

export const authOptions: NextAuthOptions = {
   adapter: DrizzleAdapter(db),
   secret: process.env.NEXTAUTH_SECRET!,
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ],
      pages: {
        signIn: "/sign-in"
      }
}

export const getAuthSession = () => getServerSession(authOptions)