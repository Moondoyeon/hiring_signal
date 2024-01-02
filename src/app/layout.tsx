import { Metadata } from 'next';
// import { notoSansKr } from './fonts';
import ReactQueryProviderWrapper from '@/components/Container/ReactQueryProviderWrapper';
import RecoilRootWrapper from '@/components/Container/RecoilRootWrapper';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';

export const metadata: Metadata = {
  title: '채용시그널 | 문도연 포트폴리오 ',
  description: '채용시그널을 받길 염원하는 개발자 취준생의 포트폴리오 웹입니다',
  metadataBase: new URL('https://hiring-signal.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en" className={`${notoSansKr.className} dark z-0`}>
    <html lang="en" className={`dark z-0`}>
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
