import { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from '@/components/ui/sonner';

// Components
import LoadingScreen from '@/components/LoadingScreen';
import AdvancedParticles from '@/components/AdvancedParticles';
import MatrixRain from '@/components/MatrixRain';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import OrbitalNav from '@/components/OrbitalNav';

// Sections
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Certifications from '@/sections/Certifications';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Main Content */}
      <div
        className={`min-h-screen bg-matrix-bg text-foreground transition-all duration-700 ${showContent ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {/* Background Effects */}
        <MatrixRain />
        <AdvancedParticles />

        {/* UI Components */}
        <CustomCursor />
        <ScrollProgress />
        <OrbitalNav />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'linear-gradient(135deg, #003B00, #002200)',
              border: '1px solid #00FF41',
              color: '#E0E0E0',
              fontFamily: '"JetBrains Mono", monospace',
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
