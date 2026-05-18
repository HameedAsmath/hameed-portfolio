'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, LucideIcon, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const contactLinks: Array<{
  icon: LucideIcon
  label: string
  href: string
  value: string
}> = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hameedasmath2001@gmail.com',
    value: 'hameedasmath2001@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hameed-asmath-973462191',
    value: 'Hameed Asmath',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/HameedAsmath',
    value: 'HameedAsmath',
  },
]

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out if you&apos;d like to collaborate or just want to chat about web development!
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {contactLinks.map((contact) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group p-6 rounded-lg border border-border bg-secondary/30 backdrop-blur-sm hover:border-foreground/50 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-background border border-border group-hover:border-foreground/50 transition-colors">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {contact.label}
                      </p>
                      <p className="text-foreground font-medium mt-1 truncate">
                        {contact.value}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 py-12"
          >
            <p className="text-muted-foreground text-lg">
              Or send me a message on any of the platforms above. I&apos;ll get back to you as soon as possible!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="mailto:hameedasmath2001@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Send Email <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
