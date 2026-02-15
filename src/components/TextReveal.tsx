import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'chars' | 'words' | 'lines';
}

const TextReveal = ({ children, className = '', delay = 0, type = 'chars' }: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const text = container.textContent || '';
    container.innerHTML = '';

    let elements: HTMLSpanElement[] = [];

    if (type === 'chars') {
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(50px) rotateX(-90deg)';
        span.style.transformOrigin = 'center bottom';
        container.appendChild(span);
        elements.push(span);
      });
    } else if (type === 'words') {
      text.split(' ').forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.marginRight = '0.25em';
        span.style.opacity = '0';
        span.style.transform = 'translateY(30px)';
        container.appendChild(span);
        elements.push(span);
      });
    }

    // Animate
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      stagger: type === 'chars' ? 0.02 : 0.1,
      delay,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === container) st.kill();
      });
    };
  }, [children, delay, type]);

  return (
    <div ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {children}
    </div>
  );
};

export default TextReveal;
