import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  distance = 50, 
  duration = 0.6, 
  delay = 0, 
  stagger = 0,
  ease = 'power2.out',
  threshold = 0.1,
  className = '',
  style = {}
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, x: 0, y: 0 });
      if (stagger > 0 && el.children.length > 0) {
        gsap.set(el.children, { opacity: 1, x: 0, y: 0 });
      }
      return;
    }

    let x = 0;
    let y = 0;
    
    if (direction === 'up') y = distance;
    if (direction === 'down') y = -distance;
    if (direction === 'left') x = distance;
    if (direction === 'right') x = -distance;

    const ctx = gsap.context(() => {
      if (stagger > 0 && el.children.length > 0) {
        // Hide children initially
        gsap.set(el.children, { opacity: 0, x, y });
        
        gsap.to(el.children, {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger,
          ease,
          willChange: 'opacity, transform',
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: 'play none none none',
          },
        });
      } else {
        // Hide self initially
        gsap.set(el, { opacity: 0, x, y });
        
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease,
          willChange: 'opacity, transform',
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: 'play none none none',
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [direction, distance, duration, delay, stagger, ease, threshold]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default ScrollReveal;
