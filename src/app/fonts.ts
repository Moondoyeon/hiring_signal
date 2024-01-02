import localFont from 'next/font/local';
// import { Noto_Sans_KR, Gowun_Batang } from 'next/font/google';

// export const noto_sans_kr = Noto_Sans_KR({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-noto-sans-kr',
// });
// export const gown_batang = Gowun_Batang({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-gown-batang',
//   weight: ['400', '700'],
// });

export const notoSansKr = localFont({
  src: [
    { path: './NotoSansKR-light.ttf', weight: '300' },
    { path: './NotoSansKR-Regular.ttf', weight: '400' },
    { path: './NotoSansKR-Medium.ttf', weight: '500' },
    { path: './NotoSansKR-SemiBold.ttf', weight: '600' },
    { path: './NotoSansKR-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});
export const gowunBatang = localFont({
  src: [
    { path: './GowunBatang-Regular.ttf', weight: '400' },
    { path: './GowunBatang-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});
