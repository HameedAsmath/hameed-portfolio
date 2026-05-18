"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Loveable Clone",
    description:
      "An AI-powered UI generation platform with real-time streaming capabilities and WebContainers support.",
    features: [
      "WebContainers support for live code execution",
      "Real-time SSE-based streaming responses",
      "BAML syntax parsing",
      "Backend built with Express.js",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "WebContainers",
      "Express.js",
      "SSE",
    ],
    github: "https://github.com/HameedAsmath/loveable-clone",
  },
  {
    title: "Point of Sales System",
    description:
      "A comprehensive POS system for wholesale business operations with real-time stock tracking and analytics.",
    features: [
      "Real-time stock tracking and low-stock alerts",
      "Transactional updates using PostgreSQL",
      "Responsive UI with Shadcn and Tailwind",
      "Docker containerization with CI/CD pipelines",
      "VPS deployment for production use",
    ],
    technologies: ["React.js", "PostgreSQL", "Docker", "CI/CD", "Tailwind CSS"],
    github: "https://github.com/HameedAsmath/inventory-management",
  },
  // {
  //   title: "Loveable Clone",
  //   description:
  //     "Frontend implementation of an AI-powered UI builder with real-time code generation and preview.",
  //   features: [
  //     "WebRTC implementation for peer communication",
  //     "Real-time media streaming",
  //     "Responsive and interactive UI",
  //     "Modern React architecture",
  //   ],
  //   technologies: ["React.js", "TypeScript", "WebRTC", "Tailwind CSS"],
  //   github: "https://github.com/HameedAsmath",
  // },
];

export function Projects() {
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

  return (
    <section id="projects" className="py-20 md:py-32 relative">
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
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects showcasing my skills in frontend
              development, full-stack engineering, and modern web technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-secondary/50 to-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="relative p-8 rounded-lg border border-border bg-secondary/20 backdrop-blur-sm hover:border-foreground/50 transition-all duration-300 h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 py-4">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <span className="flex-shrink-0 w-1 h-1 rounded-full bg-foreground mt-1.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-background/50 border border-border text-xs text-muted-foreground"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6 border-t border-border mt-6">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                    {/* <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-8"
          >
            <Link
              href="https://github.com/HameedAsmath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-foreground rounded-lg font-semibold transition-all hover:bg-secondary"
            >
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
