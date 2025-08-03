// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Surf Post interface
interface SurfPost extends CosmicObject {
  type: 'surf-posts';
  metadata: {
    title?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    category?: Category;
    surf_spot?: string;
    wave_height?: string;
    wind_conditions?: {
      key: string;
      value: string;
    };
    surf_rating?: {
      key: string;
      value: string;
    };
  };
}

// Category interface
interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    color?: string;
  };
}

// Author interface  
interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    years_surfing?: number;
    favorite_spot?: string;
  };
}

// API response type
interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isSurfPost(obj: CosmicObject): obj is SurfPost {
  return obj.type === 'surf-posts';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type === 'authors';
}

// Type literals for select dropdown values
export type WindCondition = 'offshore' | 'onshore' | 'cross-shore' | 'light';
export type SurfRating = 'poor' | 'fair' | 'good' | 'excellent' | 'epic';

export type { SurfPost, Category, Author, CosmicObject, CosmicResponse };