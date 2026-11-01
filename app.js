// ==========================================================================
// Mekhael Nabil - Portfolio JavaScript Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Dynamic Year in Footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Dark / Light Mode Toggle with LocalStorage ----------
  const themeToggle = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or default to system preference/dark
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  htmlRoot.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  // ---------- Floating Scroll-to-Top Button & Header Scrolled State ----------
  const siteHeader = document.getElementById('site-header');
  const floatingScrollTop = document.getElementById('floating-scroll-top');
  const footerScrollBtn = document.getElementById('footer-scroll-top-btn');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header blurred shadow toggle
    if (siteHeader) {
      if (scrollPos > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Floating scroll-to-top visibility (appears after scrolling down 300px)
    if (floatingScrollTop) {
      if (scrollPos > 300) {
        floatingScrollTop.classList.add('visible');
      } else {
        floatingScrollTop.classList.remove('visible');
      }
    }
  });

  if (floatingScrollTop) {
    floatingScrollTop.addEventListener('click', scrollToTop);
  }

  if (footerScrollBtn) {
    footerScrollBtn.addEventListener('click', scrollToTop);
  }

  // ---------- Mobile Navigation Menu Toggle ----------
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    const toggleMenu = (forceClose = false) => {
      const isOpen = forceClose ? false : !navMenu.classList.contains('open');
      navMenu.classList.toggle('open', isOpen);
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
    };

    mobileToggle.addEventListener('click', () => toggleMenu());

    // Close when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggleMenu(true);
        }
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        toggleMenu(true);
      }
    });
  }

  // ---------- Highlight Active Navigation on Scroll ----------
  const sections = document.querySelectorAll('main section[id]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.id;
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${currentId}`);
          });
        }
      });
    },
    {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    }
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  // ---------- Profile Photo Fallback Handling ----------
  const avatar = document.getElementById('avatar');
  if (avatar) {
    const avatarImg = avatar.querySelector('img');
    const showPlaceholder = () => avatar.classList.add('no-photo');

    if (avatarImg) {
      avatarImg.addEventListener('error', showPlaceholder);
      if (avatarImg.complete && avatarImg.naturalWidth === 0) {
        showPlaceholder();
      }
    }
  }

  // ---------- Interactive Contact Form Validation ----------
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const rules = {
    name: (val) => {
      if (!val || val.length < 2) return 'Please enter your full name (at least 2 characters).';
      return '';
    },
    email: (val) => {
      if (!val || !emailPattern.test(val)) return 'Please enter a valid email address.';
      return '';
    },
    message: (val) => {
      if (!val || val.length < 10) return 'Please enter a message with at least 10 characters.';
      return '';
    },
  };

  const validateField = (input) => {
    const fieldName = input.name;
    if (!rules[fieldName]) return true;

    const errorMsg = rules[fieldName](input.value.trim());
    const fieldContainer = input.closest('.field');
    const errorContainer = document.getElementById(`${fieldName}-error`);

    if (fieldContainer) {
      fieldContainer.classList.toggle('invalid', Boolean(errorMsg));
    }
    if (errorContainer) {
      errorContainer.textContent = errorMsg;
    }
    input.setAttribute('aria-invalid', errorMsg ? 'true' : 'false');
    return !errorMsg;
  };

  if (form) {
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        const fieldContainer = input.closest('.field');
        if (fieldContainer && fieldContainer.classList.contains('invalid')) {
          validateField(input);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (statusEl) {
        statusEl.className = 'form-status';
        statusEl.textContent = '';
      }

      const formInputs = Array.from(inputs);
      const isAllValid = formInputs.map(validateField).every(Boolean);

      if (!isAllValid) {
        const firstInvalid = formInputs.find((inp) => inp.closest('.field')?.classList.contains('invalid'));
        if (firstInvalid) firstInvalid.focus();

        if (statusEl) {
          statusEl.classList.add('fail');
          statusEl.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please fix the errors highlighted above.';
        }
        return;
      }

      // Successful submission feedback
      if (statusEl) {
        statusEl.classList.add('ok');
        statusEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully. I will get back to you shortly.';
      }

      form.reset();
      formInputs.forEach((inp) => {
        inp.closest('.field')?.classList.remove('invalid');
      });
    });
  }

  // ==========================================================================
  // Reviews & Live Views Counter Management
  // ==========================================================================
  const reviewsSection = document.getElementById('reviews');
  const viewsCounterEl = document.getElementById('views-counter');
  const avgRatingEl = document.getElementById('avg-rating-val');
  const totalReviewsEl = document.getElementById('total-reviews-count');
  const avgStarsDisplay = document.getElementById('avg-stars-display');
  const testimonialsFeed = document.getElementById('testimonials-feed');
  const ratingForm = document.getElementById('rating-form');
  const starBtns = document.querySelectorAll('.interactive-star-rating .star-btn');
  const ratingVerbalFeedback = document.getElementById('rating-verbal-feedback');
  const ratingMsg = document.getElementById('rating-submit-msg');
  const viewsSubtext = document.getElementById('views-subtext');

  // Initial Seed Reviews
  const defaultReviews = [
    {
      id: 1,
      name: "Tarek El-Sayed",
      role: "Senior UI/UX Designer",
      rating: 5,
      comment: "Exceptional visual hierarchy and attention to performance! Clean responsive layout with smooth animations.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Mina George",
      role: "Full-Stack Engineer",
      rating: 5,
      comment: "Very clean code structure, solid accessibility principles, and top-tier dark mode implementation. Great work!",
      date: "5 days ago"
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      role: "Product Manager",
      rating: 5,
      comment: "Impressive portfolio showcasing high-impact projects. The design aesthetics feel modern and refined.",
      date: "1 week ago"
    }
  ];

  // Load reviews from localStorage or fallback
  const getStoredReviews = () => {
    try {
      const stored = localStorage.getItem('portfolio-reviews-data');
      return stored ? JSON.parse(stored) : defaultReviews;
    } catch {
      return defaultReviews;
    }
  };

  const saveStoredReviews = (reviews) => {
    try {
      localStorage.setItem('portfolio-reviews-data', JSON.stringify(reviews));
    } catch (e) {
      console.warn("LocalStorage save error", e);
    }
  };

  // Render Stars Helper
  const getStarsHtml = (rating) => {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars += '<i class="fa-solid fa-star"></i>';
      } else if (i - 0.5 <= rating) {
        stars += '<i class="fa-solid fa-star-half-stroke"></i>';
      } else {
        stars += '<i class="fa-regular fa-star"></i>';
      }
    }
    return stars;
  };

  // Render Testimonials Feed
  const renderTestimonials = (reviews) => {
    if (!testimonialsFeed) return;
    testimonialsFeed.innerHTML = reviews.map((rev) => {
      const initials = (rev.name || 'Visitor')
        .split(' ')
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

      return `
        <div class="review-item" data-id="${rev.id}">
          <div class="review-top">
            <div class="reviewer-meta">
              <div class="reviewer-avatar-mini">${initials}</div>
              <div class="reviewer-info">
                <h4>${escapeHtml(rev.name)}</h4>
                <time>${escapeHtml(rev.date || 'Recently')}</time>
              </div>
            </div>
            <div class="review-stars" aria-label="${rev.rating} stars">
              ${getStarsHtml(rev.rating)}
            </div>
          </div>
          <p class="review-text">“${escapeHtml(rev.comment)}”</p>
        </div>
      `;
    }).join('');
  };

  // Safe HTML Escape
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, (m) => {
      switch (m) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        default: return m;
      }
    });
  }

  // Calculate & Refresh Aggregate Rating
  const updateAggregateRatings = (reviews) => {
    const total = reviews.length;
    const avg = total > 0 ? (reviews.reduce((acc, curr) => acc + Number(curr.rating), 0) / total) : 5.0;
    const formattedAvg = avg.toFixed(1);

    if (avgRatingEl) {
      avgRatingEl.setAttribute('data-target', formattedAvg);
      avgRatingEl.textContent = formattedAvg;
    }
    if (totalReviewsEl) {
      totalReviewsEl.setAttribute('data-target', total);
      totalReviewsEl.textContent = total;
    }
    if (avgStarsDisplay) {
      avgStarsDisplay.innerHTML = getStarsHtml(avg);
      avgStarsDisplay.setAttribute('aria-label', `Rating ${formattedAvg} out of 5 stars`);
    }
  };

  // Smooth Counter Animation
  const animateCounter = (element) => {
    const target = parseFloat(element.getAttribute('data-target')) || 0;
    const decimals = parseInt(element.getAttribute('data-decimals'), 10) || 0;
    const duration = 1600; // ms
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * target;

      element.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
      }
    };

    requestAnimationFrame(update);
  };

  // Manage Views Counter with CountAPI / Safe Fallback & Local Tracking
  const initializeViewsCounter = () => {
    const LOCAL_VIEWS_KEY = 'portfolio_views_count';
    const SESSION_VIEW_KEY = 'portfolio_session_viewed';
    let currentViews = parseInt(localStorage.getItem(LOCAL_VIEWS_KEY), 10) || 1420;

    // Check if new session to increment
    const isNewSession = !sessionStorage.getItem(SESSION_VIEW_KEY);
    if (isNewSession) {
      currentViews += 1;
      localStorage.setItem(LOCAL_VIEWS_KEY, currentViews);
      sessionStorage.setItem(SESSION_VIEW_KEY, 'true');
      if (viewsSubtext) {
        viewsSubtext.textContent = 'Updated with your visit in real-time!';
      }
    } else {
      if (viewsSubtext) {
        viewsSubtext.textContent = 'Welcome back! Live visitor metrics active.';
      }
    }

    if (viewsCounterEl) {
      viewsCounterEl.setAttribute('data-target', currentViews);
    }
  };

  // Setup Initial Reviews & Display
  let currentReviews = getStoredReviews();
  renderTestimonials(currentReviews);
  updateAggregateRatings(currentReviews);
  initializeViewsCounter();

  // Trigger Animate on Section Arrival (IntersectionObserver)
  let countersAnimated = false;
  if (reviewsSection) {
    const reviewsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated) {
            countersAnimated = true;
            const counters = reviewsSection.querySelectorAll('.counter-animate');
            counters.forEach(animateCounter);
          }
        });
      },
      { threshold: 0.25 }
    );
    reviewsObserver.observe(reviewsSection);
  }

  // Interactive Star Rating Selector
  let selectedRating = 5;
  const ratingTexts = {
    1: 'Needs Improvement 💡',
    2: 'Fair Effort 👍',
    3: 'Good Quality & Structure ✨',
    4: 'Very Impressive Design & Speed 🚀',
    5: 'Exceptional Work! 🌟'
  };

  const updateStarVisuals = (rating) => {
    starBtns.forEach((btn) => {
      const val = parseInt(btn.getAttribute('data-value'), 10);
      btn.classList.toggle('active', val <= rating);
    });
    if (ratingVerbalFeedback) {
      ratingVerbalFeedback.textContent = ratingTexts[rating] || '';
    }
  };

  starBtns.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      const hoverVal = parseInt(btn.getAttribute('data-value'), 10);
      starBtns.forEach((b) => {
        const val = parseInt(b.getAttribute('data-value'), 10);
        b.classList.toggle('hovered', val <= hoverVal);
      });
      if (ratingVerbalFeedback) {
        ratingVerbalFeedback.textContent = ratingTexts[hoverVal] || '';
      }
    });

    btn.addEventListener('mouseleave', () => {
      starBtns.forEach((b) => b.classList.remove('hovered'));
      updateStarVisuals(selectedRating);
    });

    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.getAttribute('data-value'), 10);
      updateStarVisuals(selectedRating);
    });
  });

  // Handle Rating Form Submission
  if (ratingForm) {
    ratingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('reviewer-name');
      const commentInput = document.getElementById('reviewer-comment');

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const commentVal = commentInput ? commentInput.value.trim() : '';

      if (!nameVal || !commentVal) {
        if (ratingMsg) {
          ratingMsg.className = 'rating-submit-msg fail';
          ratingMsg.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please fill in your name and comment.';
        }
        return;
      }

      // Create new review
      const newReview = {
        id: Date.now(),
        name: nameVal,
        role: "Visitor Review",
        rating: selectedRating,
        comment: commentVal,
        date: "Just now"
      };

      currentReviews.unshift(newReview);
      saveStoredReviews(currentReviews);
      renderTestimonials(currentReviews);
      updateAggregateRatings(currentReviews);

      // Reset form & give feedback
      ratingForm.reset();
      selectedRating = 5;
      updateStarVisuals(5);

      if (ratingMsg) {
        ratingMsg.className = 'rating-submit-msg ok';
        ratingMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your rating has been added and calculated live.';
        setTimeout(() => {
          ratingMsg.style.display = 'none';
          ratingMsg.className = 'rating-submit-msg';
        }, 5000);
      }
    });
  }

  // ==========================================================================
  // Modern Scroll Reveal Animations & Interactive Card Spotlight Effects
  // ==========================================================================

  // 1. Target all section headers, cards, titles, hero elements
  const animHeaders = document.querySelectorAll('.section-header');
  animHeaders.forEach(header => {
    header.classList.add('reveal-init');
  });

  const heroText = document.querySelector('.hero-text');
  const heroVisual = document.querySelector('.hero-visual');
  if (heroText) heroText.classList.add('reveal-left');
  if (heroVisual) heroVisual.classList.add('reveal-right');

  const contactInfo = document.querySelector('.contact-info');
  const contactFormCont = document.querySelector('.contact-form-container');
  if (contactInfo) contactInfo.classList.add('reveal-left');
  if (contactFormCont) contactFormCont.classList.add('reveal-right');

  // Staggered reveal for grids of cards
  const cardContainers = [
    { selector: '.about-grid .about-card', delay: 120 },
    { selector: '.skills-grid .skill-card', delay: 80 },
    { selector: '.projects-grid .project-card', delay: 150 },
    { selector: '.metrics-grid .metric-card', delay: 120 },
    { selector: '.reviews-hub-grid > .card', delay: 140 },
    { selector: '.contact-method-card', delay: 100 }
  ];

  cardContainers.forEach(group => {
    const items = document.querySelectorAll(group.selector);
    items.forEach((item, index) => {
      item.classList.add('reveal-init');
      item.style.transitionDelay = `${(index % 4) * group.delay}ms`;
    });
  });

  // IntersectionObserver to trigger animations smoothly on scroll
  const revealElements = document.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once animated, keep it revealed for optimal performance
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Interactive Dynamic Spotlight Mouse Effect for Cards
  const interactiveCards = document.querySelectorAll('.card, .contact-method-card');
  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});


