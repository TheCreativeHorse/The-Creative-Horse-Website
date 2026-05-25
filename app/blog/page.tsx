import Link from 'next/link'
import { client } from '../../sanity.client'
import { allPostsQuery } from '../../sanity.queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Tips & Insights',
  description: 'Expert digital marketing tips, SEO strategies, and web design insights for small businesses in Mississauga, Toronto and the GTA.',
  alternates: { canonical: 'https://thecreativehorse.ca/blog' },
}

export const revalidate = 60

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery)

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-navy mb-4">Blog</h1>
        <p className="text-gray-500 mb-12">Digital marketing tips, SEO strategies, and web design insights for GTA businesses.</p>
        <div className="grid gap-8">
          {posts.length === 0 && (
            <p className="text-gray-400">No posts yet. Check back soon.</p>
          )}
          {posts.map((post: any) => (
            <Link href={`/blog/${post.slug.current}`} key={post._id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <p className="text-sm text-primary-blue mb-2">{post.category} · {post.readTime}</p>
              <h2 className="text-2xl font-bold text-primary-navy mb-2">{post.title}</h2>
              <p className="text-gray-500">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}