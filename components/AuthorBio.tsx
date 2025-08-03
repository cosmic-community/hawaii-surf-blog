import Link from 'next/link'
import type { Author } from '@/types'

interface AuthorBioProps {
  author: Author
}

export default function AuthorBio({ author }: AuthorBioProps) {
  const profilePhoto = author.metadata?.profile_photo
  const bio = author.metadata?.bio
  const yearsSurfing = author.metadata?.years_surfing
  const favoriteSpot = author.metadata?.favorite_spot

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
      
      <div className="flex items-start space-x-4">
        {profilePhoto && (
          <img 
            src={`${profilePhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={author.metadata?.name || author.title}
            width={60}
            height={60}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
        )}
        
        <div className="flex-1">
          <Link 
            href={`/authors/${author.slug}`}
            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            {author.metadata?.name || author.title}
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1 mb-3">
            {yearsSurfing && (
              <span>{yearsSurfing} years surfing</span>
            )}
            {favoriteSpot && (
              <span>Favorite spot: {favoriteSpot}</span>
            )}
          </div>
          
          {bio && (
            <p className="text-gray-700 leading-relaxed">{bio}</p>
          )}
        </div>
      </div>
    </div>
  )
}