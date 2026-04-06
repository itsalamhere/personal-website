'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MapPin,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SOCIAL_LINKS, SITE_CONFIG } from '@/app/lib/constants'
import { cn } from '@/app/lib/utils'

// Form data interface
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

// Form errors interface
interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

// Contact component
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // For now, just show success (in production, this would send to an API)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setIsSubmitting(false)
  }

  // Handle input change
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const inputClasses = "w-full px-4 py-3 bg-ds-surface border border-ds-border rounded-lg text-ds-text-primary placeholder-ds-text-secondary focus:outline-none focus:ring-2 focus:ring-ds-primary focus:border-transparent transition-all duration-200"
  const errorClasses = "w-full px-4 py-3 bg-ds-surface border border-red-500 rounded-lg text-ds-text-primary placeholder-ds-text-secondary focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"

  // Icon map
  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: Mail,
  }

  // Render the component
  return (
    <section id="contact" className="section-padding bg-ds-dark">
      <div className="container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-ds-success/20 text-ds-success px-4 py-2 rounded-full text-sm font-medium mb-4 border border-ds-success/30">
            <MessageSquare className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-10 pb-2">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-ds-text-secondary max-w-3xl mx-auto">
            Have a project in mind or just want to chat about data and analytics?
            I&apos;m always excited to discuss new opportunities and interesting challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-ds-text-primary mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ds-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={cn(
                      errors.name ? errorClasses : inputClasses
                    )}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ds-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={cn(
                      errors.email ? errorClasses : inputClasses
                    )}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ds-text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={cn(
                      errors.subject ? errorClasses : inputClasses
                    )}
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ds-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={cn(
                      errors.message ? errorClasses : inputClasses
                    )}
                    placeholder="Tell me about your project or question..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2"
                  >
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <span className="text-red-400">
                      Failed to send message. Please try again or contact me directly via email.
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Info Card */}
            <div className="card">
              <h3 className="text-2xl font-bold text-ds-text-primary mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-ds-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-ds-text-primary">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-ds-text-secondary hover:text-ds-primary transition-colors duration-200"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-ds-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-ds-text-primary">Location</p>
                    <p className="text-ds-text-secondary">{SITE_CONFIG.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-ds-success mt-0.5" />
                  <div>
                    <p className="font-medium text-ds-text-primary">Response Time</p>
                    <p className="text-ds-text-secondary">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="card">
              <h3 className="text-2xl font-bold text-ds-text-primary mb-6">Connect With Me</h3>

              <div className="grid grid-cols-1 gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]

                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-3 p-4 bg-ds-surface-light rounded-lg border border-ds-border hover:border-ds-primary/50 transition-all duration-200 group"
                    >
                      <Icon className="h-5 w-5 text-ds-text-secondary group-hover:text-ds-primary transition-colors duration-200" />
                      <div>
                        <p className="font-medium text-ds-text-primary">{social.platform}</p>
                        <p className="text-sm text-ds-text-secondary">Connect professionally</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="card">
              <h3 className="text-2xl font-bold text-ds-text-primary mb-4">Current Status</h3>

              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-ds-success rounded-full animate-pulse" />
                <div>
                  <p className="font-medium text-ds-text-primary">Available for Projects</p>
                  <p className="text-sm text-ds-text-secondary">
                    Open to discussing data analysis, data science, and project management opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
