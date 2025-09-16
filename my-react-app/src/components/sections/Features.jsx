import { Users, Shield, Zap, Globe, Bell, BarChart3 } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Zap size={40} className="text-primary-600" />,
      title: "Quick Hiring Process",
      description: "Streamlined application and hiring process that gets you results faster."
    },
    {
      icon: <Shield size={40} className="text-primary-600" />,
      title: "Verified Companies",
      description: "All companies are thoroughly vetted to ensure legitimate opportunities."
    },
    {
      icon: <Globe size={40} className="text-primary-600" />,
      title: "Global Reach",
      description: "Access to job opportunities and talent from around the world."
    },
    {
      icon: <Bell size={40} className="text-primary-600" />,
      title: "Smart Notifications",
      description: "Get alerted when relevant jobs or candidates match your criteria."
    },
    {
      icon: <Users size={40} className="text-primary-600" />,
      title: "Community Support",
      description: "Join a community of professionals and get support throughout your journey."
    },
    {
      icon: <BarChart3 size={40} className="text-primary-600" />,
      title: "Career Insights",
      description: "Get valuable insights into market trends and salary expectations."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TalentHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the platform with both job seekers and employers in mind, 
            creating a seamless experience for everyone involved in the hiring process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features