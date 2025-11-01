import { motion } from 'motion/react';
import { techSkills } from '../lib/mockData';
import { 
  Code, Database, Server, Cloud, Wrench, 
  Flame, GitBranch, Container, Phone, Palette,
  Triangle, Route
} from 'lucide-react';

const iconMap: Record<string, any> = {
  react: Code,
  code: Code,
  palette: Palette,
  triangle: Triangle,
  server: Server,
  route: Route,
  database: Database,
  flame: Flame,
  cloud: Cloud,
  phone: Phone,
  'git-branch': GitBranch,
  container: Container,
  default: Wrench
};

export default function TechStack() {
  const categories = [
    { name: 'Frontend', value: 'frontend', color: 'var(--neon-blue)' },
    { name: 'Backend', value: 'backend', color: 'var(--neon-green)' },
    { name: 'Database', value: 'database', color: '#8b5cf6' },
    { name: 'Cloud', value: 'cloud', color: '#f59e0b' },
    { name: 'Tools', value: 'tools', color: '#ec4899' }
  ];

  const groupedSkills = categories.map(cat => ({
    ...cat,
    skills: techSkills.filter(skill => skill.category === cat.value)
  }));

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--neon-blue)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span style={{ color: 'var(--neon-blue)' }}>04.</span> Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-12">
          {groupedSkills.map((category, catIndex) => (
            <motion.div
              key={category.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 
                className="mb-6 flex items-center gap-2"
                style={{ color: category.color }}
              >
                <span className="w-8 h-0.5 rounded" style={{ background: category.color }} />
                {category.name}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || iconMap.default;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 0 20px ${category.color}40`
                      }}
                      className="p-4 rounded-xl border flex flex-col items-center gap-3 cursor-pointer group"
                      style={{
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div 
                        className="p-3 rounded-lg transition-all duration-300"
                        style={{ 
                          backgroundColor: `${category.color}20`,
                          border: `2px solid ${category.color}40`
                        }}
                      >
                        <Icon 
                          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                          style={{ color: category.color }} 
                        />
                      </div>

                      <div className="text-center w-full">
                        <p className="text-sm mb-2">{skill.name}</p>
                        
                        {/* Proficiency bar */}
                        <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                            style={{ background: category.color }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-xl border text-center"
          style={{
            backgroundColor: 'var(--secondary)',
            borderColor: 'var(--border)'
          }}
        >
          <p className="terminal-text" style={{ color: 'var(--neon-blue)' }}>
            $ always --learning && exploring new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
