import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      // Fast, smooth cursor following using GSAP
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power2.out',
      });
      
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.02,
        ease: 'none',
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: isHovering ? 1.5 : 1,
        duration: 0.1,
      });
    };

    // Handle hoverable elements
    const handleElementEnter = () => {
      setIsHovering(true);
      gsap.to(cursor, {
        scale: 1.5,
        borderColor: '#00FFFF',
        duration: 0.2,
      });
    };

    const handleElementLeave = () => {
      setIsHovering(false);
      gsap.to(cursor, {
        scale: 1,
        borderColor: '#00FF41',
        duration: 0.2,
      });
    };

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleElementEnter);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementEnter);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, [isHovering]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border-2 border-matrix-green pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{ willChange: 'transform' }}
      />
      {/* Center dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-matrix-green pointer-events-none z-[9999] hidden lg:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
