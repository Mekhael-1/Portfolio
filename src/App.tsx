import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { StarfieldBackground } from './components/StarfieldBackground';

export const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Smooth page transition handler
  const handleNavigate = (newPage: string) => {
    if (newPage === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-cyan-500 selection:text-white bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* Deep Space Black Sky with Twinkling Stars & Nebula Background */}
      <StarfieldBackground starCount={95} />

      {/* Persistent Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Multi-Page Container with Transition Animation */}
      <main
        className={`flex-1 relative z-10 transition-all duration-300 ${
          isTransitioning
            ? 'opacity-0 scale-[0.99] translate-y-2'
            : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        {renderPage()}
      </main>

      {/* Persistent Modern Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
