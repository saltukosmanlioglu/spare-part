export const onScroll = (top?: number) =>
  window.scrollTo({
    behavior: "smooth",
    top: 0 || top,
  });
