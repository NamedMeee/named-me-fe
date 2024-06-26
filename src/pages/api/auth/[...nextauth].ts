import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import TwitterProvider from 'next-auth/providers/twitter';

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || '',
      clientSecret: process.env.TWITTER_CLIENT_SECRET || '',
      version: '2.0',
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: ({ session, token, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    async redirect({ url, baseUrl }) {
      return '/login/social-login';
    },
  },
});
