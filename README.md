# Mutshidzi Phaswana - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and experience.

## 🌟 Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Dynamic Projects**: Filter projects by category (Frontend, Backend, Tooling)
- **Contact Form**: Integrated with Formspree for easy message handling
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Minimal dependencies, optimized assets

## 🚀 Quick Start

This is a static website - no build process required!

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/MutshidziPhaswana/MutshidziPhaswana.github.io.git
   cd MutshidziPhaswana.github.io
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (if you have npx)
   npx serve
   
   # Using VS Code Live Server extension
   # Right-click index.html and select "Open with Live Server"
   ```

3. Visit `http://localhost:8000` in your browser

## ⚙️ Configuration

### Update Personal Information

Edit `index.html` and replace the TODO placeholders:

1. **LinkedIn URL** (line 23, 58): Replace `https://www.linkedin.com/in/TODO` with your LinkedIn profile
2. **Twitter/X URL** (line 24): Replace `https://twitter.com/TODO` with your Twitter/X profile
3. **Email** (line 59): Replace `TODO@domain.example` with your email address
4. **Company Name** (line 82): Replace `TODO Company` with your current company
5. **Formspree Form** (line 129): Replace `https://formspree.io/f/TODO` with your Formspree endpoint

### Set Up Contact Form

1. Go to [Formspree.io](https://formspree.io/) and create a free account
2. Create a new form and copy the form endpoint
3. Replace the `action` attribute in the contact form (line 129) with your endpoint

### Customize Projects

Edit `script.js` to update the projects array with your own projects:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of the project',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'frontend', // or 'backend', 'tooling'
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo.com' // or null if no demo
  },
  // Add more projects...
];
```

### Update Profile Image

Replace `assets/profile.jpg` with your own photo:
- Recommended size: 260x260 pixels (or larger, square aspect ratio)
- Format: JPG, PNG, or WebP
- Keep the filename as `profile.jpg` or update the reference in `index.html`

### Update OG Image

Replace `assets/og-preview.png` with a custom social media preview image:
- Recommended size: 1200x630 pixels
- This appears when sharing your site on social media

## 📁 Project Structure

```
MutshidziPhaswana.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styling and themes
├── script.js           # Interactive functionality
├── assets/             # Images and media
│   ├── profile.jpg     # Profile photo
│   └── og-preview.png  # Social media preview
└── README.md           # This file
```

## 🎨 Customization

### Colors

Edit CSS custom properties in `styles.css` (lines 1-15) to change the color scheme:

```css
:root {
  --clr-accent: #2563eb;        /* Primary accent color */
  --clr-accent-hover: #1d4ed8;  /* Hover state */
  /* ... more colors */
}
```

### Font

Update the font family in `styles.css`:

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", ...;
}
```

### Sections

You can add, remove, or reorder sections in `index.html`. Just make sure to:
1. Update the navigation links
2. Keep consistent IDs for smooth scrolling
3. Maintain the `.panel` class for consistent styling

## 🌐 Deployment

### GitHub Pages (Recommended)

Your site is already configured for GitHub Pages!

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

3. Your site will be live at `https://MutshidziPhaswana.github.io`

### Other Platforms

You can also deploy to:
- **Netlify**: Drag and drop the folder or connect via Git
- **Vercel**: Import the repository
- **Cloudflare Pages**: Connect your GitHub repository

## 🔧 Features & Functionality

### Theme Toggle
- Click the theme toggle button (🌓) in the navigation
- Keyboard shortcut: Press `T` to toggle theme
- Preference is saved to localStorage

### Project Filtering
- Click category buttons to filter projects
- All projects are rendered dynamically from JavaScript

### Contact Form
- Form validation included
- Submits via Formspree
- Success/error messages displayed inline
- Form resets after successful submission

### Smooth Scrolling
- Click navigation links for smooth scrolling
- URL updates without page jump
- Falls back gracefully in older browsers

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [@MutshidziPhaswana](https://github.com/MutshidziPhaswana)

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript.
