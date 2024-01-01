import localFont from 'next/font/local';
// import { Noto_Sans_KR, Gowun_Batang, Gowun_Dodum, Song_Myung } from 'next/font/google';

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
    { path: '../fonts/NotoSansKR-light.ttf', weight: '300' },
    { path: '../fonts/NotoSansKR-Regular.ttf', weight: '400' },
    { path: '../fonts/NotoSansKR-Medium.ttf', weight: '500' },
    { path: '../fonts/NotoSansKR-SemiBold.ttf', weight: '600' },
    { path: '../fonts/NotoSansKR-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});
export const gowunBatang = localFont({
  src: [
    { path: '../fonts/GowunBatang-Regular.ttf', weight: '400' },
    { path: '../fonts/GowunBatang-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});
