export const returnIntersectionCallback = (mode: string) => {
  const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      document.documentElement.classList.add(mode);
    } else {
      document.documentElement.classList.remove(mode);
    }
  };
  return handleIntersection;
};
