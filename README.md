# Theta Tech Website

A modern, responsive website for Theta Tech - a startup building websites and mobile apps for all types of businesses.

## 🌟 Features

- **Modern Dark Design** - Professional dark theme with blue, purple, and soft gray gradients
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - GSAP-inspired scroll animations using Intersection Observer
- **Interactive Components** - Slide-in contact form, device showcases, and hover effects
- **Performance Optimized** - Built with Vite and optimized for fast loading
- **TypeScript Support** - Fully typed for better development experience

## 🚀 Live Demo

Visit the live website: [Theta Tech Website](https://your-deployment-url.com)

## 📸 Screenshots

*Add screenshots of your website here*

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS v4.0
- **Build Tool:** Vite
- **UI Components:** Shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Animations:** Custom CSS animations with Intersection Observer

## 🏗️ Project Structure

```
├── App.tsx                    # Main application component
├── components/
│   ├── ContactForm.tsx        # Slide-in contact form
│   ├── DeviceShowcase.tsx     # Device mockup section
│   ├── Footer.tsx             # Footer with call-to-action
│   ├── Hero.tsx               # Hero section with main CTA
│   ├── IntroVideo.tsx         # Video introduction section
│   ├── Navigation.tsx         # Top navigation bar
│   ├── ProjectsShowcase.tsx   # 5-project grid showcase
│   ├── Testimonials.tsx       # Customer testimonials slider
│   ├── WhyChooseUs.tsx        # Services and benefits section
│   └── ui/                    # Shadcn/ui components
├── styles/
│   └── globals.css            # Global styles and theme
└── guidelines/
    └── Guidelines.md          # Development guidelines
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdulrahman1808/ThetaTech.git
   cd ThetaTech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the website.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

## 🎨 Design System

### Color Palette
- **Primary Gradients:** Deep blue to purple (#1e1b4b → #4338ca → #7c3aed)
- **Accent Colors:** Blue (#3b82f6), Purple (#8b5cf6)
- **Background:** Dark navy (#0f0f23)
- **Text:** Light gray (#e2e8f0)

### Typography
- **Base Font Size:** 14px
- **Headings:** Medium weight (500)
- **Body Text:** Normal weight (400)

### Animations
- **Scroll-triggered animations** using Intersection Observer
- **Smooth transitions** with cubic-bezier timing
- **Hover effects** with transform and scale
- **Staggered animations** for list items

## 📱 Responsive Design

The website is designed with a mobile-first approach and includes:

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+
- **Large Desktop:** 1440px+

## 🔧 Development

### Adding New Components

1. Create your component in the `components/` directory
2. Import it in `App.tsx` or the relevant parent component
3. Follow the existing code style and TypeScript patterns

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Avoid custom font sizes, weights, or line-heights unless specifically needed
- Use the predefined color variables from `globals.css`
- Follow the dark theme design system

### Animation Guidelines

- Use `data-animate` attributes for scroll animations
- Keep animations under 500ms for micro-interactions
- Support `prefers-reduced-motion` for accessibility

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Use GitHub Actions to deploy the dist folder
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Theta Tech**
- Website: [Your Website URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- GitHub: [@Abdulrahman1808](https://github.com/Abdulrahman1808)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon set
- [Vite](https://vitejs.dev/) for the fast build tool

---

**Built with ❤️ by Theta Tech**"# Updated: $(date)" 
"# Test deployment $(date)" 
