// Main JavaScript for Priyanka Pahari’s site
// Handles smooth scrolling and simple form submission feedback.

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Form submission handler
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', evt => {
      evt.preventDefault();
      // In a production site this would send data to a backend or third‑party
      // service (e.g. Formspree). Here we simply clear the form and show a
      // confirmation alert.
      alert('Thank you for reaching out! We will get back to you soon.');
      form.reset();
    });
  }

  // Update the footer year automatically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});