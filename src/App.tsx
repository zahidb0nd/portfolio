import { Suspense, lazy } from 'react';
import './App.css';
import { Toaster } from '@/components/ui/sonner';

// Components
import Navigation from '@/components/Navigation';
import { SectionSkeleton } from '@/components/SectionSkeleton';

// Sections
import Hero from '@/sections/Hero';
import Footer from '@/sections/Footer';

const About = lazy(() => import('@/sections/About'));
const Skills = lazy(() => import('@/sections/Skills'));
const Projects = lazy(() => import('@/sections/Projects'));
const Contact = lazy(() => import('@/sections/Contact'));

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-500 selection:text-white">

        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <Suspense fallback={<SectionSkeleton />}>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>

        <Footer />

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </>
  );
}

export default App;
