import { motion } from 'motion/react';
import { useState } from 'react';
import { blogPosts } from '../lib/mockData';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span style={{ color: 'var(--neon-blue)' }}>05.</span> Latest Blog Posts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing my learnings, experiences, and technical insights from building web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-xl overflow-hidden border cursor-pointer"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }}
              onClick={() => setSelectedPost(post)}
            >
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </span>
                </div>

                <h3 className="mb-3 group-hover:text-[var(--neon-blue)] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="text-xs"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div 
                  className="flex items-center gap-1 text-sm group-hover:gap-2 transition-all"
                  style={{ color: 'var(--neon-blue)' }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl w-full my-8 rounded-xl overflow-hidden border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--neon-blue)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedPost.image && (
              <div className="relative">
                <ImageWithFallback
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="p-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime} min read
                </span>
              </div>

              <h2 className="mb-4">{selectedPost.title}</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag) => (
                  <Badge 
                    key={tag}
                    style={{ 
                      background: 'rgba(0, 217, 255, 0.1)',
                      borderColor: 'var(--neon-blue)',
                      color: 'var(--neon-blue)'
                    }}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-muted-foreground">
                  {selectedPost.content}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                <p className="text-sm text-muted-foreground">
                  Written by <span style={{ color: 'var(--neon-blue)' }}>{selectedPost.author}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
