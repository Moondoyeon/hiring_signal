import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '채용시그널 | 문도연 포트폴리오',
    short_name: '채용시그널',
    description: '채용시그널을 받길 염원하는 개발자 취준생의 포트폴리오 웹입니다',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
  };
}
