import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ApplicantDashboard from './pages/Dashboard/Applicant'
import EmployerDashboard from './pages/Dashboard/Employer'
import AdminDashboard from './pages/Dashboard/Admin'
import './index.css' // Fixed import statement

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/jobs" element={<Layout><Jobs /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/applicant" element={<Layout><ApplicantDashboard /></Layout>} />
          <Route path="/dashboard/employer" element={<Layout><EmployerDashboard /></Layout>} />
          <Route path="/dashboard/admin" element={<Layout><AdminDashboard /></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App