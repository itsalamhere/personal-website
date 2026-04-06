'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  Calendar,
  Award,
  ChevronDown,
  ChevronUp,
  Code2,
} from 'lucide-react'
import { Project } from '@/app/types'
import { formatDate, cn } from '@/app/lib/utils'

// Project card interface
interface ProjectCardProps {
  project: Project
  index: number
}

// Project card component
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="card card-hover cursor-pointer h-full" onClick={() => setIsExpanded(!isExpanded)}>
        {/* Project Image */}
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-ds-primary/20 to-ds-secondary/20">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-ds-primary/10 to-ds-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-ds-primary/40 text-6xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>
            </>
          )}
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 text-xs bg-ds-success/20 text-ds-success rounded-full border border-ds-success/30 flex items-center space-x-1 backdrop-blur-sm">
                <Award className="h-3 w-3" />
                <span>Featured</span>
              </span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-ds-text-primary group-hover:text-ds-primary transition-colors duration-200">
              {project.title}
            </h3>
            <div className="flex space-x-2 ml-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-ds-text-secondary hover:text-ds-primary transition-colors duration-200 hover:bg-ds-surface-light rounded-lg"
                >
                  <Code2 className="h-4 w-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-ds-text-secondary hover:text-ds-primary transition-colors duration-200 hover:bg-ds-surface-light rounded-lg"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-ds-text-secondary line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="tech-tag">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>

          {/* Project Meta */}
          <div className="flex items-center justify-between text-sm text-ds-text-secondary">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(project.date)}</span>
            </div>
            {project.metrics && (
              <div className="flex items-center space-x-1">
                <span className="text-ds-success font-medium">
                  {project.metrics[0].value}
                </span>
                <span className="text-ds-text-secondary text-xs">
                  {project.metrics[0].label}
                </span>
              </div>
            )}
          </div>
          
          {/* Expand indicator */}
          <div className="flex items-center justify-center pt-2 text-ds-text-secondary">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-ds-border"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-ds-text-primary mb-2">Project Overview</h4>
                  <p className="text-ds-text-secondary text-sm leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {project.metrics && (
                  <div>
                    <h4 className="font-semibold text-ds-text-primary mb-2">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="bg-ds-surface-light p-3 rounded-lg border border-ds-border">
                          <div className="text-lg font-bold text-ds-primary">{metric.value}</div>
                          <div className="text-xs text-ds-text-secondary">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-ds-text-primary mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// Section header component
interface SectionHeaderProps {
  icon: React.ReactNode
  label: string
  title: string
  description: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, label, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <div className="inline-flex items-center space-x-2 bg-ds-primary/20 text-ds-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-ds-primary/30">
      {icon}
      <span>{label}</span>
    </div>

    <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-10 pb-2">
      {title}
    </h2>
    <p className="text-xl text-ds-text-secondary max-w-3xl mx-auto">
      {description}
    </p>
  </motion.div>
)

export { ProjectCard, SectionHeader }
