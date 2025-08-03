import Link from 'next/link'
import type { SurfPost } from '@/types'

interface PostMetaProps {
  post: SurfPost
}

export default function PostMeta({ post }: PostMetaProps) {
  const author = post.metadata?.author
  const surfSpot = post.metadata?.surf_spot
  const waveHeight = post.metadata?.wave_height
  const windConditions = post.metadata?.wind_conditions
  const surfRating = post.metadata?.surf_rating

  return (
    <div className="border-l-4 border-blue-500 pl-6 mb-8 bg-blue-50 py-4 rounded-r-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Surf Conditions</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        {surfSpot && (
          <div>
            <span className="font-medium text-gray-700">Spot:</span>
            <p className="text-gray-900">{surfSpot}</p>
          </div>
        )}
        
        {waveHeight && (
          <div>
            <span className="font-medium text-gray-700">Wave Height:</span>
            <p className="text-gray-900">{waveHeight}</p>
          </div>
        )}
        
        {windConditions && (
          <div>
            <span className="font-medium text-gray-700">Wind:</span>
            <p className="text-gray-900">{windConditions.value}</p>
          </div>
        )}
        
        {surfRating && (
          <div>
            <span className="font-medium text-gray-700">Rating:</span>
            <p className="text-gray-900">{surfRating.value}</p>
          </div>
        )}
      </div>
      
      {author && (
        <div className="mt-4 pt-4 border-t border-blue-200">
          <span className="font-medium text-gray-700">Author:</span>
          <Link 
            href={`/authors/${author.slug}`}
            className="ml-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            {author.metadata?.name || author.title}
          </Link>
        </div>
      )}
    </div>
  )
}