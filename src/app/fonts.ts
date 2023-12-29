import { Noto_Sans_KR, Gowun_Batang, Gowun_Dodum, Song_Myung } from 'next/font/google';

export const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const gown_batang = Gowun_Batang({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gown-batang',
  weight: ['400', '700'],
});
export const gown_dodum = Gowun_Dodum({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gown-dodum',
  weight: ['400'],
});
export const song_myung = Song_Myung({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-song-myung',
  weight: ['400'],
});
