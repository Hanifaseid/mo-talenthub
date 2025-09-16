export const JOB_TYPES = {
  FULL_TIME: 'Full-time',
  PART_TIME: 'Part-time',
  CONTRACT: 'Contract',
  INTERNSHIP: 'Internship',
  REMOTE: 'Remote'
}

export const JOB_CATEGORIES = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Marketing',
  'Sales',
  'Design',
  'Other'
]

export const APPLICATION_STATUS = {
  PENDING: 'Pending',
  REVIEWED: 'Reviewed',
  INTERVIEW: 'Interview',
  REJECTED: 'Rejected',
  ACCEPTED: 'Accepted'
}

export const MOCK_JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: JOB_TYPES.FULL_TIME,
    category: 'Technology',
    salary: '$120,000 - $150,000',
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    requirements: ['5+ years of React experience', 'TypeScript knowledge', 'Team leadership skills'],
    postedDate: '2023-04-15',
    applications: 24
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'DesignHub',
    location: 'Remote',
    type: JOB_TYPES.REMOTE,
    category: 'Design',
    salary: '$90,000 - $110,000',
    description: 'Join our design team to create beautiful and functional user interfaces...',
    requirements: ['3+ years of UI/UX design', 'Figma proficiency', 'Portfolio required'],
    postedDate: '2023-04-10',
    applications: 18
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'DataWorks',
    location: 'New York, NY',
    type: JOB_TYPES.FULL_TIME,
    category: 'Technology',
    salary: '$130,000 - $160,000',
    description: 'Help us analyze complex data sets and build predictive models...',
    requirements: ['PhD in Data Science', 'Python expertise', 'Machine learning experience'],
    postedDate: '2023-04-05',
    applications: 32
  }
]

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Google',
    content: 'TalentHub helped me find my dream job in just two weeks! The process was smooth and the opportunities were exactly what I was looking for.',
    avatar: '/avatars/sarah.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'HR Director',
    company: 'Microsoft',
    content: 'We found exceptional talent through TalentHub. The quality of applicants was outstanding and the platform made the hiring process efficient.',
    avatar: '/avatars/michael.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Amazon',
    content: 'As a hiring manager, TalentHub saved me countless hours. The matching algorithm is spot-on and the candidates were perfectly suited for our roles.',
    avatar: '/avatars/emily.jpg'
  }
]