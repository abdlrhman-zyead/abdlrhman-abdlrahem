"use client";

import { motion } from "framer-motion";
import { Code, Database, Brain, Cloud, Smartphone, Bot } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "LangChain"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Development",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Mobile & DevOps",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "Git", "CI/CD", "Jenkins", "Nginx"],
    color: "from-orange-500 to-red-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expertise across the full stack of modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
