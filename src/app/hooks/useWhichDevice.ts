import { useMediaQuery } from 'react-responsive';

export default function useWhichDevice() {
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 600px) and (max-width: 1199px)' });
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:1200px)' });
  // const [isMobile, setIsMobile] = useState(false);
  // const [isTablet, setIsTablet] = useState(false);
  // useEffect(() => {
  //   if (navigator) {
  //     const { userAgent, maxTouchPoints } = navigator;
  //     const mobile = navigator.userAgent.match(/iPhone|Android/i);
  //     const tablet = navigator.userAgent.match(/iPad|iPod/i);
  //     console.log(mobile);
  //     console.log(tablet);
  //     console.log(navigator.userAgent);
  //     if (mobile === null) setIsMobile(false);
  //     else setIsMobile(true);
  //   }
  // }, []);
  return { isMobile, isTablet, isDesktopOrLaptop };
}
