"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Chat Application",
    description: "A sophisticated chat application powered by OpenAI GPT models with real-time messaging, file sharing, and intelligent responses.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "OpenAI", "WebSocket", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "E-Commerce Recommendation Engine",
    description: "Machine learning-powered recommendation system that increased sales by 35% through personalized product suggestions.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Comprehensive analytics platform with real-time data visualization, predictive analytics, and custom reporting.",
    image: "/api/placeholder/600/400",
    tags: ["React", "D3.js", "Node.js", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Mobile Health Tracker",
    description: "Cross-platform mobile app for health monitoring with AI-powered insights and personalized recommendations.",
    image: "/api/placeholder/600/400",
    tags: ["React Native", "Firebase", "TensorFlow Lite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Smart Home Automation System",
    description: "IoT-based home automation system with voice control, energy optimization, and predictive maintenance.",
    image: "/api/placeholder/600/400",
    tags: ["Node.js", "MQTT", "Raspberry Pi", "AWS IoT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Blockchain Voting Platform",
    description: "Secure and transparent voting system using blockchain technology with smart contracts and cryptographic verification.",
    image: "/api/placeholder/600/400",
    tags: ["Solidity", "Web3.js", "Ethereum", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and innovations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{project.title.charAt(0)}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
