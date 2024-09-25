import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECREAT,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECREAT,
    }),
  ],
  async session({ session }) {},

  async signIn({ profile }) {},
});
