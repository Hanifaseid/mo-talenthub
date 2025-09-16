import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Briefcase, Clock, DollarSign } from 'lucide-react'
import { MOCK_JOBS } from '../../utils/constants'
import Button from '../ui/Button'
import Card from '../ui/Card'

const JobListings = () => {
  const [visibleJobs, setVisibleJobs] = useState(6)

  const loadMore = () => {
    setVisibleJobs(prev => prev + 3)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Job Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting career opportunities from top companies around the world. 
            Find your perfect match today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {MOCK_JOBS.slice(0, visibleJobs).map((job, index) => (
            <Card 
              key={job.id}
              hover
              className="p-6 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-primary-600 font-medium">{job.company}</p>
                </div>
                <div className="bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full">
                  {job.type}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase size={16} className="mr-2" />
                  <span>{job.category}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign size={16} className="mr-2" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span>Posted {job.postedDate}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {job.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {job.applications} applications
                </span>
                <Link to={`/jobs/${job.id}`}>
                  <Button size="small">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {visibleJobs < MOCK_JOBS.length && (
          <div className="text-center fade-in">
            <Button onClick={loadMore} variant="outline" size="large">
              Load More Jobs
            </Button>
          </div>
        )}

        <div className="text-center mt-16">
          <Link to="/jobs">
            <Button size="large">
              View All Job Opportunities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JobListings