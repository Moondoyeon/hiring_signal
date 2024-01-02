import { Metadata } from 'next';

import ReactQueryProviderWrapper from '@/app/components/Container/ReactQueryProviderWrapper';
import RecoilRootWrapper from '@/app/components/Container/RecoilRootWrapper';
import Footer from '@/app/components/Layout/Footer';
import Header from '@/app/components/Layout/Header';
import './globals.css';
import { notoSansKr } from './fonts';

export const metadata: Metadata = {
  title: '채용시그널 | 문도연 포트폴리오 ',
  description: '채용시그널을 받길 염원하는 개발자 취준생의 포트폴리오 웹입니다',
  metadataBase: new URL('https://hiring-signal.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSansKr.className} dark z-0`}>
      <head>
        <meta
          name="google-site-verification"
          content="xt0M94KI7afSPQGKZ1bvqZxAPJxiCoFY-SsFYs4PAR4"
        />
        <meta name="naver-site-verification" content="fcc931ca848fefd19264bf52415acfb852135bb3" />
      </head>
      <body className="h-screen">
        <RecoilRootWrapper>
          <ReactQueryProviderWrapper>
            <div className="h-auto min-h-full pb-20">
              <Header />
              <main>{children}</main>
            </div>
            <Footer />
          </ReactQueryProviderWrapper>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
