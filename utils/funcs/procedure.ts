export const onScroll = (top?: number) =>
  window.scrollTo({
    behavior: "smooth",
    top: top || 0,
  });

export const yearsOfExperiences = new Date().getFullYear() - 2015;
