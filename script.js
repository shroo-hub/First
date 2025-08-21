document.addEventListener('DOMContentLoaded', () => {
  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in-on-scroll, .section-title');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  fadeEls.forEach(el => observer.observe(el));

  // Fill textarea if service is passed
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  if (service) {
    const reasonTextarea = document.querySelector('textarea');
    if (reasonTextarea) {
      reasonTextarea.value = `Service Requested: ${service.replace(/-/g, ' ')}`;
    }
  }

  // Handle hash scroll (e.g., #certified-true-copies)
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});
