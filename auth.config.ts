import axios from "axios"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const response = await axios.post('http://localhost:5000/auth/login', credentials)
        if (response.data.success) {
          return response.data.user
        }

        return null
      }

    })
  ]
} satisfies NextAuthConfig