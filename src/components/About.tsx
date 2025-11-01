import { motion } from 'motion/react';
import { useState } from 'react';
import { Briefcase, GraduationCap, Heart, Zap } from 'lucide-react';
import Achievements from './Achievements';

export default function About() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const skills = [
    {
      icon: Briefcase,
      title: 'Experience',
      front: 'Frontend Developer',
      back: 'Frontend Developer Intern at RatalaXpert (May-July 2025). Led redesign increasing user engagement by 70%, mentoring 3,000+ students monthly with REST API integrations.'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      front: 'B.Tech Student',
      back: 'Computer Engineering at BITW, Wardha (2022-Present). CGPA: 7.4. Technical Lead at Google Developer Groups On Campus, leading 48-member team.'
    },
    {
      icon: Heart,
      title: 'Leadership',
      front: 'Community Builder',
      back: 'Technical Lead at GDG BITW organizing Cloud Sprints and Flutter workshops. Core team member at HeadsUp Club organizing 80+ fintech and data challenge events.'
    },
    {
      icon: Zap,
      title: 'Achievements',
      front: 'Hackathon Winner',
      back: '1st Place at Devhouse Hackathon, Top 15 at VCET Hackathon 2025 (LLM Finance Query System), 1st Runner-Up at CodeCraft XL Competition.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span style={{ color: 'var(--neon-blue)' }}>01.</span> About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer who loves turning ideas into reality through clean code and creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isFlipped = flippedCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 cursor-pointer"
                onClick={() => setFlippedCard(isFlipped ? null : index)}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 p-6 rounded-xl border flex flex-col items-center justify-center gap-4 backface-hidden"
                    style={{
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--border)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div 
                      className="p-4 rounded-full"
                      style={{ 
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        border: '2px solid var(--neon-blue)'
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: 'var(--neon-blue)' }} />
                    </div>
                    <h3 className="text-center">{skill.front}</h3>
                    <p className="text-sm text-muted-foreground text-center">{skill.title}</p>
                    <p className="text-xs" style={{ color: 'var(--neon-blue)' }}>
                      Click to flip
                    </p>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 p-6 rounded-xl border flex items-center justify-center backface-hidden"
                    style={{
                      backgroundColor: 'var(--secondary)',
                      borderColor: 'var(--neon-blue)',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <p className="text-center text-sm">{skill.back}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-xl border"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)'
          }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2" style={{ color: 'var(--neon-blue)' }}>
                4+
              </div>
              <p className="text-muted-foreground">Major Projects</p>
            </div>
            <div>
              <div className="mb-2" style={{ color: 'var(--neon-blue)' }}>
                15+
              </div>
              <p className="text-muted-foreground">Technologies</p>
            </div>
            <div>
              <div className="mb-2" style={{ color: 'var(--neon-blue)' }}>
                3+
              </div>
              <p className="text-muted-foreground">Hackathon Wins</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements Section */}
      <Achievements />
    </section>
  );
}
