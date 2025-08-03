import Link from 'next/link'
import type { SurfPost } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'

interface PostCardProps {
  post: SurfPost
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category
  const author = post.metadata?.author
  
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {featuredImage && (
        <Link href={`/posts/${post.slug}`}>
          <img 
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={post.metadata?.title || post.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity cursor-pointer"
          />
        </Link>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          {category && <CategoryBadge category={category} />}
          {post.metadata?.surf_rating && (
            <span className="text-sm text-gray-500">
              {post.metadata.surf_rating.value}
            </span>
          )}
        </div>
        
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
            {post.metadata?.title || post.title}
          </h3>
        </Link>
        
        {post.metadata?.content && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.metadata.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          {author && (
            <Link 
              href={`/authors/${author.slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              By {author.metadata?.name || author.title}
            </Link>
          )}
          
          {post.metadata?.wave_height && (
            <span>
              {post.metadata.wave_height}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}