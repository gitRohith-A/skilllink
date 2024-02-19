import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession['user'] & {
    role: 'enterprises' | 'user' | 'admin'
    id: string
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser
    }
}   