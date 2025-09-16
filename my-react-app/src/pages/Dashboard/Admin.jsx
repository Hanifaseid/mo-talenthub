import { useState } from 'react'
import { 
  Users, 
  Briefcase, 
  BarChart3, 
  Settings, 
  Shield,
  Activity,
  DollarSign,
  Search,
  Filter,
  MoreVertical,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  AlertCircle
} from 'lucide-react'
import { MOCK_JOBS } from '../../utils/constants'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showFilters, setShowFilters] = useState(false)

  // Mock data for admin dashboard
  const stats = {
    totalUsers: 12543,
    totalJobs: 892,
    totalCompanies: 456,
    revenue: 125600,
    activeUsers: 2345,
    pendingApprovals: 23
  }

  const recentActivities = [
    {
      id: 1,
      type: 'user_signup',
      description: 'New user registered: Sarah Johnson',
      time: '2 minutes ago',
      icon: <Users size={16} />
    },
    {
      id: 2,
      type: 'job_post',
      description: 'New job posted: Senior Developer at TechCorp',
      time: '15 minutes ago',
      icon: <Briefcase size={16} />
    },
    {
      id: 3,
      type: 'payment',
      description: 'Payment received from DesignHub ($299)',
      time: '1 hour ago',
      icon: <DollarSign size={16} />
    },
    {
      id: 4,
      type: 'report',
      description: 'New report submitted for review',
      time: '2 hours ago',
      icon: <AlertCircle size={16} />
    }
  ]

  const recentUsers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      type: 'Job Seeker',
      joinDate: '2023-04-20',
      status: 'Active'
    },
    {
      id: 2,
      name: 'TechCorp Inc.',
      email: 'hr@techcorp.com',
      type: 'Employer',
      joinDate: '2023-04-19',
      status: 'Verified'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael@example.com',
      type: 'Job Seeker',
      joinDate: '2023-04-18',
      status: 'Active'
    },
    {
      id: 4,
      name: 'DesignHub',
      email: 'contact@designhub.com',
      type: 'Employer',
      joinDate: '2023-04-17',
      status: 'Pending'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, Admin. Here's your platform overview.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Activity size={20} className="mr-2" />
              View Reports
            </Button>
            <Button>
              <Settings size={20} className="mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+12.5%</span>
                  <span className="text-sm text-gray-500 ml-1">from last week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="text-blue-600" size={24} />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalJobs.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+8.2%</span>
                  <span className="text-sm text-gray-500 ml-1">from last week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Briefcase className="text-green-600" size={24} />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Companies</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCompanies.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+5.7%</span>
                  <span className="text-sm text-gray-500 ml-1">from last week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="text-purple-600" size={24} />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${stats.revenue.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+18.3%</span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <DollarSign className="text-yellow-600" size={24} />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
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
                  onClick={() => setActiveTab('users')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'users'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Users size={20} className="mr-3" />
                  Users
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
                  Jobs
                </button>
                <button
                  onClick={() => setActiveTab('companies')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'companies'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Shield size={20} className="mr-3" />
                  Companies
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'reports'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Activity size={20} className="mr-3" />
                  Reports
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
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 mt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-center">
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  Review Jobs
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  View Reports
                </Button>
                <Button className="w-full justify-center">
                  System Settings
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Recent Activity */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.description}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                        <Button size="small" variant="outline">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Recent Users */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Recent Users</h3>
                    <Button variant="outline" size="small">
                      View All
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">User</th>
                          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Type</th>
                          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Join Date</th>
                          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Status</th>
                          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-4 px-4">
                              <div>
                                <h4 className="font-semibold text-gray-900">{user.name}</h4>
                                <p className="text-sm text-gray-600">{user.email}</p>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className="text-sm text-gray-600">{user.type}</span>
                            </td>
                            <td className="py-4 px-4 text-sm text-gray-600">{user.joinDate}</td>
                            <td className="py-4 px-4">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                user.status === 'Active' || user.status === 'Verified'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex space-x-2">
                                <Button size="small" variant="outline">
                                  View
                                </Button>
                                <Button size="small" variant="outline">
                                  <MoreVertical size={16} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'users' && (
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">User Management</h3>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        placeholder="Search users..."
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
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                      <option>All Types</option>
                      <option>Job Seeker</option>
                      <option>Employer</option>
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                      <option>All Status</option>
                      <option>Active</option>
                      <option>Pending</option>
                      <option>Suspended</option>
                    </select>
                    <Input
                      type="date"
                      placeholder="Join date from"
                      className="w-full"
                    />
                    <Input
                      type="date"
                      placeholder="Join date to"
                      className="w-full"
                    />
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">User</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Type</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Join Date</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <h4 className="font-semibold text-gray-900">{user.name}</h4>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm text-gray-600">{user.type}</span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">{user.joinDate}</td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              user.status === 'Active' || user.status === 'Verified'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <Button size="small" variant="outline">
                                View
                              </Button>
                              <Button size="small" variant="outline">
                                Edit
                              </Button>
                              <Button size="small" variant="outline">
                                <MoreVertical size={16} />
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

export default AdminDashboard