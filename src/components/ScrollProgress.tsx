import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-matrix-green via-cyber-cyan to-matrix-green transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Side progress indicator */}
      <div
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 hidden xl:block ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <div className="relative w-1 h-32 bg-matrix-green/20 rounded-full overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-matrix-green to-cyber-cyan transition-all duration-100 rounded-full"
            style={{ height: `${progress}%` }}
          />
        </div>
        <div className="absolute -right-1 top-0 text-[10px] text-matrix-green/50 font-mono rotate-90 origin-left">
          {Math.round(progress)}%
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;
