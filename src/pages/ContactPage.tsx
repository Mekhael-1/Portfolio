import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { GithubIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '../components/SocialIcons';

export const ContactPage: React.FC = () => {
  const { language } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const directEmail = 'sefennabil75@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Open user's email client directly with prefilled parameters
    const mailtoUrl = `mailto:${directEmail}?subject=${encodeURIComponent(
      subject || `رسالة من بورتفوليو: ${name}`
    )}&body=${encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`)}`;

    window.open(mailtoUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.6 }
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal effect="slide-up">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'تواصل معي' : "Let's Connect"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              {language === 'ar' ? 'فلنبدأ شيئاً مبهراً معاً' : "Let's Build Something Exceptional"}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {language === 'ar'
                ? 'اضغط مباشرة على رابط الجيميل لمراسلتي فوراً، أو استخدم نموذج المراسلة المباشر أدناه.'
                : 'Click directly on the Gmail link or use the instant messaging form below.'}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Contact Details & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal effect="floating" delay={100}>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'قنوات التواصل المباشرة' : 'Direct Channels'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === 'ar'
                    ? 'اضغط على بطاقة الجيميل وسيفتح تطبيق البريد مباشرة لتتمكن من إرسال رسالتك بضغطة زر واحدة.'
                    : 'Click directly on the Gmail card to open your email client.'}
                </p>
              </div>

              {/* Direct Contact Cards (WhatsApp, Phone, Gmail) */}
              <div className="space-y-4 pt-2">
                {/* WhatsApp & Direct Call Card */}
                <a
                  href="https://wa.me/201026267645"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border-2 border-emerald-500/40 hover:border-emerald-500 flex items-center gap-4 hover:shadow-xl hover:shadow-emerald-500/15 transition-all group cursor-pointer"
                  title="تواصل مباشرة عبر واتساب"
                >
                  <div className="w-13 h-13 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-semibold mb-0.5 flex items-center justify-between">
                      <span>{language === 'ar' ? 'رقم الهاتف والواتساب المباشر' : 'Direct Phone & WhatsApp'}</span>
                      <span className="text-[10px] text-emerald-500 font-bold">Chat Now &rarr;</span>
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors" dir="ltr">
                      01026267645
                    </div>
                  </div>
                </a>

                {/* Direct Gmail Card with Guaranteed Opening */}
                <a
                  href={`mailto:${directEmail}?subject=${encodeURIComponent('استفسار بخصوص مشروع ويب جديد')}`}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border-2 border-cyan-500/30 hover:border-cyan-500 flex items-center gap-4 hover:shadow-xl hover:shadow-cyan-500/15 transition-all group cursor-pointer"
                  title="اضغط لفتح تطبيق الجيميل فوراً"
                >
                  <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-semibold mb-0.5 flex items-center justify-between">
                      <span>{language === 'ar' ? 'البريد الإلكتروني المباشر (اضغط للفتح)' : 'Direct Gmail (Click to Send)'}</span>
                      <span className="text-[10px] text-cyan-500 font-bold">Open Email &rarr;</span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors break-all">
                      {directEmail}
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">
                      {language === 'ar' ? 'نطاق العمل' : 'Work Scope'}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {language === 'ar' ? 'متاح عن بعد لجميع دول العالم (Remote)' : 'Available Globally (Remote)'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels with Active Links */}
              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {language === 'ar' ? 'حساباتي على الشبكات الاجتماعية' : 'Social Platforms'}
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Mekhael-1"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-2 hover:border-cyan-500 transition-all hover:scale-105 cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.facebook.com/IiIElFr3oNeIiI"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-2 hover:border-blue-500 transition-all hover:scale-105 cursor-pointer"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-500" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/mi5aelwinch?mdxt=MXdtYnBod3ZmMDczYQ=="
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-2 hover:border-pink-500 transition-all hover:scale-105 cursor-pointer"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal effect="slide-up" delay={150}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  {language === 'ar' ? 'أرسل رسالة سريعة' : 'Send a Message'}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={language === 'ar' ? 'ميخائيل نبيل' : 'John Doe'}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {language === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'ar' ? 'الموضوع أو نوع المشروع' : 'Subject / Project Scope'}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={language === 'ar' ? 'تطوير موقع ويب / استشارة برمجية' : 'New Website / Front-End Project'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'ar' ? 'تفاصيل الرسالة *' : 'Message Details *'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={language === 'ar' ? 'أخبرني المزيد عن فكرتك أو متطلباتك بالتفصيل...' : 'Tell me about your project, timeline, and goals...'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>{language === 'ar' ? 'جاري فتح البريد...' : 'Opening Email Client...'}</span>
                    ) : (
                      <>
                        <span>{language === 'ar' ? 'إرسال الرسالة عبر الجيميل الآن' : 'Send Message via Gmail'}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {isSent && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center gap-2.5 animate-in fade-in">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>{language === 'ar' ? 'تم فتح تطبيق البريد بنجاح لتأكيد الإرسال!' : 'Mail client opened successfully!'}</span>
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
