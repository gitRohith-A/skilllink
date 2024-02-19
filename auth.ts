import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { getUserByEmail } from "./Functions/User"
import axios from "axios"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: '/login',
    error: '/error'
  },
  callbacks: {
    async signIn({ account, user }) {
      if (account.provider === 'google' || account.provider === 'github') {
        try {
          // Make API call to register user
          const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register/provider`, { account, user });
          console.log(response);

          if (response.status === 200) {
            // Registration successful
            return { success: "User registered successfully." };
          } else {
            // Unsuccessful sign-in
            console.error("Failed to register user. Unexpected status code: " + response.status);
            return { error: "Failed to sign in." };
          }
        } catch (error: any) {
          // Error occurred while making API call
          console.error("Failed to register user. " + error.message);
          return { error: "Failed to sign in." };
        }
      } else {
        // Ignore sign-in for providers other than Google and GitHub
        return true;
      }
    },

    async session({ session, token }) {
      if (token.email && session.user) {
        session.user.id = token.id as string
      }

      if (token.role && session.user) {
        session.user.role = token.role as 'enterprises' | 'user' | 'admin'
      }
      return session
    },

    async jwt({ token }) {
      if (!token.email) return token

      const existingUser = await getUserByEmail(token.email)
      if (!existingUser) return token;

      token.role = existingUser.isAdmin
      token.id = existingUser._id
      return token
    }
  },
  session: { strategy: 'jwt' },
  ...authConfig
})