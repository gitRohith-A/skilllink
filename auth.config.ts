import axios from "axios"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const response = await axios.post('http://localhost:5000/auth/login', credentials)
        if (response.data.success) {
          return response.data.user
        }
        return null
      }

    })
  ],
} satisfies NextAuthConfig