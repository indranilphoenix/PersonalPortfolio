# .NET Developer Portfolio

A modern, responsive portfolio website built with Angular showcasing expertise in .NET development, cloud technologies, and modern web development practices.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with proper accessibility features

## Technologies Used

- **Frontend**: Angular 17+ with standalone components
- **Styling**: SCSS with CSS custom properties
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Build**: Angular CLI
- **Deployment Ready**: Configured for various hosting platforms

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/          # Landing page with hero section
│   │   │   ├── about/         # About page with experience timeline
│   │   │   ├── projects/      # Projects showcase with filtering
│   │   │   └── contact/       # Contact form and information
│   │   ├── app.component.*    # Root component with navigation
│   │   └── app.routes.ts      # Application routing
│   ├── styles.scss           # Global styles and CSS variables
│   └── index.html           # Main HTML template
├── package.json             # Dependencies and scripts
├── angular.json            # Angular configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (optional, but recommended)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/app/components/home/home.component.ts**
   - Update `name` property
   - Modify skills and featured projects

2. **src/app/components/about/about.component.ts**
   - Update experience, skills, certifications
   - Modify personal interests

3. **src/app/components/projects/projects.component.ts**
   - Add your actual projects
   - Update GitHub and demo URLs

4. **src/app/components/contact/contact.component.ts**
   - Update contact information
   - Modify social media links

5. **src/app/app.component.ts**
   - Update developer name in navigation and footer

### Styling

The portfolio uses CSS custom properties for easy theming. Main variables are defined in `src/styles.scss`:

- Colors: Primary, secondary, and neutral color palette
- Typography: Font sizes and weights
- Spacing: Consistent spacing scale
- Shadows and animations

### Adding New Sections

To add new sections or pages:

1. Create a new component:
```bash
ng generate component components/new-section
```

2. Add the route to `src/app/app.routes.ts`

3. Update navigation in `src/app/app.component.ts`

## Build and Deployment

### Production Build

```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

#### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/your-repo-name/
```

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:prod`
3. Set publish directory: `dist/portfolio`

#### Azure Static Web Apps
1. Use the Azure Static Web Apps extension for VS Code
2. Or deploy via GitHub Actions with the provided workflow

#### Vercel
```bash
npm install -g vercel
vercel
```

## Performance Optimization

The portfolio is optimized for performance with:

- Lazy loading for route components
- Optimized images and assets
- Minimal bundle size with tree shaking
- Efficient CSS with modern techniques

## SEO and Analytics

To improve SEO:

1. Update meta tags in `src/index.html`
2. Add structured data for better search results
3. Consider adding Google Analytics or similar

## Browser Support

The portfolio supports all modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback about this portfolio template, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Note**: Remember to update all placeholder content with your actual information before deploying your portfolio!