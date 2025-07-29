# Your DRC - Startup Directory Platform

A modern startup directory platform built with Next.js 15 and Sanity CMS, designed to showcase and discover innovative startups with cutting-edge React 19 features.

## 🚀 Features

- **Startup Listings**: Browse and discover new startups with detailed information
- **Author Profiles**: Comprehensive author management system
- **Content Management**: Powered by Sanity CMS for easy content updates
- **Rich Text Editing**: Markdown editor with live preview using EasyMDE
- **Visual Editing**: Real-time preview with Sanity Visual Editing
- **Responsive Design**: Optimized for all devices with Tailwind CSS 4
- **SEO Friendly**: Built with Next.js 15 for optimal search engine visibility
- **Error Tracking**: Integrated Sentry for production monitoring
- **Modern UI**: Radix UI components with smooth animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.3.5 (React 19.1.0)
- **CMS**: Sanity 3.22.0 with Visual Editing
- **Authentication**: NextAuth.js 5.0 (Beta)
- **Styling**: Tailwind CSS 4.1.11 with Typography plugin
- **TypeScript**: Full type safety with TS 5+
- **Icons**: Lucide React 0.525.0 + Radix Icons
- **Rich Text**: Portable Text, Markdown support & MD Editor
- **UI Components**: Radix UI primitives with CVA
- **Monitoring**: Sentry for error tracking
- **Code Highlighting**: Sanity Code Input plugin

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm 10.5.2+ package manager (as specified in packageManager)
- A Sanity account and project
- A Sentry account (optional, for error tracking)
- Basic knowledge of React 19 and Next.js 15

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your_drc.git
   cd your_drc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Note: This project uses React 19 and Next.js 15 with specific version overrides defined in package.json.

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   
   # NextAuth.js Configuration
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # Sentry Configuration (Optional)
   SENTRY_DSN=your_sentry_dsn
   SENTRY_ORG=your_sentry_org
   SENTRY_PROJECT=your_sentry_project
   
   # Sanity Visual Editing
   SANITY_REVALIDATE_SECRET=your_revalidate_secret
   ```

4. **Configure Sanity**
   
   Update your `sanity.config.ts` with your project details:
   ```typescript
   export default defineConfig({
     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
     // ... other config
   })
   ```

## 🚀 Getting Started

1. **Generate TypeScript types**
   ```bash
   npm run typegen
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   
   This will automatically run type generation before starting the dev server.

3. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📁 Project Structure

```
your_drc/
├── app/                    # Next.js 15 app directory
│   ├── studio/            # Sanity Studio pages
│   ├── api/               # API routes
│   └── ...                # Other app pages
├── sanity/                # Sanity configuration
│   ├── schemaTypes/       # Content schemas
│   │   ├── author.ts      # Author schema
│   │   ├── startup.ts     # Startup schema
│   │   └── index.ts       # Schema exports
│   ├── structure.ts       # Studio structure
│   └── extract.json       # Generated type definitions
├── components/            # React 19 components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature components
├── lib/                   # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
├── sanity.config.ts      # Sanity configuration
├── tailwind.config.js    # Tailwind 4+ configuration
├── next.config.js        # Next.js 15 configuration
└── sentry.client.config.js # Sentry configuration
```

## 📊 Content Schemas

### Author Schema
- **id**: Unique identifier
- **name**: Author's display name
- **username**: Unique username
- **email**: Contact email
- **image**: Profile picture URL
- **bio**: Author biography (supports rich text)

### Startup Schema
- **title**: Startup name
- **slug**: URL-friendly identifier
- **author**: Reference to author
- **views**: View count
- **description**: Brief description
- **category**: Startup category
- **image**: Startup logo/image
- **pitch**: Detailed startup pitch (rich text)
- **code**: Code snippets (with syntax highlighting)

## 🎨 Customization

### Adding New Content Types

1. Create a new schema file in `sanity/schemaTypes/`
2. Export it from `sanity/schemaTypes/index.ts`
3. Add it to the types array in the schema configuration
4. Run `npm run typegen` to generate TypeScript types

### Styling with Tailwind CSS 4

The project uses the latest Tailwind CSS 4 with:
- **New CSS-first configuration**
- **Built-in container queries**
- **Enhanced typography plugin**
- **Custom animations with tailwindcss-animate**

