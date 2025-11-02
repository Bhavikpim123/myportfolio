import { motion } from 'motion/react';
import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/bhavik', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/bhavik-pimpalkar', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bhavikapimpalkar@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="py-12 border-t relative" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-6 h-6" style={{ color: 'var(--neon-blue)' }} />
              <span className="terminal-text" style={{ color: 'var(--neon-blue)' }}>
                CodeCanvas
              </span>
            </motion.div>
            <p className="text-sm text-muted-foreground">
              Building creative, scalable web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[var(--neon-blue)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--neon-blue)' }} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4" style={{ color: 'var(--neon-blue)' }} /> using MERN Stack
          </p>
          <p className="text-sm text-muted-foreground terminal-text">
            © {currentYear} CodeCanvas. All rights reserved.
          </p>
        </div>

        {/* Tech note */}
        <div className="mt-6 text-center">
          <p className="text-xs terminal-text" style={{ color: 'var(--neon-blue)' }}>
            $ echo "Thanks for visiting!"
          </p>
        </div>
      </div>
    </footer>
  );
}
