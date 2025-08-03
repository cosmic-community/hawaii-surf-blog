import type { SurfPost } from '@/types'

interface PostContentProps {
  post: SurfPost
}

export default function PostContent({ post }: PostContentProps) {
  const content = post.metadata?.content || post.content

  return (
    <div className="prose prose-lg max-w-none mb-12">
      {content && (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  )
}