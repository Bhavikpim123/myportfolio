import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Terminal, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = 'service_dn16c5p'; // Replace with your EmailJS service ID
    const templateID = 'template_7fysbl4'; // Replace with your EmailJS template ID
    const publicKey = 'LstF8hZuqPwdHBtSt'; // Replace with your EmailJS public key

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Bhavik Pimpalkar',
      to_email: 'bhavikpimpalkar@gmail.com'
    };

    try {
      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // Show success message
      toast.success('Message sent successfully!', {
        description: 'Thanks for reaching out. I\'ll get back to you soon!'
      });

      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly at bhavikpimpalkar@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const terminalLines = [
    '> Initializing contact module...',
    '> Loading encryption protocols...',
    '> Ready to receive message',
    '> Awaiting input...'
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--neon-blue)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span style={{ color: 'var(--neon-blue)' }}>07.</span> Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Terminal preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border overflow-hidden"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            {/* Terminal header */}
            <div 
              className="px-4 py-3 flex items-center gap-2 border-b"
              style={{ 
                backgroundColor: 'var(--secondary)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <Terminal className="w-4 h-4 ml-2" style={{ color: 'var(--neon-blue)' }} />
              <span className="text-sm terminal-text">contact.sh</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 terminal-text text-sm space-y-2">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  style={{ color: 'var(--neon-blue)' }}
                >
                  {line}
                </motion.div>
              ))}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-4 rounded-lg border flex items-center gap-2"
                  style={{
                    backgroundColor: 'rgba(57, 255, 20, 0.1)',
                    borderColor: 'var(--neon-green)',
                    color: 'var(--neon-green)'
                  }}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}

              <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                <p>// You can also reach me at:</p>
                <p style={{ color: 'var(--neon-blue)' }}>email: bhavikpimpalkar@gmail.com</p>
                <p style={{ color: 'var(--neon-blue)' }}>phone: +91 9359870044</p>
                <p style={{ color: 'var(--neon-blue)' }}>location: Wardha, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  style={{
                    backgroundColor: 'var(--input-background)',
                    borderColor: 'var(--border)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  style={{
                    backgroundColor: 'var(--input-background)',
                    borderColor: 'var(--border)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none"
                  style={{
                    backgroundColor: 'var(--input-background)',
                    borderColor: 'var(--border)'
                  }}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || submitted}
                className="w-full gap-2"
                style={{
                  background: submitted ? 'var(--neon-green)' : 'var(--neon-blue)',
                  color: 'var(--background)'
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Sent!
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * This form sends messages directly to my email using EmailJS.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}