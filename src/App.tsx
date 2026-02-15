import './App.css';
import { Toaster } from '@/components/ui/sonner';

// Sections
import Hero from '@/sections/Hero';
import Philosophy from '@/sections/Philosophy';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-500 selection:text-white">

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <Philosophy />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-100">
          <p>&copy; {new Date().getFullYear()} Zahid Bond. All rights reserved.</p>
        </footer>

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </>
  );
}

export default App;
