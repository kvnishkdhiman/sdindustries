# SD Industries - Next.js 15 + Tailwind v4

Professional steel plant and rolling mill consultancy website built with modern React/Next.js architecture.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript (strict mode)
- **Animations**: CSS-only (no Framer Motion)
- **Forms**: Native fetch + API routes
- **Icons**: Lucide React
- **Fonts**: Inter (via next/font)
- **SEO**: JSON-LD structured data, sitemap, robots.txt

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (contact forms)
│   ├── components/        # Page-specific components
│   ├── globals.css        # Global styles + CSS variables
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Global loading UI
│   ├── error.tsx          # Global error boundary
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Sitemap generation
│   ├── robots.ts          # Robots.txt generation
│   └── [routes]/          # Page routes
├── components/
│   ├── ui/                # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── Navigation.tsx     # Main navigation (desktop + mobile)
│   ├── HeaderTopBar.tsx   # Top contact bar
│   ├── Footer.tsx         # Site footer
│   ├── ProductTemplate.tsx# Product detail template
│   ├── ErrorBoundary.tsx  # Client error boundary
│   ├── ClientLayoutWrapper.tsx
│   └── JsonLd.tsx         # JSON-LD structured data
├── lib/
│   ├── navigation.ts      # Shared navigation config
│   ├── utils.ts           # cn() utility (clsx + tailwind-merge)
│   ├── env.ts             # Environment validation (t3-env)
│   └── seo.ts             # SEO helpers + JSON-LD generators
└── types/
    └── index.ts           # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18.17+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd sdindustries

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript compiler check |

## Environment Variables

See `.env.example` for all available variables.

### Required for Production

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL (e.g., https://example.com) |
| `NEXT_PUBLIC_SITE_NAME` | Site name for SEO |
| `EMAIL_SERVER_*` | SMTP credentials for form submissions |
| `CAPTCHA_SECRET_KEY` | reCAPTCHA/hCaptcha secret |
| `UPSTASH_REDIS_*` | Redis for rate limiting |

## Key Features

### Architecture
- **Shared navigation config** - Single source of truth for menus
- **Type-safe** - Strict TypeScript with shared types
- **Component primitives** - Reusable Button, Input, Card, Container
- **Error boundaries** - Graceful error handling at multiple levels

### Performance
- **CSS-only animations** - No heavy animation libraries
- **Optimized images** - Next.js Image with proper sizes
- **Static generation** - All pages pre-rendered at build
- **Bundle optimization** - `optimizePackageImports` for lucide-react

### Accessibility (WCAG 2.2 AA)
- Semantic HTML landmarks
- Focus-visible styles
- Skip link for keyboard navigation
- ARIA attributes on interactive elements
- Reduced motion support
- High contrast mode support
- Proper heading hierarchy

### SEO
- JSON-LD structured data (Organization, Product, Service, Article, Breadcrumb)
- Dynamic sitemap.xml generation
- robots.txt with crawl rules
- Open Graph / Twitter cards
- Canonical URLs

### Forms
- Server-side validation (Zod-ready)
- Honeypot spam protection
- API routes for contact/product inquiry
- Client-side UX with loading/error states

## Adding New Pages

1. Create route in `src/app/[route]/page.tsx`
2. Add navigation item in `src/lib/navigation.ts`
3. Add metadata (title, description)
4. Include JSON-LD structured data where appropriate

## Deployment

### Vercel (Recommended)

```bash
# Connect to Vercel
vercel

# Or deploy via Git integration
# 1. Push to GitHub
# 2. Import in Vercel dashboard
# 3. Add environment variables
# 4. Deploy
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Content Management

### Placeholder Content (TODO)

The following require real company information before launch:

- [ ] Company address, phone, email (currently placeholders)
- [ ] Client logos (currently initials: RSC, SMS, VSC, JSC, BSC, ISC)
- [ ] Team member photos/bios (currently placeholder)
- [ ] Project case study images (currently placeholders)
- [ ] Client testimonials (currently placeholder)
- [ ] Certifications (ISO certificate image)
- [ ] Hero background images (hero_bg.jpg, who_we_are.jpg, product_sketch.jpg)
- [ ] PDF newsletters for download
- [ ] Blog post content

### Real Content Integration

Replace placeholder data in:
- `src/lib/navigation.ts` - Company contact info
- `src/app/page.tsx` - Stats, client logos, testimonial
- `src/app/about/*` - Team, history, certifications
- `src/app/projects/page.tsx` - Case studies
- `src/app/contact/*` - Form endpoints

## Code Quality

- **ESLint**: Next.js core-web-vitals + TypeScript configs
- **Prettier**: Tailwind class sorting (via official plugin)
- **TypeScript**: Strict mode, no unused variables

## License

Private - SD Industries proprietary codebase.