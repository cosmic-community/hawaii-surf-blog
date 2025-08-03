// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getSurfPostBySlug } from '@/lib/cosmic'
import type { SurfPost } from '@/types'
import PostHeader from '@/components/PostHeader'
import PostContent from '@/components/PostContent'
import PostMeta from '@/components/PostMeta'
import AuthorBio from '@/components/AuthorBio'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getSurfPostBySlug(slug) as SurfPost | null

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PostHeader post={post} />
      <PostMeta post={post} />
      <PostContent post={post} />
      {post.metadata?.author && (
        <AuthorBio author={post.metadata.author} />
      )}
    </article>
  )
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getSurfPostBySlug(slug) as SurfPost | null

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.metadata?.title || post.title,
    description: post.metadata?.content ? 
      post.metadata.content.replace(/<[^>]*>/g, '').substring(0, 160) : 
      'Hawaii surf blog post',
    openGraph: {
      title: post.metadata?.title || post.title,
      description: post.metadata?.content ? 
        post.metadata.content.replace(/<[^>]*>/g, '').substring(0, 160) : 
        'Hawaii surf blog post',
      images: post.metadata?.featured_image ? [
        {
          url: `${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
          width: 1200,
          height: 630,
          alt: post.metadata?.title || post.title,
        }
      ] : [],
    },
  }
}