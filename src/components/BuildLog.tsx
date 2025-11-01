import { motion } from 'motion/react';
import { buildLog } from '../lib/mockData';
import { CheckCircle2, Circle } from 'lucide-react';

export default function BuildLog() {
  return (
    <section id="build-log" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--neon-green)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span style={{ color: 'var(--neon-blue)' }}>06.</span> Build Log
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey from learning MERN to building production-ready applications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5"
            style={{ background: 'var(--border)' }}
          />

          <div className="space-y-12">
            {buildLog.map((entry, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={entry._id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10`}>
                    {entry.milestone ? (
                      <CheckCircle2 
                        className="w-8 h-8 p-1.5 rounded-full bg-background"
                        style={{ color: 'var(--neon-blue)' }}
                      />
                    ) : (
                      <Circle 
                        className="w-8 h-8 p-1.5 rounded-full bg-background"
                        style={{ color: 'var(--muted-foreground)' }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-xl border"
                      style={{
                        backgroundColor: entry.milestone ? 'var(--card)' : 'var(--secondary)',
                        borderColor: entry.milestone ? 'var(--neon-blue)' : 'var(--border)'
                      }}
                    >
                      <div 
                        className="text-xs terminal-text mb-2"
                        style={{ color: 'var(--neon-blue)' }}
                      >
                        {new Date(entry.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <h4 className="mb-2">{entry.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {entry.description}
                      </p>
                      {entry.milestone && (
                        <div 
                          className="mt-3 inline-block px-2 py-1 rounded text-xs terminal-text"
                          style={{
                            background: 'rgba(0, 217, 255, 0.1)',
                            color: 'var(--neon-blue)'
                          }}
                        >
                          Milestone
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 rounded-xl border text-center"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--neon-blue)'
          }}
        >
          <p className="terminal-text" style={{ color: 'var(--neon-blue)' }}>
            $ status: continuously-learning && building-awesome-stuff
          </p>
        </motion.div>
      </div>
    </section>
  );
}
