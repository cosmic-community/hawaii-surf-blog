import type { Author } from '@/types'

interface AuthorProfileProps {
  author: Author
}

export default function AuthorProfile({ author }: AuthorProfileProps) {
  const profilePhoto = author.metadata?.profile_photo
  const bio = author.metadata?.bio
  const yearsSurfing = author.metadata?.years_surfing
  const favoriteSpot = author.metadata?.favorite_spot

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-8">
        {profilePhoto && (
          <img 
            src={`${profilePhoto.imgix_url}?w=320&h=320&fit=crop&auto=format,compress`}
            alt={author.metadata?.name || author.title}
            width={160}
            height={160}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto sm:mx-0 flex-shrink-0"
          />
        )}
        
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {author.metadata?.name || author.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600 mb-6">
            {yearsSurfing && (
              <span className="flex items-center justify-center sm:justify-start">
                <span className="font-medium">{yearsSurfing} years</span> surfing
              </span>
            )}
            {favoriteSpot && (
              <span className="flex items-center justify-center sm:justify-start">
                Favorite spot: <span className="font-medium ml-1">{favoriteSpot}</span>
              </span>
            )}
          </div>
          
          {bio && (
            <p className="text-gray-700 leading-relaxed text-lg">{bio}</p>
          )}
        </div>
      </div>
    </div>
  )
}