Example component styling:
```tsx
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

### UI Components

Built with Radix UI primitives:
- **Avatar**: User profile pictures with fallbacks
- **Toast**: Notification system
- **Icons**: Comprehensive icon library

## 🔧 Scripts

```bash
# Development
npm run dev          # Start development server (with auto typegen)
npm run build        # Build for production (with auto typegen)
npm run start        # Start production server
npm run lint         # Run ESLint

# Type Generation
npm run typegen      # Generate TypeScript types from Sanity schemas

# Sanity Studio
# Access via /studio route in your app
```

## 📝 Content Management

### Rich Text Editing

The platform supports multiple rich text formats:

1. **Portable Text**: Sanity's structured rich text format
2. **Markdown**: Full markdown support with live preview using EasyMDE
3. **Code Blocks**: Syntax highlighting for multiple languages

### Adding New Startups

1. Navigate to `/studio` in your browser
2. Click "Startup" in the content menu
3. Fill in the required fields:
   - Title (required)
   - Category (required)
   - Image URL (required)
   - Author reference
   - Description and pitch (supports rich text)
   - Code snippets (optional)

### Visual Editing

Enable real-time preview editing:
1. Set up the preview URL secret in your environment
2. Use the visual editing toolbar in Sanity Studio
3. See changes instantly in your Next.js app

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Configure Sentry integration (optional)
5. Deploy automatically on push

### Environment Variables for Production

Make sure to set all required environment variables:

```env
# Required
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Optional but recommended
SANITY_API_TOKEN=
SENTRY_DSN=
SANITY_REVALIDATE_SECRET=
```

### Other Platforms

The app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Render

## 🔒 Security & Performance

### NextAuth.js 5.0 Beta

This project uses the latest NextAuth.js beta with:
- Enhanced security features
- Improved TypeScript support
- Modern authentication patterns

### Sentry Integration

Comprehensive error tracking and performance monitoring:
- Automatic error capture
- Performance metrics
- User session tracking
- Source map support

## 🐛 Troubleshooting

### Common Issues

**React 19 Compatibility**
- Some packages may not yet support React 19
- Check for React 19 compatible versions
- Use the overrides in package.json when needed

**TypeScript Errors with Sanity**
```bash
# Regenerate types if you encounter type errors
npm run typegen
```

**Tailwind CSS 4 Configuration**
- Use the new CSS-first configuration approach
- Update class names if migrating from v3
- Check for PostCSS configuration updates

**NextAuth.js Beta Issues**
- Ensure you're using the latest beta version
- Check the NextAuth.js 5.0 beta documentation
- Verify your authentication configuration

**Package Manager Version**
- This project requires npm 10.5.2+
- Use `npm --version` to check your version
- Update npm if needed: `npm install -g npm@latest`

**Markdown Editor Issues**
- EasyMDE requires client-side rendering
- Wrap in dynamic imports for SSR compatibility
- Check for conflicting CSS styles

### Performance Optimization

1. **Image Optimization**: Use Sanity's built-in image optimization
2. **Code Splitting**: Leverage Next.js 15's automatic code splitting
3. **Caching**: Implement proper caching strategies
4. **Bundle Analysis**: Use `@next/bundle-analyzer` to optimize bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run type generation: `npm run typegen`
5. Test your changes: `npm run build`
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use React 19 features appropriately
- Maintain compatibility with Next.js 15
- Write meaningful commit messages
- Add appropriate documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js 15](https://nextjs.org/) - The React framework for production
- [React 19](https://react.dev/) - The latest React features
- [Sanity](https://www.sanity.io/) - The composable content cloud
- [Tailwind CSS 4](https://tailwindcss.com/) - A utility-first CSS framework
- [NextAuth.js](https://next-auth.js.org/) - Complete open source authentication solution
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Sentry](https://sentry.io/) - Application monitoring and error tracking
- [EasyMDE](https://github.com/Ionaru/easy-markdown-editor) - A simple, beautiful, and embeddable JavaScript markdown editor

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/your_drc/issues) page
2. Create a new issue with detailed information
3. Include error messages and environment details
4. Contact the maintainers

## 🔄 Changelog

### Version 0.1.0
- Initial release with Next.js 15 and React 19
- Sanity CMS integration with Visual Editing
- NextAuth.js 5.0 beta authentication
- Tailwind CSS 4 styling
- Sentry error tracking
- Rich text editing with Markdown support

---

**Built with ❤️ using the latest web technologies. Happy coding! 🚀**
