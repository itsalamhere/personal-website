'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  Mail,
  Download,
  ExternalLink,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SITE_CONFIG, SOCIAL_LINKS, TYPING_ROLES } from '@/app/lib/constants'
import { cn } from '@/app/lib/utils'

// Icon map
const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
}

// Hero component
export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  // Typing animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      const currentRole = TYPING_ROLES[currentRoleIndex]
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentRoleIndex])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Scroll detection to hide/show scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        // Hide scroll indicator when hero section is not visible
        setShowScrollIndicator(rect.bottom > 0 && rect.top < window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  // Floating variants
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity
      }
    }
  }

  // Handle smooth scroll
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Render the component
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-complex">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute bottom-32 right-16 w-32 h-32 bg-white/15 rounded-full blur-xl"
        style={{ animationDelay: '-2s' }}
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"
        style={{ animationDelay: '-4s' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-padding section-padding"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            
            {/* Left Side - Profile Image and Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Profile Image - Square */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-ds-primary to-ds-secondary rounded-2xl blur-xl opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-r from-ds-primary to-ds-secondary rounded-2xl p-1">
                  <div className="w-full h-full bg-ds-dark rounded-2xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/profile/photo_profile.jpeg"
                      alt="Alam Profile"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-2xl"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

              </div>

              {/* Social Links - Below Image */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-200 group"
                    >
                      <Icon className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-200" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              variants={itemVariants}
              className="flex-1 text-center lg:text-left"
            >
              {/* Main Heading */}
              <motion.div variants={itemVariants} className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-gray-900 drop-shadow-sm">
                  Hi, I&apos;m{' '}
                  <span className="text-gray-900 drop-shadow-sm">
                    {SITE_CONFIG.name}
                  </span>
                </h1>
              </motion.div>

              {/* Typing Animation */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 h-12 flex items-center justify-center lg:justify-start drop-shadow-sm">
                  <span className="mr-2">I&apos;m a</span>
                  <span className="text-gray-900 font-semibold drop-shadow-sm">
                    {displayText}
                  </span>
                  <span className={cn(
                    "ml-1 w-0.5 h-8 bg-gray-900 transition-opacity duration-100",
                    showCursor ? "opacity-100" : "opacity-0"
                  )} />
                </div>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants} className="mb-10">
                <div className="space-y-6">
                  {SITE_CONFIG.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg sm:text-xl text-gray-800 leading-relaxed drop-shadow-sm"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScrollToSection('data-analyst')}
                  className="bg-white/30 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/40 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700/50 focus:ring-offset-2 border border-gray-700/30 flex items-center space-x-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>View My Work</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScrollToSection('contact')}
                  className="bg-transparent border-2 border-gray-700/50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/20 hover:border-gray-700/70 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700/50 focus:ring-offset-2 flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Get In Touch</span>
                </motion.button>

                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-gray-800 hover:text-gray-900 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </motion.a>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - positioned relative to viewport */}
      {showScrollIndicator && (
        <motion.div
          variants={itemVariants}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.button
            onClick={() => handleScrollToSection('data-analyst')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-800 hover:text-gray-900 transition-colors duration-200 group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      )}
    </section>
  )
}
