import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Briefcase, MapPin } from 'lucide-react'
import Button from '../ui/Button'
import Input from '../ui/Input'

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')

  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptMC00YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptLTQtNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQtNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bS00LTE2YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptLTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bS00LTE2YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptLTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bS00LTE2YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptLTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bS00LTE2YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptLTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Dream 
              <span className="text-primary-200"> Job</span> or 
              <span className="text-primary-200"> Talent</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-lg mx-auto lg:mx-0">
              TalentHub connects top talent with innovative companies. Whether you're looking for your next career move or your next star employee, we make the process simple and effective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Link to="/register?type=applicant">
                <Button size="large" className="w-full sm:w-auto">
                  Find Jobs <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/register?type=employer">
                <Button variant="outline" size="large" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-primary-600">
                  Post a Job
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white">
              <div className="flex items-center">
                <Briefcase className="mr-2 text-primary-200" size={20} />
                <span>10,000+ Jobs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-primary-200" size={20} />
                <span>Global Companies</span>
              </div>
            </div>
          </div>
          
          <div className="slide-up">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center mb-6">
                <Search className="text-primary-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Find Your Dream Job</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      type="text"
                      placeholder="Job title, skills, or company"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-3"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Where</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      type="text"
                      placeholder="City, state, or remote"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 pr-4 py-3"
                    />
                  </div>
                </div>
                
                <Button className="w-full py-3 text-lg" size="large">
                  Search Jobs
                </Button>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Popular Searches:</span>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">Developer</button>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">Designer</button>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">Marketing</button>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">Remote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero