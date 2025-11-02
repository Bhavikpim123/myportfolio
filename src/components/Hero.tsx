import { motion } from 'motion/react';
import { Code2, Database, Server, Smartphone, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const techIcons = [
    { Icon: Code2, delay: 0, x: -20, y: -30 },
    { Icon: Database, delay: 0.2, x: 20, y: -20 },
    { Icon: Server, delay: 0.4, x: -30, y: 20 },
    { Icon: Smartphone, delay: 0.6, x: 25, y: 30 }
  ];

  const codeSnippets = [
    'const build = () => awesome();',
    'db.connect("mongodb://...");',
    'app.listen(3000);',
    'npm run dev'
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--neon-blue) 1px, transparent 1px), linear-gradient(90deg, var(--neon-blue) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating tech icons */}
      {techIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1,
            x: [x, x + 10, x],
            y: [y, y - 10, y]
          }}
          transition={{
            delay,
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + (index % 2) * 40}%`
          }}
        >
          <Icon className="w-12 h-12" style={{ color: 'var(--neon-blue)' }} />
        </motion.div>
      ))}

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block terminal-text opacity-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            y: [0, -20, 0]
          }}
          transition={{
            delay: index * 0.3,
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            right: `${10 + index * 15}%`,
            top: `${20 + index * 15}%`,
            fontSize: '12px',
            color: 'var(--neon-blue)'
          }}
        >
          {snippet}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span 
                className="terminal-text px-4 py-2 rounded-full border"
                style={{ 
                  borderColor: 'var(--neon-blue)',
                  color: 'var(--neon-blue)'
                }}
              >
                Full-Stack Developer
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block text-6xl md:text-8xl mb-2">
              Hi, I'm{' '}
              <span 
                className="inline-block"
                style={{ 
                  color: 'var(--neon-blue)',
                  textShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
                }}
              >
                Bhavik Pimpalkar
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Computer Engineering student passionate about building{' '}
            <span style={{ color: 'var(--neon-blue)' }}>full-stack applications</span> with AI integration.
            From Flutter apps to MERN stack, from Firebase to MongoDB Atlas.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="gap-2"
              style={{
                background: 'var(--neon-blue)',
                color: 'var(--background)'
              }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { Icon: Github, href: 'https://github.com/Bhavikpim123' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/bhavik-pimpalkar-46855a230/' },
              { Icon: Mail, href: 'mailto:bhavikpimpalkar@gmail.com' }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" style={{ color: 'var(--neon-blue)' }} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
              style={{ borderColor: 'var(--neon-blue)' }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--neon-blue)' }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
