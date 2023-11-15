import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter Profile',
  description: '자신만의 트위터 포트폴리오를 만들어보세요 😎',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
