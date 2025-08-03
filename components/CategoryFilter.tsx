'use client'

import { useState } from 'react'
import type { Category } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategory(categoryId)
    // In a real app, this would filter the posts
    // For now, it's just visual feedback
  }

  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === null
            ? 'bg-gray-900 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All Posts
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`transition-opacity ${
            selectedCategory === category.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <CategoryBadge category={category} />
        </button>
      ))}
    </div>
  )
}