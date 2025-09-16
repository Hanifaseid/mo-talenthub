import { useState } from 'react'
import { 
  Briefcase, 
  Clock, 
  MapPin, 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  Clock as ClockIcon,
  Search,
  Filter,
  Bell,
  User,
  Settings,
  LogOut,
  BarChart3,
  Bookmark,
  MessageSquare,
  FileText
} from 'lucide-react'
import { MOCK_JOBS, APPLICATION_STATUS } from '../../utils/constants'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'

const ApplicantDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Mock applications data
  const applications = [
    {
      id: 1,
      job: MOCK_JOBS[0],
      status: APPLICATION_STATUS.PENDING,
      appliedDate: '2023-04-20',
      notes: 'Waiting for response'
    },
    {
      id: 2,
      job: MOCK_JOBS[1],
      status: APPLICATION_STATUS.REVIEWED,
      appliedDate: '2023-04-18',
      notes: 'Under review'
    },
    {
      id: 3,
      job: MOCK_JOBS[2],
      status: APPLICATION_STATUS.INTERVIEW,
      appliedDate: '2023-04-15',
      notes: 'Interview scheduled for next week'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case APPLICATION_STATUS.PENDING:
        return <ClockIcon className="text-yellow-500" size={16} />
      case APPLICATION_STATUS.REVIEWED:
        return <CheckCircle className="text-blue-500" size={16} />
      case APPLICATION_STATUS.INTERVIEW:
        return <MessageSquare className="text-purple-500" size={16} />
      case APPLICATION_STATUS.ACCEPTED:
        return <CheckCircle className="text-green-500" size={16} />
      case APPLICATION_STATUS.REJECTED:
        return <XCircle className="text-red-500" size={16} />
      default:
        return <ClockIcon className="text-gray-500" size={16} />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case APPLICATION_STATUS.PENDING:
        return 'bg-yellow-100 text-yellow-800'
      case APPLICATION_STATUS.REVIEWED:
        return 'bg-blue-100 text-blue-800'
      case APPLICATION_STATUS.INTERVIEW:
        return 'bg-purple-100 text-purple-800'
      case APPLICATION_STATUS.ACCEPTED:
        return 'bg-green-100 text-green-800'
      case APPLICATION_STATUS.REJECTED:
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, John! Here's your job search overview.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Bell size={20} className="mr-2" />
              Notifications
            </Button>
            <Button>
              <Briefcase size={20} className="mr-2" />
              Find Jobs
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Software Developer</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <CheckCircle size={14} className="mr-1" />
                    Available
                  </span>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <BarChart3 size={20} className="mr-3" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('applications')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'applications'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FileText size={20} className="mr-3" />
                  Applications
                </button>
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'saved'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Bookmark size={20} className="mr-3" />
                  Saved Jobs
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <User size={20} className="mr-3" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Settings size={20} className="mr-3" />
                  Settings
                </button>
              </nav>

              <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 mt-4">
                <LogOut size={20} className="mr-3" />
                Sign Out
              </button>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 mt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-primary-600">12</p>
                  <p className="text-sm text-gray-600">Applications Sent</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">3</p>
                  <p className="text-sm text-gray-600">Interviews</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">8</p>
                  <p className="text-sm text-gray-600">Saved Jobs</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Card */}
                <Card className="p-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <h2 className="text-2xl font-bold mb-2">Welcome to Your Job Search Hub!</h2>
                  <p className="mb-4">Your profile is 85% complete. Complete your profile to get better job matches.</p>
                  <Button variant="outline" className="bg-white text-primary-600 hover:bg-gray-100">
                    Complete Profile
                  </Button>
                </Card>

                {/* Recommended Jobs */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Recommended Jobs</h3>
                    <Button variant="outline" size="small">
                      View All
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {MOCK_JOBS.slice(0, 3).map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                            <Briefcase className="text-primary-600" size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{job.title}</h4>
                            <p className="text-primary-600">{job.company}</p>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <MapPin size={14} className="mr-1" />
                              {job.location}
                              <span className="mx-2">•</span>
                              <DollarSign size={14} className="mr-1" />
                              {job.salary}
                            </div>
                          </div>
                        </div>
                        <Button>Apply Now</Button>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Application Status */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Application Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <ClockIcon className="text-blue-600" size={24} />
                      </div>
                      <p className="text-2xl font-bold text-blue-600">5</p>
                      <p className="text-sm text-gray-600">Pending</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="text-green-600" size={24} />
                      </div>
                      <p className="text-2xl font-bold text-green-600">3</p>
                      <p className="text-sm text-gray-600">Interview</p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <XCircle className="text-red-600" size={24} />
                      </div>
                      <p className="text-2xl font-bold text-red-600">2</p>
                      <p className="text-sm text-gray-600">Rejected</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'applications' && (
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Your Applications</h3>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        placeholder="Search applications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full md:w-64"
                      />
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter size={20} className="mr-2" />
                      Filters
                    </Button>
                  </div>
                </div>

                {showFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                      <option>All Status</option>
                      {Object.values(APPLICATION_STATUS).map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                      <option>All Types</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                    </select>
                    <Input
                      type="date"
                      placeholder="Date applied"
                      className="w-full"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{application.job.title}</h4>
                          <p className="text-primary-600">{application.job.company}</p>
                          <div className="flex items-center text-sm text-gray-600 mt-2">
                            <MapPin size={14} className="mr-1" />
                            {application.job.location}
                            <span className="mx-2">•</span>
                            <DollarSign size={14} className="mr-1" />
                            {application.job.salary}
                            <span className="mx-2">•</span>
                            <Clock size={14} className="mr-1" />
                            Applied on {application.appliedDate}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                            {getStatusIcon(application.status)}
                            <span className="ml-1">{application.status}</span>
                          </span>
                          <p className="text-sm text-gray-500 mt-2">{application.notes}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicantDashboard