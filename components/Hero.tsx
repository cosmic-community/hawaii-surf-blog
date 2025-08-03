export default function Hero() {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: 'url(https://imgix.cosmicjs.com/749a6fb0-7078-11f0-a051-23c10f41277a-photo-1502933691298-84fc14542831-1754232308122.jpg?w=1920&h=1080&fit=crop&auto=format,compress)'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Hawaii Surf Blog
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Discover the best surf spots, conditions, and gear reviews from the legendary breaks of Hawaii
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#posts" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Latest Reports
            </a>
            <a 
              href="#spots" 
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Surf Spots
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}