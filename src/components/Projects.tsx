import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { projects } from '../lib/mockData';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'web' | 'fullstack' | 'backend' | 'mobile' | 'ai'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span style={{ color: 'var(--neon-blue)' }}>02.</span> Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of my best work, from real-time chat platforms to authentication systems.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['all', 'fullstack', 'ai', 'mobile', 'backend'].map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(category as typeof filter)}
                className="capitalize"
                style={filter === category ? {
                  background: 'var(--neon-blue)',
                  color: 'var(--background)'
                } : undefined}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer rounded-xl overflow-hidden border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs terminal-text"
                    style={{
                      background: 'var(--neon-blue)',
                      color: 'var(--background)'
                    }}
                  >
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="text-xs"
                      style={{ borderColor: 'var(--neon-blue)', color: 'var(--neon-blue)' }}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-[var(--neon-blue)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-[var(--neon-blue)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full rounded-xl overflow-hidden border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--neon-blue)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <h2 className="mb-4">{selectedProject.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        style={{ 
                          background: 'rgba(0, 217, 255, 0.1)',
                          borderColor: 'var(--neon-blue)',
                          color: 'var(--neon-blue)'
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="gap-2"
                    >
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        View Source
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button
                      asChild
                      className="gap-2"
                      style={{
                        background: 'var(--neon-blue)',
                        color: 'var(--background)'
                      }}
                    >
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
