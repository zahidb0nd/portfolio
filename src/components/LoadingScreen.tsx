import { useState, useEffect } from 'react';
import { Terminal, Shield, Lock } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const bootLines = [
    { text: 'Initializing kernel...', icon: Terminal },
    { text: 'Loading security modules...', icon: Shield },
    { text: 'Establishing secure connection...', icon: Lock },
    { text: 'Loading portfolio assets...', icon: Terminal },
    { text: 'Access Granted.', icon: Shield },
  ];

  useEffect(() => {
    // Show icon after a delay
    setTimeout(() => setShowIcon(true), 200);

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < bootLines.length - 1) {
          return prev + 1;
        }
        clearInterval(lineInterval);
        return prev;
      });
    }, 350);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1.5;
        }
        clearInterval(progressInterval);
        return prev;
      });
    }, 25);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 600);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-matrix-bg z-[10000] flex flex-col items-center justify-center font-mono ${
        isExiting ? 'crt-off' : ''
      }`}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 w-full max-w-lg px-8">
        {/* Logo Animation */}
        <div 
          className={`flex justify-center mb-10 transition-all duration-700 ${
            showIcon ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-matrix-green/10 border border-matrix-green/30 flex items-center justify-center animate-pulse-glow">
              <Shield className="w-12 h-12 text-matrix-green" />
            </div>
            <div className="absolute inset-0 w-24 h-24 rounded-2xl border-2 border-matrix-green/20 animate-spin-slow" />
          </div>
        </div>

        {/* Boot Lines */}
        <div className="mb-8 space-y-3 min-h-[180px]">
          {bootLines.slice(0, currentLine + 1).map((line, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-matrix-green text-sm transition-all duration-300 ${
                index === currentLine ? 'typing-cursor' : ''
              } ${index <= currentLine ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <line.icon className={`w-4 h-4 ${index === currentLine ? 'animate-pulse' : ''}`} />
              <span className="text-matrix-dark/70">$</span>
              <span>{line.text}</span>
              {index === bootLines.length - 1 && (
                <span className="text-cyber-gold ml-2">✓</span>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-matrix-green/70">Loading system...</span>
            <span className="text-matrix-green font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-matrix-surface/50 rounded-full overflow-hidden border border-matrix-green/20">
            <div
              className="h-full bg-gradient-to-r from-matrix-green to-cyber-cyan transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-foreground/30 text-xs">
            Zahid Hussain | Cybersecurity Portfolio
          </p>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-matrix-green/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-matrix-green/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-matrix-green/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-matrix-green/20" />
    </div>
  );
};

export default LoadingScreen;
