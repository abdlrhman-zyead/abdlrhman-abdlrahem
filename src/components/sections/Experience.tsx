"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior AI Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading AI/ML initiatives and developing cutting-edge solutions for enterprise clients.",
    achievements: [
      "Developed AI-powered recommendation system increasing user engagement by 45%",
      "Led team of 5 engineers in building scalable ML pipelines",
      "Implemented real-time fraud detection reducing losses by 60%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Built and maintained web applications using modern technologies.",
    achievements: [
      "Developed 15+ full-stack applications using React, Node.js, and MongoDB",
      "Reduced application load time by 40% through optimization techniques",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Worked on core product features and infrastructure improvements.",
    achievements: [
      "Built RESTful APIs serving 1M+ daily requests",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Integrated third-party services and payment gateways"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-1/2"></div>
                
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-500 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <Briefcase size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
