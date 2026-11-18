import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Globe, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'projects', labelEn: 'Projects', labelAr: 'المشاريع' },
    { id: 'about', labelEn: 'About', labelAr: 'عني' },
    { id: 'skills', labelEn: 'Skills', labelAr: 'المهارات' },
    { id: 'reviews', labelEn: 'Reviews', labelAr: 'التقييمات' },
    { id: 'contact', labelEn: 'Contact', labelAr: 'التواصل' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name (Clean, Professional & No mini robot clutter) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left rtl:text-right group flex flex-col focus:outline-none cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
                  M
                </div>
                <div>
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 transition-colors group-hover:text-cyan-500">
                    <span>Mekhael Nabil</span>
                    <span className="text-cyan-500 inline-block animate-pulse">⚡</span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-cyan-400 tracking-wide uppercase block -mt-1">
                    {language === 'ar' ? 'مطور واجهات أمامية' : 'Front-End Developer'}
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 relative cursor-pointer ${
                    isActive
                      ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-950/60 font-bold shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60'
                  }`}
                >
                  {language === 'ar' ? link.labelAr : link.labelEn}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Lang Toggle + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
              title={language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-cyan-500" />
              <span className="hidden sm:inline">{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Dark / Light Mode Toggle Button with Guaranteed Functionality */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-amber-400 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all shadow-md cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95"
              aria-label="Toggle Dark / Light Theme"
              title={theme === 'dark' ? 'تبديل للوضع النهاري (Light Mode)' : 'تبديل للوضع الليلي (Dark Mode)'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{language === 'ar' ? 'تواصل معي' : "Let's Talk"}</span>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 cursor-pointer"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-2 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 rounded-b-2xl shadow-2xl space-y-1 animate-in fade-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left rtl:text-right px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{language === 'ar' ? link.labelAr : link.labelEn}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-500" />}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-2">
              <span className="text-xs text-slate-500 font-medium">
                {language === 'ar' ? 'متاح للعمل فوراً' : 'Available for hire'}
              </span>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-cyan-500 text-white cursor-pointer shadow-md"
              >
                {language === 'ar' ? 'تواصل الآن' : 'Get in touch'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
