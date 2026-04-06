'use client'

import { motion } from 'framer-motion'
import {
  Brain,
} from 'lucide-react'
import { DATA_SCIENTIST_PROJECTS } from '@/app/lib/constants'
import { ProjectCard, SectionHeader } from './ProjectComponents'

// Data Scientist section
export default function DataScientistSection() {
  return (
    <section id="data-scientist" className="section-padding bg-ds-dark">
      <div className="container-padding">
        {/* Section Header */}
        <SectionHeader
          icon={<Brain className="h-4 w-4" />}
          label="Data Scientist"
          title="Building Intelligent Solutions"
          description="Applying machine learning and statistical modeling to solve complex problems and drive data-informed decisions."
        />

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {DATA_SCIENTIST_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
