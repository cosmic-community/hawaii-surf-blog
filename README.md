# Hawaii Surf Blog

![Hawaii Surf Blog](https://imgix.cosmicjs.com/749a6fb0-7078-11f0-a051-23c10f41277a-photo-1502933691298-84fc14542831-1754232308122.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautiful Next.js website showcasing Hawaii's surf culture, spots, and gear reviews. Built with your existing Cosmic content including surf posts, categories, and author profiles.

## Features

- 🌊 **Surf Post Grid** - Beautiful layout showcasing surf reports, spot guides, and gear reviews
- 🏷️ **Category Filtering** - Filter posts by category with color-coded badges
- 👤 **Author Profiles** - Detailed author pages with surf experience and favorite spots
- 📊 **Surf Conditions** - Display wave height, wind conditions, and surf ratings
- 📱 **Responsive Design** - Mobile-optimized for checking surf conditions on the go
- 🖼️ **Optimized Images** - Fast-loading images with imgix optimization
- 🔍 **SEO Friendly** - Proper meta tags and structured data

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=688f758eb5e4a42c017a283a&clone_repository=688f76beb5e4a42c017a2853)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a Hawaii surf blog with posts, authors, and categories"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic SDK** - Headless CMS integration
- **Inter Font** - Modern typography

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Surf Posts
```typescript
const posts = await cosmic.objects
  .find({ type: 'surf-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Filtering by Category
```typescript
const spotGuides = await cosmic.objects
  .find({ 
    type: 'surf-posts',
    'metadata.category': categoryId 
  })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with your Cosmic bucket structure:

- **Surf Posts** - Blog posts with surf conditions and content
- **Categories** - Surf Reports, Surf Spots, and Gear Reviews with colors  
- **Authors** - Writer profiles with photos and surf experience

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Netlify
1. Connect repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables

For production, ensure environment variables are set in your hosting platform's dashboard.

<!-- README_END -->