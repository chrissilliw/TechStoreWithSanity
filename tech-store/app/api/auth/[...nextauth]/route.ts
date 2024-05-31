import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { client } from "@/lib/sanity";

// An object that contains all settings requiered for NextAuth
export const authOptions: NextAuthOptions = {
    // Setting up our Google Provider to handle the authentication with the Google account.
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        SanityCredentials(client),
    ],
    // session: {
    //     strategy: 'jwt',
    // },
    adapter: SanityAdapter(client),
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET,
    events: {
        async signIn(message) {
            console.log('User signed in', message);
        },
        async signOut(message) {
            console.log('User signed out', message);
        },
    },
}

// An API-route handling object created with NextAuth and configured with 
// authOptions to handle all authentications with HTTP requests. 
const handler = NextAuth(authOptions);

// Id exported to handle both GET and Post requests. 
export { handler as GET, handler as POST }