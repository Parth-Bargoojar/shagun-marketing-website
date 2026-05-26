import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (ref, options = {}) => {
  // Serialize options to prevent hook dependency churn when object literals are passed inline
  const serializedOptions = JSON.stringify({
    direction: options.direction,
    distance: options.distance,
    duration: options.duration,
    delay: options.delay,
    stagger: options.stagger,
    ease: options.ease,
    markers: options.markers,
    threshold: options.threshold,
  });

  const customTrigger = options.trigger;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const parsed = JSON.parse(serializedOptions);
    const direction = parsed.direction ?? 'up';
    const distance = parsed.distance ?? 50;
    const duration = parsed.duration ?? 0.6;
    const delay = parsed.delay ?? 0;
    const stagger = parsed.stagger ?? 0;
    const ease = parsed.ease ?? 'power2.out';
    const markers = parsed.markers ?? false;
    const threshold = parsed.threshold ?? 0.1;
    const triggerEl = customTrigger || el;

    let x = 0;
    let y = 0;

    if (direction === 'up') y = distance;
    if (direction === 'down') y = -distance;
    if (direction === 'left') x = distance;
    if (direction === 'right') x = -distance;

    const ctx = gsap.context(() => {
      // If stagger is defined and the element has children, animate children
      if (stagger > 0 && el.children.length > 0) {
        gsap.fromTo(
          el.children,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            stagger,
            ease,
            willChange: 'opacity, transform',
            scrollTrigger: {
              trigger: triggerEl,
              start: `top ${100 - threshold * 100}%`,
              toggleActions: 'play none none none',
              markers,
            },
          }
        );
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            ease,
            willChange: 'opacity, transform',
            scrollTrigger: {
              trigger: triggerEl,
              start: `top ${100 - threshold * 100}%`,
              toggleActions: 'play none none none',
              markers,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [ref, serializedOptions, customTrigger]);
};
