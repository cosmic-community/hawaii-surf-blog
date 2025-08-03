// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getSurfPostsByAuthor } from '@/lib/cosmic'
import type { Author, SurfPost } from '@/types'
import AuthorProfile from '@/components/AuthorProfile'
import PostGrid from '@/components/PostGrid'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const [author, posts] = await Promise.all([
    getAuthorBySlug(slug),
    getSurfPostsByAuthor(slug)
  ])

  if (!author) {
    notFound()
  }

  const authorData = author as Author
  const authorPosts = posts as SurfPost[]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AuthorProfile author={authorData} />
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Posts by {authorData.metadata?.name || authorData.title}
        </h2>
        <PostGrid posts={authorPosts} />
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug) as Author | null

  if (!author) {
    return {
      title: 'Author Not Found',
    }
  }

  return {
    title: `${author.metadata?.name || author.title} - Hawaii Surf Blog`,
    description: author.metadata?.bio || `Posts by ${author.metadata?.name || author.title}`,
  }
}