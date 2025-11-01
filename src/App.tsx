import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Blog from './components/Blog';
import BuildLog from './components/BuildLog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Blog />
        <BuildLog />
        <Contact />
      </main>

      <Footer />
      
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--card)',
            border: '1px solid var(--neon-blue)',
            color: 'var(--foreground)',
          }
        }}
      />
    </div>
  );
}
