// Toggle mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  const toggle = document.querySelector('.menu-toggle');
  
  nav.classList.toggle('active');
  toggle.classList.toggle('open');
}

// Close menu when clicking on a link (mobile)
document.addEventListener('DOMContentLoaded', function() {
  // Close mobile menu when clicking navigation links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('nav-menu');
      const toggle = document.querySelector('.menu-toggle');
      
      nav.classList.remove('active');
      toggle.classList.remove('open');
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav-menu');
    const toggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');
    
    // Check if click is outside header and menu is open
    if (!header.contains(event.target) && nav.classList.contains('active')) {
      nav.classList.remove('active');
      toggle.classList.remove('open');
    }
  });

  // Handle window resize - close mobile menu on larger screens
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      const nav = document.getElementById('nav-menu');
      const toggle = document.querySelector('.menu-toggle');
      
      nav.classList.remove('active');
      toggle.classList.remove('open');
    }
  });
});

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  const headerHeight = document.querySelector('header').offsetHeight;
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight - 50;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});