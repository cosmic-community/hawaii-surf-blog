import type { SurfPost } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'

interface PostHeaderProps {
  post: SurfPost
}

export default function PostHeader({ post }: PostHeaderProps) {
  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category

  return (
    <header className="mb-8">
      {featuredImage && (
        <img 
          src={`${featuredImage.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
          alt={post.metadata?.title || post.title}
          width={600}
          height={300}
          className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg mb-6"
        />
      )}
      
      <div className="flex items-center gap-4 mb-4">
        {category && <CategoryBadge category={category} />}
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {post.metadata?.title || post.title}
      </h1>
    </header>
  )
}