import type { Metadata } from "next";
import Header from "./components/Layout/Header";
import "./globals.css";
import Footer from "./components/Layout/Footer";
import RecoilRootWrapper from "./recoil/RecoilRootWrapper";

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
      <html lang="en" className="dark z-0">
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
