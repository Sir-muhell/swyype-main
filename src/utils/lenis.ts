import Lenis from '@studio-freight/lenis'

export const useLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time: number | string) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis
}