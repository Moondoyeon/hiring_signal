import { Hahmlet, Noto_Sans_KR } from 'next/font/google';

export const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
  weight: ['400', '500', '600', '700'],
});
export const hahmlet = Hahmlet({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hahmlet',
  weight: ['400', '500', '600', '700'],
});
