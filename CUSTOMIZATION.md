# Portfolio Customization Guide

## Quick Customization Checklist

### 1. Personal Information (Required)
- [ ] Update your name in all component files
- [ ] Replace email address and contact information
- [ ] Update social media links (LinkedIn, GitHub, etc.)
- [ ] Modify the page title in `src/index.html`

### 2. Professional Experience
- [ ] Update job titles, companies, and dates in `about.component.ts`
- [ ] Modify skill levels and technologies
- [ ] Add your actual certifications
- [ ] Update years of experience

### 3. Projects Portfolio
- [ ] Replace sample projects with your actual work
- [ ] Add real GitHub repository URLs
- [ ] Include live demo links
- [ ] Update project descriptions and technologies used

### 4. Visual Assets
- [ ] Add your professional headshot to `src/assets/`
- [ ] Replace favicon with your personal branding
- [ ] Add project screenshots
- [ ] Update color scheme if desired

### 5. Content Updates

#### src/app/app.component.ts
```typescript
developerName = 'Indranil Bera';
```

#### src/app/components/home/home.component.ts
```typescript
name = 'Indranil Bera';
```

#### src/app/components/about/about.component.ts
```typescript
yearsOfExperience = 8;

experience = [
  {
    position: 'Your Job Title',
    company: 'Your Company',
    duration: '2020 - Present',
    description: 'Your role description...',
    technologies: ['Your', 'Tech', 'Stack']
  }
  // Add more positions
];

// Update skill levels based on your expertise
// Modify certifications with your actual credentials
```

#### src/app/components/projects/projects.component.ts
```typescript
// Replace all sample projects with your actual work
projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief project description...',
    technologies: ['Your', 'Tech', 'Stack'],
    demoUrl: 'https://your-live-demo.com',
    githubUrl: 'https://github.com/yourusername/project',
    category: 'Web App',
    featured: true
  }
  // Add your projects
];
```

#### src/app/components/contact/contact.component.ts
```typescript
// Update contact information
contactInfo = {
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country'
};

// Update social media links
socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin',
    url: 'https://linkedin.com/in/johndoe'
  },
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/johndoe'
  }
  // Update with your actual profiles
];
```

### 6. SEO Optimization

#### src/index.html
```html
<!-- Update these meta tags -->
<title>John Doe - .NET Developer Portfolio</title>
<meta name="description" content="Professional portfolio of John Doe, a .NET developer specializing in Angular, Azure, Docker, and modern web technologies">
<meta name="keywords" content="John Doe, .NET Developer, Angular, Azure, Full Stack Developer">

<!-- Update Open Graph tags for social sharing -->
<meta property="og:title" content="John Doe - .NET Developer">
<meta property="og:description" content="Professional .NET developer with expertise in Angular, Azure, and cloud technologies">
<meta property="og:url" content="https://yourportfolio.com">
<meta property="og:image" content="https://yourportfolio.com/assets/profile-social.jpg">
```

### 7. Color Scheme Customization

If you want to change the color scheme, update these CSS variables in `src/styles.scss`:

```scss
:root {
  /* Update primary colors */
  --primary-color: #your-color;
  --primary-light: #your-light-color;
  --primary-dark: #your-dark-color;
  
  /* Update secondary colors */
  --secondary-color: #your-secondary;
  /* ... other colors */
}
```

### 8. Additional Sections

To add new sections (e.g., Blog, Testimonials):

1. Generate a new component:
```bash
ng generate component components/blog
```

2. Add the route to `src/app/app.routes.ts`:
```typescript
{ path: 'blog', loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent) }
```

3. Update navigation in `src/app/app.component.ts`

### 9. Form Integration

To make the contact form functional:

1. **Using EmailJS (Recommended for static hosting):**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Install EmailJS: `npm install @emailjs/browser`
   - Update the form submission in `contact.component.ts`

2. **Using a backend API:**
   - Create an API endpoint for form submission
   - Update the `onSubmit()` method to call your API

3. **Using Netlify Forms (for Netlify hosting):**
   - Add `netlify` attribute to the form
   - Netlify will handle form submissions automatically

### 10. Analytics Integration

Add Google Analytics or similar:

1. Create a Google Analytics account
2. Add the tracking script to `src/index.html`
3. Consider using GTM (Google Tag Manager) for more advanced tracking

### 11. Performance Optimization

- Optimize images in `src/assets/`
- Use WebP format for better compression
- Minimize and compress CSS/JS files
- Enable gzip compression on your hosting platform

### 12. Accessibility Improvements

- Add proper alt text to all images
- Ensure proper color contrast
- Test with screen readers
- Add proper ARIA labels where needed

### Testing Your Changes

Before deploying:

1. Run the development server:
```bash
npm start
```

2. Test on different screen sizes
3. Check all links and forms work
4. Validate HTML and CSS
5. Test performance with Lighthouse

### Deployment

Once customized, deploy using your preferred method (see DEPLOYMENT.md for options):

- Netlify (recommended for ease)
- Vercel
- GitHub Pages
- Azure Static Web Apps
- Firebase Hosting

Remember to update all placeholder content before going live!