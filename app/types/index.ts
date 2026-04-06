// Type definitions

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface NavLink {
  name: string
  href: string
  icon: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: string
  image?: string
  githubUrl?: string
  liveUrl?: string
  techStack: string[]
  date: string
  featured?: boolean
  metrics?: { value: string; label: string }[]
}

export interface ProjectCategory {
  id: string
  name: string
  count: number
}
