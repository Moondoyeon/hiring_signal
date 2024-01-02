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
    { path: 'src/app/fonts/NotoSansKR-light.ttf', weight: '300' },
    { path: 'src/app/fonts/NotoSansKR-Regular.ttf', weight: '400' },
    { path: 'src/app/fonts/NotoSansKR-Medium.ttf', weight: '500' },
    { path: 'src/app/fonts/NotoSansKR-SemiBold.ttf', weight: '600' },
    { path: 'src/app/fonts/NotoSansKR-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});
export const gowunBatang = localFont({
  src: [
    { path: 'src/app/fonts/GowunBatang-Regular.ttf', weight: '400' },
    { path: 'src/app/fonts/GowunBatang-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});
