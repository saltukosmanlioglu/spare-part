export const onScroll = (top?: number) =>
  window.scrollTo({
    behavior: "smooth",
    top: top || 0,
  });
