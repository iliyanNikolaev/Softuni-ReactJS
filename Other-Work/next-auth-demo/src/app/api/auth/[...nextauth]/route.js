import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: CredentialsProvider({
        name: 'credentials',
        credentials: {}
    })
}