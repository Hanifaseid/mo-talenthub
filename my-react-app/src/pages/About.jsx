import { 
  Users, 
  Target, 
  Heart, 
  Award, 
  Globe, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const About = () => {
  const values = [
    {
      icon: <Target size={40} className="text-primary-600" />,
      title: "Our Mission",
      description: "To connect talented professionals with amazing opportunities and help companies find their perfect hires."
    },
    {
      icon: <Heart size={40} className="text-primary-600" />,
      title: "Our Passion",
      description: "We're passionate about making the job search and hiring process simpler, faster, and more effective for everyone."
    },
    {
      icon: <Globe size={40} className="text-primary-600" />,
      title: "Global Reach",
      description: "We believe talent knows no borders. Our platform connects people and opportunities across the globe."
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Active Users' },
    { number: '10,000+', label: 'Job Postings' },
    { number: '2,500+', label: 'Companies' },
    { number: '95%', label: 'Success Rate' }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/team/sarah.jpg',
      bio: 'Former tech executive with 15+ years in the industry.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/team/michael.jpg',
      bio: 'Software engineer and product visionary with a passion for AI.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '/team/emily.jpg',
      bio: 'Award-winning designer focused on user experience.'
    },
    {
      name: 'David Kim',
      role: 'Head of Growth',
      image: '/team/david.jpg',
      bio: 'Growth marketing expert with a track record of scaling startups.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TalentHub</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're revolutionizing the way people find jobs and companies hire talent. 
            Our platform combines cutting-edge technology with human insight to create 
            meaningful connections.
          </p>
          <Button variant="outline" className="bg-white text-primary-600 hover:bg-gray-100">
            Join Our Team <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TalentHub was founded in 2020 by a team of tech industry veterans who saw 
                firsthand how broken the hiring process was. Both job seekers and employers 
                were frustrated with existing platforms.
              </p>
              <p className="text-gray-600 mb-6">
                We set out to create a platform that would use intelligent matching algorithms, 
                combined with human curation, to make better connections between talent and opportunity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-600">Founded in 2020</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-600">Headquartered in San Francisco</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-600">50+ team members worldwide</span>
                </div>
              </div>
            </div>
            <div className="slide-up">
              <div className="bg-primary-100 rounded-2xl p-8">
                <BarChart3 size={64} className="text-primary-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Our Impact</h3>
                <p className="text-gray-600 text-center">
                  We've helped thousands of people find meaningful work and companies 
                  build amazing teams. Our platform reduces hiring time by 40% on average.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at TalentHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind TalentHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
                <div className="flex justify-center space-x-3 mt-4">
                  <button className="text-gray-400 hover:text-primary-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-primary-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join thousands of professionals and companies who are already using TalentHub 
            to transform their hiring experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-white text-primary-600 hover:bg-gray-100">
              Create Account
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About