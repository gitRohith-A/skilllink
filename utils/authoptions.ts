import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'

interface Credentials {
    email: string;
    password: string;
}

interface LoginResponse {
    _id: string;
    email: string;
    username: string;
    image: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials: Credentials) => {
                const { email, password } = credentials;
                try {
                    const response = await fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            query: `
                                    mutation Login($email: String!, $password: String!) {
                                        login(email: $email, password: $password) {
                                            _id
                                            email
                                            username
                                            image
                                        }
                                    }
                                `,
                            variables: {
                                email,
                                password
                            }
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const responseData = await response.json();

                    if (responseData.data) {
                        const { _id, email, username, image } = responseData.data.login;
                        return {
                            id: _id,
                            name: username,
                            email,
                            image,
                            redirect: '/dashboard',
                        };
                    } else {
                        console.error('Invalid response from server');
                        return null;
                    }
                } catch (error: any) {
                    console.error('Authentication error:', error);
                    return null;
                }
            }
        }),
    ],
};
