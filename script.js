// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update button text
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌓';
});

// Set initial button text
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌓';

// Projects Data
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with cart, payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'frontend',
    github: 'https://github.com/MutshidziPhaswana/ecommerce-platform',
    demo: 'https://demo.example.com'
  },
  {
    title: 'REST API Boilerplate',
    description: 'Scalable Node.js REST API with authentication, rate limiting, and documentation.',
    tags: ['Node.js', 'Express', 'JWT', 'Swagger'],
    category: 'backend',
    github: 'https://github.com/MutshidziPhaswana/rest-api-boilerplate',
    demo: null
  },
  {
    title: 'Task Management App',
    description: 'Kanban-style task manager with drag-and-drop, real-time updates.',
    tags: ['TypeScript', 'React', 'Firebase'],
    category: 'frontend',
    github: 'https://github.com/MutshidziPhaswana/task-manager',
    demo: 'https://tasks.example.com'
  },
  {
    title: 'Code Snippet Manager',
    description: 'CLI tool to save, search, and organize code snippets locally.',
    tags: ['Node.js', 'Commander.js', 'SQLite'],
    category: 'tooling',
    github: 'https://github.com/MutshidziPhaswana/snippet-manager',
    demo: null
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather app with geolocation, forecasts, and responsive design.',
    tags: ['JavaScript', 'OpenWeather API', 'CSS Grid'],
    category: 'frontend',
    github: 'https://github.com/MutshidziPhaswana/weather-dashboard',
    demo: 'https://weather.example.com'
  },
  {
    title: 'GraphQL Server',
    description: 'GraphQL API with subscriptions, DataLoader, and authentication.',
    tags: ['GraphQL', 'Apollo', 'MongoDB'],
    category: 'backend',
    github: 'https://github.com/MutshidziPhaswana/graphql-server',
    demo: null
  }
];

// Render Projects
const projectGrid = document.getElementById('projectGrid');

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.setAttribute('data-category', project.category);
  
  const tags = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  
  const links = [];
  if (project.github) {
    links.push(`<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`);
  }
  if (project.demo) {
    links.push(`<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>`);
  }
  
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-tags">${tags}</div>
    <div class="project-links">${links.join('')}</div>
  `;
  
  return card;
}

function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  filteredProjects.forEach(project => {
    projectGrid.appendChild(createProjectCard(project));
  });
}

// Initial render
renderProjects();

// Filter Projects
const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filter projects
    const filter = button.getAttribute('data-filter');
    renderProjects(filter);
  });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="loading"></span> Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    
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
        formStatus.classList.add('success');
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
      formStatus.classList.add('error');
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

// Smooth Scroll Enhancement (for browsers that don't support scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, null, href);
      }
    }
  });
});

// Intersection Observer for Fade-in Animations (optional enhancement)
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe panels
  document.querySelectorAll('.panel').forEach(panel => {
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(20px)';
    panel.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(panel);
  });
}

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
  // Press 'T' to toggle theme
  if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
    const activeElement = document.activeElement;
    if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
      themeToggle.click();
    }
  }
});

// Console Easter Egg
console.log(`
%c👋 Hey there!

%cThanks for checking out the console. 
If you're curious about the code, feel free to explore the repository!

%c🔗 GitHub: https://github.com/MutshidziPhaswana

`, 
'font-size: 20px; font-weight: bold;',
'font-size: 14px;',
'font-size: 14px; color: #2563eb;'
);
