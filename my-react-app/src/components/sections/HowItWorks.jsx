import { useState } from 'react'
import { UserPlus, Search, Send, CheckCircle, UserCheck, Award } from 'lucide-react'

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('applicant')

  const applicantSteps = [
    {
      icon: <UserPlus size={32} className="text-primary-600" />,
      step: "Step 1",
      title: "Create Your Profile",
      description: "Sign up and build your professional profile with skills, experience, and portfolio."
    },
    {
      icon: <Search size={32} className="text-primary-600" />,
      step: "Step 2",
      title: "Find Perfect Jobs",
      description: "Browse thousands of curated job listings that match your skills and preferences."
    },
    {
      icon: <Send size={32} className="text-primary-600" />,
      step: "Step 3",
      title: "Apply with One Click",
      description: "Submit applications easily and track your progress throughout the hiring process."
    },
    {
      icon: <CheckCircle size={32} className="text-primary-600" />,
      step: "Step 4",
      title: "Get Hired",
      description: "Receive offers and start your new career journey with our support."
    }
  ]

  const employerSteps = [
    {
      icon: <UserCheck size={32} className="text-primary-600" />,
      step: "Step 1",
      title: "Create Company Profile",
      description: "Set up your company profile and showcase your culture and values."
    },
    {
      icon: <Award size={32} className="text-primary-600" />,
      step: "Step 2",
      title: "Post Job Opportunities",
      description: "Create detailed job listings that attract the right candidates."
    },
    {
      icon: <Search size={32} className="text-primary-600" />,
      step: "Step 3",
      title: "Discover Top Talent",
      description: "Access our database of qualified professionals and receive applications."
    },
    {
      icon: <CheckCircle size={32} className="text-primary-600" />,
      step: "Step 4",
      title: "Hire the Best",
      description: "Review candidates, conduct interviews, and make offers all in one platform."
    }
  ]

  const steps = activeTab === 'applicant' ? applicantSteps : employerSteps

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're looking for a job or looking to hire, our process is designed 
            to be simple, efficient, and effective for everyone.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setActiveTab('applicant')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTab === 'applicant'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              For Job Seekers
            </button>
            <button
              onClick={() => setActiveTab('employer')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTab === 'employer'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              For Employers
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-md h-full transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-primary-600 font-semibold mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks