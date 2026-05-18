"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-muted rounded-full filter blur-3xl opacity-20"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-muted rounded-full filter blur-3xl opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for freelance & full-time
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-tight"
          >
            Frontend Focused
            <br />
            <span className="text-muted-foreground">Full Stack Developer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Building scalable SaaS applications with exceptional user
            experiences. 3+ years of experience creating responsive, accessible
            interfaces with React, TypeScript, and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-foreground text-background rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://drive.google.com/file/d/1qThrSNUn9Cxl2Yr5SOUEIBLOF7MCxQAA/view?usp=sharing"
                target="blank"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 border border-border hover:border-foreground rounded-lg font-semibold transition-all duration-300 hover:bg-secondary"
              >
                Resume
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://github.com/HameedAsmath"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 border border-border hover:border-foreground rounded-lg font-semibold transition-all duration-300 hover:bg-secondary"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-border"
          >
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "15+" },
              { label: "Happy Clients", value: "20+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="space-y-2"
              >
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
