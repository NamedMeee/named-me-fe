import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProps } from 'next/app';
import KakaoLoginAccess from '@components/head/KakaoLoginAccess';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter Profile',
  description: '자신만의 트위터 포트폴리오를 만들어보세요 😎',
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <KakaoLoginAccess />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
