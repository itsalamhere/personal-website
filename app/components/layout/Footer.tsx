'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  ArrowUp,
  ExternalLink,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SOCIAL_LINKS, NAVIGATION_LINKS, SITE_CONFIG } from '@/app/lib/constants'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links (starting with #)
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="relative bg-ds-dark-surface border-t border-ds-border overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 gradient-bg-diagonal opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-ds-primary to-ds-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-bold text-xl gradient-text">
                  {SITE_CONFIG.name}
                </span>
              </div>
              <p className="text-ds-text-secondary mb-6 max-w-md">
                {SITE_CONFIG.description}
              </p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-ds-surface rounded-lg text-ds-text-secondary hover:text-ds-primary transition-colors duration-200 border border-ds-border hover:border-ds-primary/50"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-ds-text-primary mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-ds-text-secondary hover:text-ds-primary transition-colors duration-200 flex items-center group cursor-pointer"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-ds-text-primary mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center space-x-2 text-ds-text-secondary hover:text-ds-primary transition-colors duration-200 group"
                >
                  <Mail className="h-4 w-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {SITE_CONFIG.email}
                  </span>
                </a>
                <div className="flex items-center space-x-2 text-ds-text-secondary">
                  <ExternalLink className="h-4 w-4" />
                  <span>{SITE_CONFIG.location}</span>
                </div>
              </div>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary mt-4"
                >
                  Contact Me
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-6 border-t border-ds-border"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="text-ds-text-secondary text-sm">
              <span>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</span>
            </div>
            <div className="text-ds-text-secondary text-sm">
              <span>Built with Next.js and Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 p-3 bg-ds-primary text-ds-text-primary rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-200 z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </footer>
  )
}
