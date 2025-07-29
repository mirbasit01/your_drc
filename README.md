# Your DRC - Startup Directory Platform

A modern startup directory platform built with Next.js and Sanity CMS, designed to showcase and discover innovative startups.

## 🚀 Features

- **Startup Listings**: Browse and discover new startups with detailed information
- **Author Profiles**: Comprehensive author management system
- **Content Management**: Powered by Sanity CMS for easy content updates
- **Responsive Design**: Optimized for all devices
- **SEO Friendly**: Built with Next.js for optimal search engine visibility

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.3.5 (React 19.1.0)
- **CMS**: Sanity 3.22.0
- **Authentication**: NextAuth.js 5.0 (Beta)
- **Styling**: Tailwind CSS 4.1.11
- **TypeScript**: Full type safety with TS 5+
- **Icons**: Lucide React 0.525.0
- **Rich Text**: Portable Text & Markdown support
- **UI Components**: Radix UI primitives

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm 10.5.2+ package manager (as specified in packageManager)
- A Sanity account and project
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
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
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

1. **Start the development server**
   ```bash
   npm run dev
   ```
   
   This will automatically run type generation before starting the dev server.

2. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📁 Project Structure

```
your_drc/
├── app/                    # Next.js 15 app directory
│   ├── studio/            # Sanity Studio pages
│   └── ...                # Other app pages
├── sanity/                # Sanity configuration
│   ├── schemaTypes/       # Content schemas
│   │   ├── author.ts      # Author schema
│   │   ├── startup.ts     # Startup schema
│   │   └── index.ts       # Schema exports
│   ├── structure.ts       # Studio structure
│   └── extract.json       # Generated type definitions
├── components/            # React 19 components
├── lib/                   # Utility functions
├── public/               # Static assets
├── sanity.config.ts      # Sanity configuration
├── tailwind.config.js    # Tailwind 4+ configuration
└── next.config.js        # Next.js 15 configuration
```

## 📊 Content Schemas

### Author Schema
- **id**: Unique identifier
- **name**: Author's display name
- **username**: Unique username
- **email**: Contact email
- **image**: Profile picture URL
- **bio**: Author biography

### Startup Schema
- **title**: Startup name
- **slug**: URL-friendly identifier
- **author**: Reference to author
- **views**: View count
- **description**: Brief description
- **category**: Startup category
- **image**: Startup logo/image
- **pitch**: Detailed startup pitch

## 🎨 Customization

### Adding New Content Types

1. Create a new schema file in `sanity/schemaTypes/`
2. Export it from `sanity/schemaTypes/index.ts`
3. Add it to the types array in the schema configuration

### Styling

The project uses Tailwind CSS 4+ for styling. Customize the design by:
- Modifying `tailwind.config.js` (v4 syntax)
- Using the new CSS-first configuration approach
- Adding custom CSS classes with `@tailwindcss/typography` support
- Utilizing Radix UI components for consistent design

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

### Adding New Startups

1. Navigate to `/studio` in your browser
2. Click "Startup" in the content menu
3. Fill in the required fields:
   - Title (required)
   - Category (required, 1-20 characters)
   - Image URL (required)
   - Author reference
   - Description and pitch

### Managing Authors

1. Go to the Authors section in Sanity Studio
2. Create author profiles with bio, image, and contact info
3. Link authors to startup entries

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | Yes |
| `SANITY_API_TOKEN` | Sanity API token (for writes) | Optional |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | Yes |
| `NEXTAUTH_URL` | Your app's URL | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

**"Unknown type: markdown" error**
- Solution: Use `text` field type instead of `markdown` in schemas

**TypeScript errors with SchemaTypeDefinition**
- Solution: Import without `type` keyword: `import { SchemaTypeDefinition } from "sanity"`

**React 19 compatibility issues**
- Ensure all dependencies support React 19
- Check for deprecated React features and update accordingly

**Tailwind CSS 4 configuration**
- Use the new CSS-first configuration approach
- Update class names if migrating from v3

**NextAuth.js Beta issues**
- Check the latest NextAuth.js 5.0 beta documentation
- Ensure proper configuration for the beta version

**Studio not loading**
- Check environment variables are set correctly
- Ensure Sanity project ID and dataset are valid

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://iamabdulbasit.netlify.app/) page
2. Create a new issue with detailed information
3. Contact the maintainers

## 🙏 Acknowledgments

- [Next.js 15](https://nextjs.org/) for the cutting-edge React framework
- [React 19](https://react.dev/) for the latest React features
- [Sanity](https://www.sanity.io/) for the powerful headless CMS
- [Tailwind CSS 4](https://tailwindcss.com/) for the modern utility-first styling
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Lucide](https://lucide.dev/) for the beautiful icon library

---

**Happy coding! 🚀**
