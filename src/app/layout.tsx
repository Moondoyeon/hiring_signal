import type { Metadata } from 'next';
import Header from './components/Layout/Header';
import './globals.css';
import Footer from './components/Layout/Footer';
import RecoilRootWrapper from './components/Container/RecoilRootWrapper';
import ReactQueryProviderWrapper from './components/Container/ReactQueryProviderWrapper';
import { gown_batang, gown_dodum, noto_sans_kr, song_myung } from './fonts';

export const metadata: Metadata = {
  title: '채용시그널 | 문도연 포트폴리오 ',
  description: '채용시그널을 받길 염원하는 개발자 취준생의 포트폴리오 웹입니다',
  metadataBase: new URL('https://hiring-signal.vercel.app/'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRootWrapper>
      <ReactQueryProviderWrapper>
        <html
          lang="en"
          className={`${noto_sans_kr.variable} ${gown_batang.variable} ${gown_dodum.variable} ${song_myung.variable}  dark z-0`}>
          <head>
            <meta
              name="google-site-verification"
              content="xt0M94KI7afSPQGKZ1bvqZxAPJxiCoFY-SsFYs4PAR4"
            />
            <meta
              name="naver-site-verification"
              content="fcc931ca848fefd19264bf52415acfb852135bb3"
            />
          </head>
          <body className="h-screen ">
            <div className="h-auto min-h-full pb-20">
              <Header />
              <main>{children}</main>
            </div>
            <Footer />
          </body>
        </html>
      </ReactQueryProviderWrapper>
    </RecoilRootWrapper>
  );
}
