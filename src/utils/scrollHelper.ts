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

    // Accurately determine the visible sticky header height
    const brandBar = document.getElementById('brand-header-bar');
    const topicsBar = document.getElementById('topics-navigation-bar');
    let headerHeight = 0;

    if (brandBar) {
      headerHeight += brandBar.getBoundingClientRect().height;
    }
    if (topicsBar && window.getComputedStyle(topicsBar).display !== 'none') {
      headerHeight += topicsBar.getBoundingClientRect().height;
    }

    if (!headerHeight || headerHeight < 40 || headerHeight > 200) {
      headerHeight = window.innerWidth < 1024 ? 54 : 96;
    }

    const topMargin = window.innerWidth < 640 ? 12 : 20;

    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const targetScrollY = Math.max(0, Math.round(elementPosition - headerHeight - topMargin));

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
