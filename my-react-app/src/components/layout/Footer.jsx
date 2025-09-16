import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-400">TalentHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting talented professionals with top companies worldwide. Find your dream job or the perfect candidate with our platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-400 hover:text-primary-400 transition-colors">Browse Jobs</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-primary-400 transition-colors">Create Profile</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Career Advice</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-gray-400 hover:text-primary-400 transition-colors">Post a Job</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Browse Candidates</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary-400 transition-colors">Pricing</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Recruitment Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Tech Street, San Francisco, CA 94103</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@talenthub.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TalentHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer