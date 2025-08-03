import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

export async function getSurfPosts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'surf-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}

export async function getSurfPostBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'surf-posts',
        slug
      })
      .depth(1)
    
    return response.object
  } catch (error: any) {
    if (error.status === 404) {
      return null
    }
    throw error
  }
}

export async function getCategories() {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}

export async function getAuthors() {
  try {
    const response = await cosmic.objects
      .find({ type: 'authors' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}

export async function getAuthorBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'authors',
        slug
      })
      .depth(1)
    
    return response.object
  } catch (error: any) {
    if (error.status === 404) {
      return null
    }
    throw error
  }
}

export async function getSurfPostsByCategory(categoryId: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'surf-posts',
        'metadata.category': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}

export async function getSurfPostsByAuthor(authorId: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'surf-posts',
        'metadata.author': authorId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}