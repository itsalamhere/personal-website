import { SocialLink, NavLink, Project, ProjectCategory } from '@/app/types'

export const SITE_CONFIG = {
  name: 'Mohammad Alamsyah',
  title: 'Data Analyst, Data Scientist & Project Manager',
  description:
    'Transforming data into actionable insights and delivering successful projects through data-driven decision making',
  email: 'mohamadalamsyah74@gmail.com',
  location: 'Bandung, Indonesia',
  bio: [
    `I am a versatile professional with expertise spanning Data Analysis, Data Science, and Project Management. I specialize in transforming complex data into actionable insights that drive business decisions and lead successful project deliveries.`,
    `With a strong foundation in statistical analysis, machine learning, and agile methodologies, I bridge the gap between technical data solutions and business objectives. I'm passionate about using data to solve real-world problems and deliver measurable results.`,
  ],
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/itsalamhere',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohamadalamsyah/',
    icon: 'linkedin',
  },
  {
    platform: 'Email',
    url: 'mailto:mohamadalamsyah74@gmail.com',
    icon: 'mail',
  },
]

export const TYPING_ROLES = [
  'Data Analyst',
  'Data Scientist',
  'Project Manager',
]

export const NAVIGATION_LINKS: NavLink[] = [
  { name: 'Home', href: '#hero', icon: 'home' },
  { name: 'Data Analyst', href: '#data-analyst', icon: 'bar-chart' },
  { name: 'Data Scientist', href: '#data-scientist', icon: 'brain' },
  { name: 'Project Manager', href: '#project-manager', icon: 'briefcase' },
  { name: 'Contact', href: '#contact', icon: 'mail' },
]

// Sample projects for Data Analyst section
export const DATA_ANALYST_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sales Performance Dashboard',
    description: 'Interactive dashboard analyzing sales trends across multiple regions with predictive forecasting.',
    longDescription: 'Developed a comprehensive sales analytics dashboard that tracks KPIs across 5 regions. Implemented time-series forecasting models to predict quarterly revenue with 92% accuracy. The dashboard reduced reporting time by 70% and helped identify underperforming markets.',
    category: 'data-analytics',
    techStack: ['Python', 'Pandas', 'Tableau', 'SQL', 'Excel'],
    date: '2024-01-15',
    featured: true,
    metrics: [
      { value: '92%', label: 'Forecast Accuracy' },
      { value: '70%', label: 'Time Saved' },
    ],
  },
  {
    id: '2',
    title: 'Customer Segmentation Analysis',
    description: 'RFM analysis and cohort analysis to identify high-value customer segments.',
    longDescription: 'Performed Recency, Frequency, Monetary (RFM) analysis on 100K+ customers. Identified 5 distinct customer segments and developed targeted marketing strategies. Resulted in 25% increase in customer retention.',
    category: 'data-analytics',
    techStack: ['Python', 'scikit-learn', 'Matplotlib', 'SQL'],
    date: '2023-11-20',
    metrics: [
      { value: '25%', label: 'Retention Increase' },
      { value: '100K+', label: 'Customers Analyzed' },
    ],
  },
  {
    id: '3',
    title: 'Market Research Report',
    description: 'Comprehensive market analysis with competitor benchmarking and trend identification.',
    longDescription: 'Conducted in-depth market research for product launch strategy. Analyzed competitor data, market trends, and customer feedback. Delivered actionable insights that guided the successful launch of 3 new products.',
    category: 'data-analytics',
    techStack: ['Excel', 'Power BI', 'Survey Tools', 'R'],
    date: '2023-09-10',
  },
]

