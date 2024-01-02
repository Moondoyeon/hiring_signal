export const observeGlobalBgChange = (mode: string) => {
  return ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      document.documentElement.classList.add(mode);
    } else {
      document.documentElement.classList.remove(mode);
    }
  };
};

// DOM API
export const handleScrollView = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
