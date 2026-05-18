'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Spark18',
    role: 'Software Developer',
    period: 'July 2025 – Present',
    description: 'Leading frontend development and mentoring the team',
    highlights: [
      'Led frontend development of the company\'s HRMS platform, handling code reviews, feature enhancements, and edge-case handling for stable, production-ready releases',
      'Mentored junior developers through code reviews and best practices, while contributing backend logic using Express and PostgreSQL',
      'Ensured seamless integration and reliable application performance across the platform',
    ],
  },
  {
    company: 'Surveysparrow',
    role: 'Frontend Developer',
    period: 'May 2023 – June 2025',
    description: 'Built scalable SaaS features with focus on performance',
    highlights: [
      'Developed InferAI and Benchmarks features for performance comparison across teams, directly improving customer analytics capabilities',
      'Improved frontend performance using React Window for virtualized rendering, reducing DOM overhead by 85%',
      'Optimized application load time by 40% through lazy loading, memoization, and component splitting',
      'Fixed critical XSS and email spoofing vulnerabilities and ensured i18n compliance across features',
    ],
  },
]

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Proven track record of building and shipping product features for fast-growing SaaS companies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-0 top-20 bottom-0 w-px bg-gradient-to-b from-foreground to-muted hidden md:block" />
                )}

                {/* Timeline Dot */}
                <div className="absolute -left-2 top-5 w-4 h-4 bg-foreground rounded-full border-4 border-background hidden md:block" />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="md:ml-12 p-6 md:p-8 rounded-lg border border-border bg-secondary/30 backdrop-blur-sm hover:border-foreground transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 pt-2">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3 text-muted-foreground"
                        >
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
