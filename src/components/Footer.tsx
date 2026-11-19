import React from 'react';
import { Mail, Heart, ArrowUp, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { Mini3DRobot } from './Mini3DRobot';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'projects', labelEn: 'Projects', labelAr: 'معرض المشاريع' },
    { id: 'skills', labelEn: 'Skills', labelAr: 'المهارات والتقنيات' },
    { id: 'contact', labelEn: 'Contact', labelAr: 'اتصل بي' },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/80 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      {/* Subtle Glow Sphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-cyan-500/30">
                M
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Mekhael Nabil</span>
                  <Mini3DRobot size={24} />
                </span>
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md leading-relaxed">
              {language === 'ar'
                ? 'مطور واجهات أمامية متخصص في بناء تطبيقات ويب عصرية، سريعة، تفاعلية ومتجاوبة بدقة فائقة مع التركيز على تجربة المستخدم (UI/UX) وأحدث التقنيات.'
                : 'Creative Front-End Developer dedicated to crafting pixel-perfect, interactive web applications with modern design systems and top-tier responsiveness.'}
            </p>

            {/* Social Icons & Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://wa.me/201026267645"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>واتساب</span>
              </a>

              <a
                href="tel:01026267645"
                className="px-3.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm"
                title="اتصال هاتف"
              >
                <Phone className="w-3.5 h-3.5" />
                <span dir="ltr">01026267645</span>
              </a>

              <a
                href="https://github.com/Mekhael-1"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-zinc-900 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-all hover:scale-105"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/IiIElFr3oNeIiI"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-zinc-900 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-all hover:scale-105"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4 text-blue-500" />
              </a>

              <a
                href="https://www.instagram.com/mi5aelwinch?mdxt=MXdtYnBod3ZmMDczYQ=="
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-zinc-900 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-pink-500 transition-all hover:scale-105"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {language === 'ar' ? 'صفحات الموقع' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {language === 'ar' ? link.labelAr : link.labelEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {language === 'ar' ? 'معلومات التواصل' : 'Direct Reach'}
            </h4>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <p>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Phone & WhatsApp:</span>{' '}
                <a
                  href="https://wa.me/201026267645"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-500 transition-colors font-bold text-slate-900 dark:text-white"
                  dir="ltr"
                >
                  01026267645
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Email:</span>{' '}
                <a
                  href="mailto:sefennabil75@gmail.com"
                  className="hover:text-cyan-500 transition-colors break-all"
                >
                  sefennabil75@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Status:</span>{' '}
                <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {language === 'ar' ? 'متاح لمشاريع جديدة' : 'Available for Work'}
                </span>
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-pointer"
              >
                {language === 'ar' ? 'أرسل رسالة الآن' : 'Send a Message'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/70 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Mekhael Nabil</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors group cursor-pointer"
          >
            <span>{language === 'ar' ? 'الرجوع للأعلى' : 'Back to top'}</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
