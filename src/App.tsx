import { Suspense, lazy } from 'react';
import './App.css';
import { Toaster } from '@/components/ui/sonner';

// Sections
import Hero from '@/sections/Hero';
import { SectionSkeleton } from '@/components/SectionSkeleton';

const About = lazy(() => import('@/sections/About'));
const Skills = lazy(() => import('@/sections/Skills'));
const Projects = lazy(() => import('@/sections/Projects'));
const Contact = lazy(() => import('@/sections/Contact'));

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-500 selection:text-white">

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

        <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-100">
          <p>&copy; {new Date().getFullYear()} Zahid Hussain. All rights reserved.</p>
        </footer>

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </>
  );
}

export default App;
