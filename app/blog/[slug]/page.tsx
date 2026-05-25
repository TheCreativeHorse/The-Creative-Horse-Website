import { client } from '../../../sanity.client'
import { postBySlugQuery } from '../../../sanity.queries'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) return {}
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `https://thecreativehorse.ca/blog/${params.slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-primary-blue mb-2">{post.category} · {post.readTime}</p>
        <h1 className="text-4xl font-bold text-primary-navy mb-4">{post.title}</h1>
        <p className="text-gray-400 text-sm mb-10">{new Date(post.publishedAt).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <div className="prose prose-lg prose-headings:text-primary-navy prose-a:text-primary-blue max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </main>
  )
}