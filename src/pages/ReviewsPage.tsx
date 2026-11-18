import React, { useState } from 'react';
import { Star, Award, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';
import { INITIAL_REVIEWS } from '../data/portfolioData';
import { Review } from '../types';
import { ScrollReveal } from '../components/ScrollReveal';

export const ReviewsPage: React.FC = () => {
  const { language } = useTheme();
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Compute metrics
  const totalReviews = reviews.length;
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || (language === 'ar' ? 'عميل / زائر' : 'Visitor'),
      rating,
      comment: comment.trim(),
      date: language === 'ar' ? 'الآن' : 'Just now',
      avatar: name.trim().slice(0, 2).toUpperCase()
    };

    setReviews([newRev, ...reviews]);
    setName('');
    setRole('');
    setComment('');
    setIsSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTimeout(() => setIsSubmitted(false), 4500);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal effect="slide-up">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'التقييمات وآراء العملاء' : 'Testimonials & Ratings'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              {language === 'ar' ? 'انطباعات الزوار والعملاء' : 'Client Feedback & Impressions'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {language === 'ar'
                ? 'شاركنا تقييمك الفوري لتجربة تصفح الموقع أو اقرأ انطباعات العملاء الذين تعاونت معهم.'
                : 'Leave your thoughts or explore verified feedback from clients and visitors worldwide.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <ScrollReveal effect="floating" delay={100}>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
              <div className="text-4xl font-extrabold text-cyan-500 mb-1">1,480+</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                {language === 'ar' ? 'زيارات وتفاعل حقيقي' : 'Live Portfolio Visits'}
              </div>
              <div className="text-xs text-slate-500">
                {language === 'ar' ? 'تفاعل فوري مع الواجهات' : 'Active visitor sessions'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal effect="floating" delay={200}>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
              <div className="text-4xl font-extrabold text-amber-500 mb-1 flex items-center justify-center gap-1">
                <span>{avgRating}</span>
                <span className="text-lg text-slate-400">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-500">
                {language === 'ar' ? 'متوسط تقييم الرضا' : 'Average visitor rating'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal effect="floating" delay={300}>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
              <div className="text-4xl font-extrabold text-emerald-500 mb-1">100%</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                {language === 'ar' ? 'نسبة رضا العملاء' : 'Client Satisfaction'}
              </div>
              <div className="text-xs text-slate-500">
                {language === 'ar' ? 'بناءً على المشاريع المنجزة' : 'Based on real projects'}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid (Neatly Side-by-Side Grid Layout) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 dark:text-white text-xl sm:text-2xl">
              {language === 'ar' ? 'آراء وانطباعات العملاء' : 'Verified Client Impressions'}
            </h3>
            <span className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
              {totalReviews} {language === 'ar' ? 'تقييمات مسجلة' : 'reviews'}
            </span>
          </div>

          {/* Symmetrical 3-Column Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <ScrollReveal key={rev.id} effect="circular">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:border-cyan-500/40 transition-all flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-md">
                          {rev.avatar || rev.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                            {rev.name}
                          </h4>
                          <span className="text-[11px] text-slate-500">{rev.role}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                    <span>Verified Review</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Add Rating Form in Bottom Section */}
        <div className="max-w-2xl mx-auto pt-6">
          <ScrollReveal effect="slide-up">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                {language === 'ar' ? 'أضف تقييمك ورأيك في الموقع' : 'Submit Your Feedback'}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                {language === 'ar'
                  ? 'رأيك يهمنا ويسعدنا مشاركته في منصة التقييمات!'
                  : 'Your immediate feedback helps keep this portfolio sharp!'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {language === 'ar' ? 'اختر التقييم بالنجوم:' : 'Select Rating:'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-1.5 rounded-lg transition-transform hover:scale-125 cursor-pointer ${
                          star <= rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'
                        }`}
                      >
                        <Star className={`w-7 h-7 ${star <= rating ? 'fill-amber-400' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'ar' ? 'الاسم *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'ar' ? 'أحمد الشناوي' : 'Alex Jordan'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'ar' ? 'المسمى الوظيفي / الشركة' : 'Job Title / Company'}
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder={language === 'ar' ? 'UI/UX Designer / Product Lead' : 'Founder / Lead Dev'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'ar' ? 'التعليق أو الانطباع *' : 'Feedback or Impression *'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={language === 'ar' ? 'ما أكثر ما لفت انتباهك في الموقع والمشاريع؟' : 'What impressed you the most?'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{language === 'ar' ? 'نشر التقييم الآن' : 'Publish Review'}</span>
                  <Send className="w-4 h-4" />
                </button>

                {isSubmitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{language === 'ar' ? 'تمت إضافة تقييمك بنجاح! شكراً لك 🎉' : 'Your review was published successfully! 🎉'}</span>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
