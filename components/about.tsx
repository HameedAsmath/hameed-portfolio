"use client";

import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "SCSS",
    ],
    Backend: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Kafka"],
    "DevOps & Tools": ["Docker", "AWS", "CI/CD", "Git", "Jira", "WebRTC"],
  };

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A frontend-focused full stack developer passionate about building
              scalable SaaS applications with exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a frontend-focused full stack developer with around 3 years
                of experience building scalable SaaS applications using
                React.js, TypeScript, and modern frontend technologies. Skilled
                in developing responsive, accessible, and
                cross-browser-compatible user interfaces from Figma designs,
                following WAI-ARIA and WCAG standards.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced in fullstack development with Node.js, Express, and
                PostgreSQL, along with deployment using AWS and Docker. Known
                for optimizing frontend performance, fixing critical
                vulnerabilities, and mentoring junior developers through best
                practices and code reviews.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently leading frontend development of an HRMS platform at
                Spark18, while previously contributing to the InferAI and
                Benchmarks features at SurveySparrow, directly improving
                customer analytics capabilities.
              </p>
            </motion.div>

            {/* Quick Stats Sidebar */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="p-6 rounded-lg bg-secondary/50 border border-border backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                  Experience
                </h3>
                <p className="text-3xl font-bold text-foreground">3+</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Years building SaaS apps
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                  Education
                </h3>
                <p className="text-sm text-foreground font-medium">
                  B.E Mechatronics Engineering
                </p>
                <p className="text-sm text-muted-foreground">
                  Chennai Institute of Technology
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  GPA: 8.7/10
                </p>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              Skills & Expertise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div
                  key={category}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg bg-secondary/50 border border-border backdrop-blur-sm hover:border-border transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-background/50 text-sm text-muted-foreground border border-border"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "var(--muted)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
