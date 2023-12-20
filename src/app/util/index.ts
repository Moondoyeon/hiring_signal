export const observeGlobalBgChange = (mode: string) => {
  return ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      document.documentElement.classList.add(mode);
    } else {
      document.documentElement.classList.remove(mode);
    }
  };
};

// const observeCurrentSection = (destination: section) => {
//   return (
//     [entry]: IntersectionObserverEntry[],
//     observer: IntersectionObserver
//   ) => {
//     if (entry.isIntersecting) setCurrentSection(destination);
//   };
// };

// DOM API
export const scroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
