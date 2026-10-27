import Header from './components/Header.jsx';
import SideRails from './components/SideRails.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import { useActiveSection } from './hooks/useActiveSection.js';

export default function App() {
  const active = useActiveSection();

  return (
    <>
      <Header active={active} />
      <SideRails active={active} />
      <main>
        {/* Hero menempel di belakang, About naik menutupinya saat digulir */}
        <div className="stack">
          <Hero />
          <About />
        </div>
        <Marquee />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}
