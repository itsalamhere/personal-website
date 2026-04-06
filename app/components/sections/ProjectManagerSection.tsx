'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
} from 'lucide-react'
import { PROJECT_MANAGER_PROJECTS } from '@/app/lib/constants'
import { ProjectCard, SectionHeader } from './ProjectComponents'

// Project Manager section
export default function ProjectManagerSection() {
  return (
    <section id="project-manager" className="section-padding bg-ds-dark-surface">
      <div className="container-padding">
        {/* Section Header */}
        <SectionHeader
          icon={<Briefcase className="h-4 w-4" />}
          label="Project Manager"
          title="Delivering Successful Projects"
          description="Leading cross-functional teams to deliver projects on time, within scope, and exceeding stakeholder expectations through effective planning and execution."
        />

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECT_MANAGER_PROJECTS.map((project, index) => (
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
