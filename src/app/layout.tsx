import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";
import RecoilRootWrapper from "./recoil/RecoilRootWrapper";
import useBgColor from "./hooks/useGlobalBgColor";

export const metadata: Metadata = {
  title: "채용시그널",
  description: "나 좀 뽑아줘",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRootWrapper>
      <html lang="en" className="dark">
        <body className="h-screen">
          <div className="h-auto min-h-full pb-20">
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </body>
      </html>
    </RecoilRootWrapper>
  );
}
