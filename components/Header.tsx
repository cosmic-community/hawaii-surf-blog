import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌊</span>
            <span className="text-xl font-bold text-gray-900">
              Hawaii Surf Blog
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/posts" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              All Posts
            </Link>
            <Link 
              href="/authors" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Authors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}