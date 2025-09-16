import { useState } from 'react'
import { 
  Briefcase, 
  Users, 
  BarChart3, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Eye,
  MessageSquare,
  Calendar,
  DollarSign,
  MapPin,
  Clock,
  User,
  Settings,
  LogOut,
  FileText
} from 'lucide-react'
import { MOCK_JOBS } from '../../utils/constants'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showJobForm, setShowJobForm] = useState(false)
  const [editingJob, setEditingJob] = useState(null)

  // Mock job postings
  const jobPostings = MOCK_JOBS

  // Mock applicants data
  const applicants = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      position: 'Senior Frontend Developer',
      status: 'Reviewing',
      appliedDate: '2023-04-20',
      resume: '/resumes/sarah.pdf'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@example.com',
      position: 'Product Designer',
      status: 'Interview',
      appliedDate: '2023-04-18',
      resume: '/resumes/michael.pdf'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily@example.com',
      position: 'Data Scientist',
      status: 'Hired',
      appliedDate: '2023-04-15',
      resume: '/resumes/emily.pdf'
    }
  ]

  const handleEditJob = (job) => {
    setEditingJob(job)
    setShowJobForm(true)
  }

  const handleDeleteJob = (jobId) => {
    // Handle delete job
    console.log('Delete job:', jobId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
            <p className="text-gray-600">Welcome back, TechCorp Inc.! Manage your job postings and candidates.</p>
          </div>
          <Button onClick={() => setShowJobForm(true)}>
            <Plus size={20} className="mr-2" />
            Post New Job
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={32} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900">TechCorp Inc.</h3>
                <p className="text-gray-600">Technology Company</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <CheckCircle size={14} className="mr-1" />
                    Verified
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
                  onClick={() => setActiveTab('jobs')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'jobs'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Briefcase size={20} className="mr-3" />
                  Job Postings
                </button>
                <button
                  onClick={() => setActiveTab('applicants')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'applicants'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Users size={20} className="mr-3" />
                  Applicants
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'messages'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <MessageSquare size={20} className="mr-3" />
                  Messages
                </button>
                <button
                  onClick={() => setActiveTab('company')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'company'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Settings size={20} className="mr-3" />
                  Company Profile
                </button>
              </nav>

              <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 mt-4">
                <LogOut size={20} className="mr-3" />
                Sign Out
              </button>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 mt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Company Stats</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-primary-600">8</p>
                  <p className="text-sm text-gray-600">Active Jobs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">45</p>
                  <p className="text-sm text-gray-600">Total Applicants</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                  <p className="text-sm text-gray-600">Interviews</p>
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
                  <h2 className="text-2xl font-bold mb-2">Grow Your Team with TalentHub</h2>
                  <p className="mb-4">Your company profile is 90% complete. Complete your profile to attract better candidates.</p>
                  <Button variant="outline" className="bg-white text-primary-600 hover:bg-gray-100">
                    Complete Profile
                  </Button>
                </Card>

                {/* Recent Activity */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <Users className="text-blue-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">New Applicants</h4>
                          <p className="text-gray-600">5 new applicants in the last 24 hours</p>
                        </div>
                      </div>
                      <Button size="small">View</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <MessageSquare className="text-green-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">New Messages</h4>
                          <p className="text-gray-600">3 unread messages from candidates</p>
                        </div>
                      </div>
                      <Button size="small">View</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                          <Calendar className="text-yellow-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Upcoming Interviews</h4>
                          <p className="text-gray-600">2 interviews scheduled for tomorrow</p>
                        </div>
                      </div>
                      <Button size="small">View</Button>
                    </div>
                  </div>
                </Card>

                {/* Job Postings Summary */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Your Job Postings</h3>
                    <Button variant="outline" size="small">
                      View All
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobPostings.slice(0, 2).map((job) => (
                      <div key={job.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-900 mb-2">{job.title}</h4>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                          <span className="mx-2">•</span>
                          <DollarSign size={14} className="mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{job.applications} applications</span>
                          <div className="flex space-x-2">
                            <Button size="small" variant="outline">
                              <Eye size={16} />
                            </Button>
                            <Button size="small" variant="outline" onClick={() => handleEditJob(job)}>
                              <Edit size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'jobs' && (
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Job Postings</h3>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        placeholder="Search jobs..."
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

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Job Title</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Applications</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Posted</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobPostings.map((job) => (
                        <tr key={job.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <h4 className="font-semibold text-gray-900">{job.title}</h4>
                              <p className="text-sm text-gray-600">{job.company}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                              {job.applications}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">{job.postedDate}</td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <Button size="small" variant="outline">
                                <Eye size={16} />
                              </Button>
                              <Button size="small" variant="outline" onClick={() => handleEditJob(job)}>
                                <Edit size={16} />
                              </Button>
                              <Button size="small" variant="outline" onClick={() => handleDeleteJob(job.id)}>
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {activeTab === 'applicants' && (
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Applicants</h3>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        placeholder="Search applicants..."
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

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Candidate</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Position</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Applied</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applicants.map((applicant) => (
                        <tr key={applicant.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                <User className="text-primary-600" size={20} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">{applicant.name}</h4>
                                <p className="text-sm text-gray-600">{applicant.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm text-gray-900">{applicant.position}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                              {applicant.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">{applicant.appliedDate}</td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <Button size="small" variant="outline">
                                <FileText size={16} />
                              </Button>
                              <Button size="small" variant="outline">
                                <MessageSquare size={16} />
                              </Button>
                              <Button size="small">
                                Schedule
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerDashboard