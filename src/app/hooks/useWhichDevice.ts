import { useMediaQuery } from 'react-responsive';

export default function useWhichDevice() {
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 600px) and (max-width: 1199px)' });
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:1200px)' });

  return { isMobile, isTablet, isDesktopOrLaptop };
}
