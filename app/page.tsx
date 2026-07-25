// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GridBackground from '@/components/hero/GridBackground';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative bg-slate-900">
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education /> 
        <Projects />  
        <Contact />
        <Footer />
        </main>
      </div>
    </div>
  );
}