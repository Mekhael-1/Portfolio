import { Project, SkillCategory, Review } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'car-showroom',
    title: 'Luxury Car Showroom & Auto Dealership',
    titleAr: 'معرض السيارات الفاخرة (Car Showroom)',
    category: 'Automotive & Luxury',
    categoryAr: 'معارض سيارات ومحركات فاخرة',
    description: 'A modern, high-performance web experience for luxury car dealerships featuring 360-degree vehicle showcases, filterable models, dynamic performance stats, and instant test-drive booking.',
    descriptionAr: 'منصة ويب متطورة وعصرية لمعارض السيارات الفاخرة تتيح استعراض المركبات بمواصفات دقيقة، فلاتر بحث ذكية، ومقارنة المحركات مع تجربة مستخدم تفاعلية وسلسة للغاية.',
    details: 'Engineered with responsive CSS Grid layouts, real-time filtering algorithms, interactive booking states, and ultra-high-definition asset rendering without frame drops.',
    detailsAr: 'تم بناؤه مع التركيز على الأداء البصري العالي، والتجاوب مع جميع الشاشات، ونظام استفسار سريع مع واجهات مستخدم مخصصة تعكس فخامة المركبات.',
    image: '/images/screen 3.jpeg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Dynamic Filters', 'Responsive UI'],
    liveUrl: 'https://mekhael-1.github.io/car-showroom/',
    githubUrl: 'https://github.com/Mekhael-1/car-showroom',
    featured: true,
    metrics: [
      { label: 'Responsive', value: '100%' },
      { label: 'Speed Score', value: '98/100' },
      { label: 'Conversion', value: '+35%' }
    ]
  },
  {
    id: 'luxury-safari',
    title: 'Luxury Safari & Adventure Expeditions',
    titleAr: 'موقع رحلات السفاري الفاخرة (Safari & Adventure)',
    category: 'Travel & Tourism',
    categoryAr: 'سياحة ورحلات استكشافية',
    description: 'An immersive digital portal for wild nature safaris, featuring booking systems, interactive route galleries, gear guides, and smooth scenic visual flow.',
    descriptionAr: 'بوابة إلكترونية غامرة للرحلات البرية وسفاري الطبيعة الخلابة، تشمل نظام استكشاف المعالم، وحجوزات متكاملة وعروض بصرية تأسر الأنفاس مع خط سير الرحلات.',
    details: 'Architected with fluid typography, optimized high-res wildlife photography, scroll-driven interactive sections, and accessible booking interfaces.',
    detailsAr: 'صُممت بتجربة بصرية فريدة تجمع بين الألوان المستوحاة من الطبيعة، والأنيميشن التفاعلي عند التمرير، وتوافق تام مع الهواتف الذكية.',
    image: '/images/screen 2.jpeg',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Scroll Reveal', 'UI/UX'],
    liveUrl: 'https://mekhael-1.github.io/luxury-safari/',
    githubUrl: 'https://github.com/Mekhael-1/luxury-safari',
    featured: true,
    metrics: [
      { label: 'Satisfaction', value: '99%' },
      { label: 'Visual Flow', value: 'Smooth 60fps' },
      { label: 'Mobile Score', value: 'A+' }
    ]
  },
  {
    id: 'private-jet-site',
    title: 'Aviation & Private Jet Charter',
    titleAr: 'شركة الطيران والرحلات الخاصة (Private Jet Charter)',
    category: 'Aviation & Luxury Transport',
    categoryAr: 'طيران خاص وخدمات رجال الأعمال',
    description: 'An elite private aviation corporate portal providing real-time flight quotes, fleet specifications, VIP concierge inquiry, and luxury aesthetic styling.',
    descriptionAr: 'موقع راقٍ ومخصص لشركات الطيران والرحلات الجوية الخاصة، يتيح طلب عروض أسعار الرحلات، واستعراض أسطول الطائرات ومميزات كبائن الركاب.',
    details: 'Constructed around a luxury dark-mode theme, geometric precision, interactive fleet carousel, and instant contact modal integrations.',
    detailsAr: 'مبني بتصميم ملكي مظلم (Luxury Dark UI) وأناقة هندسية عالية مع تأثيرات حركية فاخرة تعكس فخامة خدمات الطيران الخاص.',
    image: '/images/screen.jpg',
    tags: ['React', 'TypeScript', 'Aviation UI', 'Micro-interactions', 'Fast Booking'],
    liveUrl: 'https://mekhael-1.github.io/private-jet-site/',
    githubUrl: 'https://github.com/Mekhael-1/private-jet-site',
    featured: true,
    metrics: [
      { label: 'Luxury Rating', value: '5.0' },
      { label: 'Booking Time', value: '< 2 mins' },
      { label: 'Performance', value: '100%' }
    ]
  },
  {
    id: 'kalonline-project',
    title: 'KalOnline Community & Server Hub',
    titleAr: 'منصة ومجتمع لعبة KalOnline الكلاسيكية',
    category: 'Gaming & Interactive Web',
    categoryAr: 'ألعاب ومجتمعات تفاعلية',
    description: 'A dynamic gaming community portal and server hub for the classic MMORPG KalOnline, featuring server status, player guides, character builds, ranking tables, and community events.',
    descriptionAr: 'منصة ويب تفاعلية متكاملة لمجتمع وسيرفرات لعبة KalOnline الكلاسيكية، تتيح متابعة حالة الخوادم، شروحات الشخصيات، لوائح الشرف والترتيب، وأحدث فعاليات اللعبة.',
    details: 'Developed with interactive data tables, character skill calculators, optimized asset loading, real-time status indicators, and responsive gamer-themed visual styling.',
    detailsAr: 'تم تطويرها مع جداول بيانات تفاعلية، ومؤشرات لحظية لحالة السيرفرات، وأداء عالي السرعة وتصميم داكن مستوحى من طابع الألعاب الإلكترونية.',
    image: '/images/image.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Gaming UI', 'Fast Loading'],
    liveUrl: 'https://mekhael-1.github.io/Kal-online/',
    githubUrl: 'https://github.com/Mekhael-1/Kal-online',
    featured: true,
    metrics: [
      { label: 'Uptime Flow', value: '99.9%' },
      { label: 'Gaming Theme', value: 'Dark UI' },
      { label: 'Responsive', value: '100%' }
    ]
  },
  {
    id: 'cafe-website',
    title: 'Modern Specialty Cafe & Coffee Roastery',
    titleAr: 'موقع كافيه ومحمصة بن مختصة (بن وحكاية)',
    category: 'Food & Hospitality',
    categoryAr: 'كافيهات ومطاعم وضيافة',
    description: 'An elegant, atmospheric specialty coffee website featuring a filterable menu, online table reservation system, ambient image galleries, and smooth scroll animations.',
    descriptionAr: 'موقع عصري فاخر لكافيه ومحمصة قهوة مختصة (بن وحكاية)، يحتوي على قائمة طعام ومشروبات قابلة للفلترة، نظام حجز طاولات تفاعلي، معرض صور بأجواء دافئة وتأثيرات حركية ناعمة.',
    details: 'Engineered with React 19, Framer Motion animations, Tailwind CSS v4, Lucide icons, responsive lightbox photo viewer, and automated GitHub Pages CI/CD deployment.',
    detailsAr: 'مبني بأحدث تقنيات React و Framer Motion وتصميم متجاوب بالكامل، مع فلترة سريعة للأصناف، وتأثيرات بصرية راقية تعكس دفء وأصالة المكان.',
    image: '/images/image1.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Specialty Coffee', 'Responsive'],
    liveUrl: 'https://mekhael-1.github.io/cafe-website/',
    githubUrl: 'https://github.com/Mekhael-1/cafe-website',
    featured: true,
    metrics: [
      { label: 'Animations', value: '60fps' },
      { label: 'Mobile Score', value: 'A+' },
      { label: 'User Delight', value: '100%' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Front-End & Frameworks',
    titleAr: 'واجهات المستخدم والتقنيات الأساسية',
    skills: [
      { name: 'React', level: 95, icon: 'Atom', color: '#61DAFB', description: 'Components architecture, custom hooks, context, state management, and lifecycle optimization.' },
      { name: 'TypeScript', level: 90, icon: 'FileCode2', color: '#3178C6', description: 'Strict type safety, interfaces, generic types, and scalable enterprise codebases.' },
      { name: 'JavaScript (ES6+)', level: 95, icon: 'Code', color: '#F7DF1E', description: 'Modern asynchronous patterns, DOM manipulation, APIs, algorithms, and event systems.' },
      { name: 'HTML5 Semantic', level: 98, icon: 'Layers', color: '#E34F26', description: 'Accessible markup (WCAG/a11y), structured microdata, SEO, and semantic document outline.' },
      { name: 'CSS3 / Modern CSS', level: 96, icon: 'Palette', color: '#2965F1', description: 'CSS Grid, Flexbox, custom CSS properties, keyframes, transitions, and 3D transforms.' },
      { name: 'Tailwind CSS', level: 94, icon: 'Wind', color: '#38BDF8', description: 'Utility-first rapid UI development, custom design systems, responsive breakpoints, and dark mode.' }
    ]
  },
  {
    title: 'Interactions & Visual Polish',
    titleAr: 'الحركات التفاعلية والتحكم البصري',
    skills: [
      { name: 'Framer Motion & Animations', level: 92, icon: 'Sparkles', color: '#FF0055', description: 'Scroll-linked animations, spring physics, layout morphing, gestures, and enter/exit transitions.' },
      { name: 'Scroll Reveal & Parallax', level: 93, icon: 'Compass', color: '#A855F7', description: 'Intersection Observer API, circular dynamic masks, floating reveal effects, and fluid scroll tracking.' },
      { name: 'Responsive & Mobile First', level: 98, icon: 'Smartphone', color: '#10B981', description: 'Flawless scaling across phones, foldables, tablets, ultrawide monitors, and high-DPI retina screens.' },
      { name: 'UI / UX Design Systems', level: 88, icon: 'Figma', color: '#EC4899', description: 'Design tokens, contrast ratios, micro-interactions, aesthetic spacing, and user psychology.' }
    ]
  },
  {
    title: 'Performance & Engineering Tools',
    titleAr: 'أدوات التطوير وسرعة الأداء',
    skills: [
      { name: 'Vite & Modern Bundlers', level: 90, icon: 'Zap', color: '#EAB308', description: 'Instant HMR, tree-shaking, production builds optimization, and asset minification.' },
      { name: 'Git & Version Control', level: 92, icon: 'GitBranch', color: '#F05032', description: 'Branch workflows, pull requests, conventional commits, and collaborative repository management.' },
      { name: 'Web Performance & Lighthouse', level: 94, icon: 'Gauge', color: '#06B6D4', description: 'Core Web Vitals, lazy loading, layout shift prevention, and optimized asset delivery.' },
      { name: 'Cross-Browser Compatibility', level: 95, icon: 'Globe', color: '#6366F1', description: 'Rock-solid visual & functional parity across Chrome, Firefox, Safari, Edge, and iOS WebKit.' }
    ]
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Sarah Jenkins',
    role: 'Product Lead at ApexTech',
    rating: 5,
    comment: 'Mekhael built our agency interface with mind-blowing attention to detail. The animations are buttery smooth and the codebase is clean as crystal!',
    date: 'Recent',
    avatar: 'SJ'
  },
  {
    id: 'rev-2',
    name: 'Karim Mansour',
    role: 'Founder, Safari Expeditions',
    rating: 5,
    comment: 'The luxury safari website exceeded every expectation. Our clients consistently praise how fast, immersive, and gorgeous the design feels on mobile.',
    date: 'Recent',
    avatar: 'KM'
  },
  {
    id: 'rev-3',
    name: 'David Rossi',
    role: 'Aviation Fleet Director',
    rating: 5,
    comment: 'Top-tier developer! The interactive private jet platform looks world-class, with remarkable responsiveness and zero lag during bookings.',
    date: 'Recent',
    avatar: 'DR'
  },
  {
    id: 'rev-4',
    name: 'Eng. Omar Khaled',
    role: 'CEO & Founder at Roaster Hub',
    rating: 5,
    comment: 'موقع كافيه ومحمصة القهوة فاق كل توقعاتنا! الفلاتر سريعة للغاية، وحجز الطاولات سلس، وتجربة المستخدم أنيقة جداً وتتناسب مع هوية البراند.',
    date: 'Recent',
    avatar: 'OK'
  }
];
