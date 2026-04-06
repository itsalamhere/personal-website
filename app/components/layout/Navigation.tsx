'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Home,
  BarChart3,
  Brain,
  Briefcase,
  Mail,
} from 'lucide-react'
import { NAVIGATION_LINKS, SITE_CONFIG } from '@/app/lib/constants'
import { cn } from '@/app/lib/utils'

// Map of icons for navigation links
const iconMap = {
  home: Home,
  'bar-chart': BarChart3,
  brain: Brain,
  briefcase: Briefcase,
  mail: Mail,
}

// Navigation component
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)

  // Handle scroll event and detect hero section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Check if we're over the hero section
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        const navHeight = 64 // Navigation height
        // Consider we're over hero if hero section overlaps with navigation area
        setIsOverHero(heroRect.bottom > navHeight && heroRect.top < navHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen)

  // Handle smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }
  }

  // Variants for navigation
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  // Variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? isOverHero
              ? "bg-white/20 backdrop-blur-md border-b border-gray-700/30 shadow-lg"
              : "glass-effect border-b border-ds-border-light/50 shadow-dark"
            : isOverHero
              ? "bg-white/10 backdrop-blur-sm"
              : "bg-transparent"
        )}
      >
        {/* Navigation container */}
        <div className="container mx-auto px-8 md:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Name/Logo */}
            <Link href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-ds-primary to-ds-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className={cn(
                  "font-bold text-xl whitespace-nowrap transition-colors duration-300",
                  isOverHero ? "text-gray-900" : "text-white"
                )}>
                  {SITE_CONFIG.name}&apos;s <span className="text-ds-primary">Portfolio</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Hidden on mobile and tablet, visible on lg+ */}
            <div className="hidden lg:flex items-center space-x-6">
              {NAVIGATION_LINKS.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors duration-200 group flex items-center space-x-2 whitespace-nowrap",
                      isOverHero
                        ? "text-gray-800 hover:text-gray-900"
                        : "text-ds-text-secondary hover:text-ds-text-primary"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.name}</span>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-ds-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  </Link>
                )
              })}
            </div>

            {/* Tablet Navigation - Horizontal scrollable for md screens */}
            <div className="hidden md:flex lg:hidden items-center overflow-x-auto scrollbar-hide max-w-[50vw]">
              <div className="flex items-center space-x-4 px-2">
                {NAVIGATION_LINKS.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap]

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={cn(
                        "relative px-2 py-2 text-sm font-medium transition-colors duration-200 group flex items-center space-x-1 whitespace-nowrap flex-shrink-0",
                        isOverHero
                          ? "text-gray-800 hover:text-gray-900"
                          : "text-ds-text-secondary hover:text-ds-text-primary"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{link.name}</span>
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-ds-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Mobile Menu Button - Visible on mobile and tablet (md and below) */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className={cn(
                "lg:hidden p-2 transition-colors duration-200",
                isOverHero
                  ? "text-gray-800 hover:text-gray-900"
                  : "text-ds-text-secondary hover:text-ds-text-primary"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMenu}
            />

            {/* Menu */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md border-l border-gray-300 z-50 lg:hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-xl text-gray-900">
                    {SITE_CONFIG.name}
                  </span>
                  <button
                    onClick={toggleMenu}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2 mb-8 overflow-y-auto max-h-[70vh]">
                  {NAVIGATION_LINKS.map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap]

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      >
                        <Icon className="h-5 w-5 text-gray-500" />
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
