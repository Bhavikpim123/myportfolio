import { motion } from 'motion/react';
import { Trophy, Award, Medal, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: '1st Place',
      event: 'Devhouse Hackathon',
      description: 'Won first place in the prestigious Devhouse Hackathon, competing against top developers',
      color: 'var(--neon-blue)',
      highlight: true
    },
    {
      icon: Medal,
      title: 'Top 15 Finalist',
      event: 'VCET Hackathon 2025',
      description: 'Built an LLM-powered query system for Finance and secured position among top finalists',
      color: '#f59e0b',
      highlight: true
    },
    {
      icon: Award,
      title: '1st Runner-Up',
      event: 'CodeCraft XL Competition',
      description: 'Achieved 1st Runner-Up position at Baja Institute of Technology competition',
      color: '#8b5cf6',
      highlight: false
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-4 h-4" style={{ color: 'var(--neon-blue)' }} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="mb-4 flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6" style={{ color: 'var(--neon-blue)' }} />
            Achievements & Recognition
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Awards and accomplishments in competitive programming and hackathons
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: `0 10px 30px ${achievement.color}30`
                }}
                className="relative p-6 rounded-xl border overflow-hidden group cursor-pointer"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: achievement.highlight ? achievement.color : 'var(--border)'
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: achievement.color }}
                />

                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ 
                      backgroundColor: `${achievement.color}20`,
                      border: `2px solid ${achievement.color}`
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: achievement.color }} />
                  </div>

                  <div 
                    className="mb-2 inline-block px-2 py-1 rounded text-xs terminal-text"
                    style={{
                      background: `${achievement.color}20`,
                      color: achievement.color
                    }}
                  >
                    {achievement.title}
                  </div>

                  <h4 className="mb-3">{achievement.event}</h4>

                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>

                {/* Corner decoration */}
                {achievement.highlight && (
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 rounded-full opacity-20"
                    style={{ background: achievement.color }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-xl border"
          style={{
            backgroundColor: 'var(--secondary)',
            borderColor: 'var(--border)'
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="mb-1" style={{ color: 'var(--neon-blue)' }}>3+</div>
              <p className="text-sm text-muted-foreground">Hackathons</p>
            </div>
            <div>
              <div className="mb-1" style={{ color: 'var(--neon-blue)' }}>1st</div>
              <p className="text-sm text-muted-foreground">Place Win</p>
            </div>
            <div>
              <div className="mb-1" style={{ color: 'var(--neon-blue)' }}>Top 15</div>
              <p className="text-sm text-muted-foreground">Finalist</p>
            </div>
            <div>
              <div className="mb-1" style={{ color: 'var(--neon-blue)' }}>Runner-Up</div>
              <p className="text-sm text-muted-foreground">Achievement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
