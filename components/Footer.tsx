export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌊</span>
              <span className="text-xl font-bold">Hawaii Surf Blog</span>
            </div>
            <p className="text-gray-400">
              Your ultimate guide to Hawaii's surf spots, conditions, and culture.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Surf Reports</li>
              <li>Surf Spots</li>
              <li>Gear Reviews</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-400">
              Follow us for daily surf updates and Hawaiian surf culture.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Hawaii Surf Blog. Built with Cosmic.</p>
        </div>
      </div>
    </footer>
  )
}