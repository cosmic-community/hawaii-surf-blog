import { getSurfPosts, getCategories } from '@/lib/cosmic'
import type { SurfPost, Category } from '@/types'
import Hero from '@/components/Hero'
import PostGrid from '@/components/PostGrid'
import CategoryFilter from '@/components/CategoryFilter'

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getSurfPosts(),
    getCategories()
  ])

  const surfPosts = posts as SurfPost[]
  const categoryList = categories as Category[]

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Surf Reports & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest surf conditions, spot guides, and gear reviews from Hawaii's best surf writers.
          </p>
        </div>

        <CategoryFilter categories={categoryList} />
        <PostGrid posts={surfPosts} />
      </div>
    </div>
  )
}