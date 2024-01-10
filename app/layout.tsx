import { Metadata } from 'next';
import ReactQueryProviderWrapper from '@components/Container/ReactQueryProviderWrapper';
import RecoilRootWrapper from '@components/Container/RecoilRootWrapper';
import Footer from '@components/Layout/Footer';
import Header from '@components/Layout/Header';
import 'globals.css';
import { noto_sans_kr } from 'fonts';

export const metadata: Metadata = {
  title: '문도연 포트폴리오',
  description: '채용시그널을 받길 염원하는 개발자 취준생의 포트폴리오 웹입니다',
  metadataBase: new URL('https://hiring-signal.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`z-0 ${noto_sans_kr.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="xt0M94KI7afSPQGKZ1bvqZxAPJxiCoFY-SsFYs4PAR4"
        />
        <meta name="naver-site-verification" content="fcc931ca848fefd19264bf52415acfb852135bb3" />
      </head>
      <body className="h-screen font-sansKR">
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
