import { ThemeProvider } from './context/ThemeContext';
import Nav from './components/Nav';
import Header from './components/Header';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--desk)]">
        <Nav />

        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="sheet bg-[var(--paper)] border border-[var(--rule)] rounded-xl shadow-[var(--shadow)] px-6 sm:px-12 py-10 sm:py-14">
            <Header />
            <Summary />
            <Projects />
            <Skills />
            <Education />
            <Certifications />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
