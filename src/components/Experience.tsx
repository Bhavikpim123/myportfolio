import { motion } from 'motion/react';
import { Briefcase, Users, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'RetalorXpert',
      location: 'Wardha',
      type: 'Internship',
      duration: 'May 2025 - July 2025',
      description: 'Led redesign focused on user engagement that increased metrics by 70%. Mentored 3,000+ students monthly.',
      achievements: [
        'Improved performance with REST API integration, reducing load times by 30%',
        'Developed dashboards using React.js, Node.js, Express.js, PostgreSQL',
        'Implemented SQL backend with CSS for responsive design'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'SQL', 'CSS']
    },
    {
      role: 'Technical Lead',
      company: 'Google Developer Groups On Campus - BITW',
      location: 'Wardha',
      type: 'Leadership',
      duration: 'Aug 2024 - Aug 2025',
      description: 'Leading 10-member technical team to empower students with modern development skills.',
      achievements: [
        'Organized events & Cloud Sprint, Flutter App Development workshops',
        'Conducted Google Cloud training sessions engaging 100+ participants',
        'Mentored students in full-stack development and cloud technologies'
      ],
      technologies: ['Google Cloud', 'Flutter', 'Firebase', 'Leadership', 'Event Management']
    },
    {
      role: 'Club Core Team Member',
      company: 'Readers Club - BITW',
      location: 'Wardha',
      type: 'Leadership',
      duration: 'Aug 2024 - Jun 2025',
      description: 'Organized technical events focused on fintech, real-world data challenges, and industry readiness.',
      achievements: [
        'Organized 10+ events spanning Communication and industry readiness',
        'Contributed to workshops and competitive events',
        'Fostered innovation and practical learning among students'
      ],
      technologies: ['SoftSkills', 'Network Building', 'Workshop Coordination']
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--neon-green)' }}
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
            <span style={{ color: 'var(--neon-blue)' }}>03.</span> Experience & Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and community leadership roles shaping my journey as a developer.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-xl border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div 
                      className="p-2 rounded-lg mt-1"
                      style={{ 
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        border: '1px solid var(--neon-blue)'
                      }}
                    >
                      {exp.type === 'Internship' ? (
                        <Briefcase className="w-5 h-5" style={{ color: 'var(--neon-blue)' }} />
                      ) : (
                        <Users className="w-5 h-5" style={{ color: 'var(--neon-blue)' }} />
                      )}
                    </div>
                    <div>
                      <h3 className="mb-1">{exp.role}</h3>
                      <p style={{ color: 'var(--neon-blue)' }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <Badge 
                    variant="outline"
                    className="w-fit"
                    style={{ 
                      borderColor: exp.type === 'Internship' ? 'var(--neon-blue)' : 'var(--neon-green)',
                      color: exp.type === 'Internship' ? 'var(--neon-blue)' : 'var(--neon-green)'
                    }}
                  >
                    {exp.type}
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                {exp.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <TrendingUp className="w-4 h-4" style={{ color: 'var(--neon-blue)' }} />
                  <span>Key Achievements</span>
                </div>
                <ul className="space-y-2 ml-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground relative before:content-['▹'] before:absolute before:-left-4" 
                      style={{ '--tw-text-opacity': '0.8' } as any}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
