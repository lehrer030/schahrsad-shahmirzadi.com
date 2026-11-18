/**
 * Utility for smooth, precise scrolling to target sections.
 * Guarantees that the target heading/card sits immediately under the sticky header
 * with an equal margin on top that matches the horizontal margin (16px on mobile matching px-4).
 */
export const scrollToElementWithOffset = (
  target: HTMLElement | string,
  extraDelay = 0
) => {
  const executeScroll = () => {
    const el = typeof target === 'string' ? document.getElementById(target) : target;
    if (!el) return;

    // Accurately determine the bottom edge of the sticky header on screen.
    let headerHeight = 0;
    const header = document.querySelector('header');

    if (header) {
      headerHeight = header.getBoundingClientRect().height;
    }

    // Safety fallback if header is not yet rendered or inflated by temporary overlays
    if (!headerHeight || headerHeight > 220 || headerHeight < 40) {
      headerHeight = window.innerWidth < 1024 ? 90 : 100;
    }

    // Exact equal spacing: on mobile px-4 is 16px (1rem).
    // The top gap between the bottom of sticky header and top of section card equals the left margin!
    const topMargin = window.innerWidth < 640 ? 16 : (window.innerWidth < 1024 ? 20 : 24);

    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const targetScrollY = Math.max(0, elementPosition - headerHeight - topMargin);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  if (extraDelay > 0) {
    setTimeout(executeScroll, extraDelay);
  } else {
    executeScroll();
  }
};
