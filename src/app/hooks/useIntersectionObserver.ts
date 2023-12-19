import { useEffect, useRef } from "react";

interface Props {
  handleIntersect: IntersectionObserverCallback;
  threshold?: number;
}
export default function useInterSectionObserver({
  handleIntersect,
  threshold = 0.5,
}: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    observer = new IntersectionObserver(handleIntersect, {
      threshold: threshold,
    });
    targetRef.current && observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [handleIntersect, threshold]);

  return targetRef;
}
