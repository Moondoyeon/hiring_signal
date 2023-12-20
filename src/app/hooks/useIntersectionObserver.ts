import { useEffect, useRef } from "react";

interface Props {
  handleIntersect: IntersectionObserverCallback;
  threshold?: number;
  rootMargin?: string;
}
export default function useInterSectionObserver({
  handleIntersect,
  threshold = 0.5,
  rootMargin = "",
}: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    observer = new IntersectionObserver(handleIntersect, {
      threshold: threshold,
      rootMargin: rootMargin,
    });
    targetRef.current && observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [handleIntersect, rootMargin, threshold]);

  return targetRef;
}
