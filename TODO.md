# TODO: Personalize Your Portfolio

Before deploying your portfolio, complete these customization steps:

## ✅ Required Updates

### 1. Personal Links (index.html)

- [ ] **Line 23 & 58**: Update LinkedIn URL
  ```html
  Current: https://www.linkedin.com/in/TODO
  Update to: https://www.linkedin.com/in/your-username
  ```

- [ ] **Line 24**: Update Twitter/X URL (or remove if not applicable)
  ```html
  Current: https://twitter.com/TODO
  Update to: https://twitter.com/your-handle
  ```

- [ ] **Line 59**: Update email address
  ```html
  Current: TODO@domain.example
  Update to: your.email@domain.com
  ```

### 2. Contact Form (index.html)

- [ ] **Line 129**: Set up Formspree and update form action
  1. Visit https://formspree.io and create a free account
  2. Create a new form
  3. Copy your form endpoint
  ```html
  Current: https://formspree.io/f/TODO
  Update to: https://formspree.io/f/YOUR_FORM_ID
  ```

### 3. Work Experience (index.html)

- [ ] **Line 82**: Update company name
  ```html
  Current: TODO Company
  Update to: Your Company Name
  ```

- [ ] Add more experience items or update the existing ones with your actual work history

### 4. Projects (script.js)

- [ ] Update the projects array (lines 39-86) with your real projects
- [ ] Update GitHub repository URLs
- [ ] Add live demo links where applicable
- [ ] Adjust tags and categories as needed

### 5. Profile Image

- [ ] Replace `assets/profile.jpg` with your professional photo
  - Recommended: 260x260 pixels (square)
  - Format: JPG or PNG
  - Professional headshot or avatar

### 6. Social Preview Image

- [ ] Replace `assets/og-preview.png` with a custom preview
  - Size: 1200x630 pixels
  - This appears when sharing on social media
  - Can use tools like Canva or Figma to create one

## 🎨 Optional Customizations

### About Section (index.html, lines 68-74)
- [ ] Update the "About Me" text to reflect your story and interests

### Skills Section (index.html, lines 105-113)
- [ ] Add or remove skills based on your expertise
- [ ] Keep skills relevant to your target role

### Experience Section (index.html, lines 77-101)
- [ ] Add all relevant work experience
- [ ] Include achievements and metrics where possible

### Colors & Theme (styles.css)
- [ ] Customize color scheme by updating CSS variables (lines 1-15)
- [ ] Consider using your personal brand colors

### Meta Description (index.html, line 6)
- [ ] Update the description to better reflect your unique value proposition

## 🚀 Pre-Deployment Checklist

- [ ] All TODO placeholders replaced
- [ ] Test contact form submission
- [ ] Verify all links work
- [ ] Check responsiveness on mobile devices
- [ ] Test dark mode toggle
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Test accessibility (https://wave.webaim.org/)
- [ ] Check cross-browser compatibility

## 📊 Testing Your Changes

1. Open `index.html` in a browser
2. Click all navigation links
3. Test the theme toggle
4. Filter projects by category
5. Try submitting the contact form
6. Test on mobile (or use browser dev tools)
7. Verify all social links open correctly

## 🌐 Deploy When Ready

Once all TODOs are complete:

```bash
git add .
git commit -m "Personalize portfolio website"
git push origin main
```

Then enable GitHub Pages in repository settings!

---

Need help? Check the README.md for detailed instructions.
