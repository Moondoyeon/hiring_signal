import { useRef } from 'react';

export default function useThrottle(callback: () => void, time: number) {
  const throttle = useRef(false);

  return () => {
    if (throttle.current) return;
    if (!throttle.current) {
      throttle.current = true;
      callback();

      setTimeout(() => {
        throttle.current = false;
      }, time);
    }
  };
}
