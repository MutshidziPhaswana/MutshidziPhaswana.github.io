// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
// Tailwind uses the 'dark' class on the html element
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const currentTheme = savedTheme || systemTheme;

if (currentTheme === 'dark') {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

function updateThemeIcon(isDark) {
  themeToggle.innerHTML = isDark ? '<span class="text-xl">☀️</span>' : '<span class="text-xl">🌓</span>';
}

updateThemeIcon(currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status text-center text-sm mt-4 text-slate-500 dark:text-slate-400';
    
    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        formStatus.className = 'form-status text-center text-sm mt-4 text-green-600 dark:text-green-400 font-medium';
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
      formStatus.className = 'form-status text-center text-sm mt-4 text-red-600 dark:text-red-400 font-medium';
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}

// Update Footer Year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Console Easter Egg
console.log(`
%c👋 Hey there!

%cThanks for checking out the console. 
If you're curious about the code, feel free to explore the repository!

%c🔗 GitHub: https://github.com/MutshidziPhaswana

`, 
'font-size: 20px; font-weight: bold;',
'font-size: 14px;',
'font-size: 14px; color: #3b82f6;'
);
