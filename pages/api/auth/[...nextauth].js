import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";
const authOptions={
    providers: [
      GitHubProvider({
        clientId: "e7d57f17cf1875fe117f",
        clientSecret: "783156daf2aa73334e0a7812c4f36e2de83ca28c"
      }),
    ],
}


export default NextAuth(authOptions)