// Sample projects for Data Scientist section
export const DATA_SCIENTIST_PROJECTS: Project[] = [
  {
    id: '4',
    title: 'Churn Prediction Model',
    description: 'Machine learning model to predict customer churn with 89% accuracy.',
    longDescription: 'Built and deployed a machine learning pipeline to predict customer churn. Used XGBoost and Random Forest algorithms, achieving 89% accuracy. The model helped the retention team proactively engage at-risk customers, reducing churn by 15%.',
    category: 'data-science',
    techStack: ['Python', 'XGBoost', 'scikit-learn', 'pandas', 'AWS'],
    date: '2024-02-10',
    featured: true,
    metrics: [
      { value: '89%', label: 'Model Accuracy' },
      { value: '15%', label: 'Churn Reduction' },
    ],
  },
  {
    id: '5',
    title: 'Demand Forecasting System',
    description: 'Time-series forecasting model for inventory optimization.',
    longDescription: 'Developed an ARIMA and LSTM-based forecasting system to predict product demand across 500+ SKUs. Reduced overstock by 30% and stockouts by 45%, saving $500K annually in inventory costs.',
    category: 'data-science',
    techStack: ['Python', 'TensorFlow', 'Statsmodels', 'SQL', 'Docker'],
    date: '2023-12-05',
    metrics: [
      { value: '30%', label: 'Overstock Reduction' },
      { value: '$500K', label: 'Annual Savings' },
    ],
  },
  {
    id: '6',
    title: 'Sentiment Analysis Pipeline',
    description: 'NLP pipeline to analyze customer feedback and social media sentiment.',
    longDescription: 'Created an end-to-end NLP pipeline using BERT to analyze customer reviews and social media mentions. Classified sentiment in real-time and generated weekly sentiment reports for product teams.',
    category: 'data-science',
    techStack: ['Python', 'Transformers', 'PyTorch', 'FastAPI', 'MongoDB'],
    date: '2023-10-15',
  },
]

// Sample projects for Project Manager section
export const PROJECT_MANAGER_PROJECTS: Project[] = [
  {
    id: '7',
    title: 'CRM Implementation',
    description: 'Led cross-functional team in implementing enterprise CRM system.',
    longDescription: 'Managed end-to-end implementation of Salesforce CRM for 200+ users. Coordinated between IT, Sales, and Customer Success teams. Delivered project on time and 10% under budget, resulting in 40% improvement in sales workflow efficiency.',
    category: 'project-management',
    techStack: ['Salesforce', 'Jira', 'Confluence', 'Agile', 'Scrum'],
    date: '2024-01-20',
    featured: true,
    metrics: [
      { value: '200+', label: 'Users Onboarded' },
      { value: '40%', label: 'Efficiency Gain' },
    ],
  },
  {
    id: '8',
    title: 'Data Migration Project',
    description: 'Orchestrated migration of legacy data systems to cloud infrastructure.',
    longDescription: 'Led a 6-month project to migrate 10TB of legacy data to AWS cloud infrastructure. Managed a team of 8 engineers and analysts. Zero data loss achieved, with 99.9% uptime maintained throughout migration.',
    category: 'project-management',
    techStack: ['AWS', 'Jira', 'Confluence', 'Data Migration', 'Risk Management'],
    date: '2023-08-30',
    metrics: [
      { value: '10TB', label: 'Data Migrated' },
      { value: '99.9%', label: 'Uptime' },
    ],
  },
  {
    id: '9',
    title: 'Analytics Platform Launch',
    description: 'Delivered self-service analytics platform empowering business users.',
    longDescription: 'Directed the development and launch of a self-service analytics platform. Managed stakeholder expectations, vendor relationships, and a team of 5 developers. Platform now serves 150+ business users with 95% satisfaction rating.',
    category: 'project-management',
    techStack: ['Tableau', 'Agile', 'Vendor Management', 'Stakeholder Management'],
    date: '2023-06-15',
    metrics: [
      { value: '150+', label: 'Active Users' },
      { value: '95%', label: 'Satisfaction' },
    ],
  },
]

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: 'all', name: 'All Projects', count: 9 },
  { id: 'data-analytics', name: 'Data Analytics', count: 3 },
  { id: 'data-science', name: 'Data Science', count: 3 },
  { id: 'project-management', name: 'Project Management', count: 3 },
]
