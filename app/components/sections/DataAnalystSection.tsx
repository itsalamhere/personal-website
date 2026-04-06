'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
} from 'lucide-react'
import { DATA_ANALYST_PROJECTS } from '@/app/lib/constants'
import { ProjectCard, SectionHeader } from './ProjectComponents'

// Data Analyst section
export default function DataAnalystSection() {
  return (
    <section id="data-analyst" className="section-padding bg-ds-dark-surface">
      <div className="container-padding">
        {/* Section Header */}
        <SectionHeader
          icon={<BarChart3 className="h-4 w-4" />}
          label="Data Analyst"
          title="Transforming Data into Insights"
          description="Leveraging analytical tools and methodologies to uncover patterns, create visualizations, and deliver actionable business intelligence."
        />

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {DATA_ANALYST_PROJECTS.map((project, index) => (
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
