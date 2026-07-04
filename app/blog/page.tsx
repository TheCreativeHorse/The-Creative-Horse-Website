import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Tips & Insights',
  description: 'Expert digital marketing tips, SEO strategies, and web design insights for small businesses in Mississauga, Toronto and the GTA.',
  alternates: { canonical: 'https://thecreativehorse.ca/blog' },
  openGraph: {
    title: 'Blog | Digital Marketing Tips & Insights',
    description: 'Expert digital marketing tips, SEO strategies, and web design insights for small businesses in Mississauga, Toronto and the GTA.',
    url: 'https://thecreativehorse.ca/blog',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'local-seo-checklist-mississauga',
    category: 'Local SEO',
    readTime: '9 min read',
    title: 'Local SEO Checklist for Mississauga Small Businesses (2026)',
    excerpt: 'A step-by-step checklist of everything a Mississauga small business needs to rank higher on Google Maps and get more local customers in 2026.',
    date: 'July 2026',
  },
  {
    slug: 'website-design-plumbers-hvac-mississauga',
    category: 'Web Design',
    readTime: '7 min read',
    title: 'Website Design for Plumbers and HVAC Companies in Mississauga: What Actually Works',
    excerpt: 'Most contractor websites do not generate calls. Here is what actually needs to be on a plumber or HVAC website to turn visitors into booked jobs.',
    date: 'June 2026',
  },
  {
    slug: 'ai-automation-small-business',
    category: 'AI & Automation',
    readTime: '8 min read',
    title: 'How Small Businesses Can Use AI Automation in 2026 (Without Hiring a Developer)',
    excerpt: 'A practical guide to AI automation for small businesses — what to automate, what to avoid, and how GTA businesses are saving time and money with AI tools in 2026.',
    date: 'June 2026',
  },
  {
    slug: 'web-design-cost-mississauga',
    category: 'Web Design',
    readTime: '6 min read',
    title: 'How Much Does a Website Cost in Mississauga? (2026 Guide)',
    excerpt: 'A complete breakdown of website design costs for Mississauga small businesses — from simple brochure sites to full e-commerce stores. What to expect and how to avoid overpaying.',
    date: 'May 2026',
  },
  {
    slug: 'digital-marketing-agency-toronto',
    category: 'Digital Marketing',
    readTime: '7 min read',
    title: 'How to Choose a Digital Marketing Agency in Toronto & Mississauga',
    excerpt: 'Not all digital agencies are equal. Here is what Mississauga and Toronto small business owners need to look for — and the red flags that should send you running.',
    date: 'May 2026',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-navy mb-4">Blog</h1>
        <p className="text-gray-500 mb-12">Digital marketing tips, SEO strategies, and web design insights for GTA businesses.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-primary-blue border border-primary-blue rounded-full px-3 py-1">{post.category}</span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-primary-navy mb-3">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-gray-400">{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="text-primary-blue font-medium text-sm hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}