import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import './Chumma.css'; // We will define simple CSS here

function Chumma() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/jobs" element={<JobListingPage />} />
            <Route path="/jobs/:jobId" element={<JobDetailPage />} />
            <Route path="/dashboard" element={<EmployerDashboardPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">JobFinder</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/jobs">Job Listings</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="page">
      <h1>Welcome to Job Finder</h1>
      <p>Find your dream job here!</p>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="page form-page">
      <h1>Signup</h1>
      <form>
        <input type="text" placeholder="Name" /><br/>
        <input type="email" placeholder="Email" /><br/>
        <input type="password" placeholder="Password" /><br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="page form-page">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" /><br/>
        <input type="password" placeholder="Password" /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function JobListingPage() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "ABC Corp", location: "Chennai" },
    { id: 2, title: "Backend Developer", company: "XYZ Ltd", location: "Bangalore" },
    { id: 3, title: "Full Stack Developer", company: "TechSoft", location: "Remote" },
  ];

  return (
    <div className="page">
      <h1>Job Listings</h1>
      <div className="job-cards">
        {jobs.map(job => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <Link to={`/jobs/${job.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function JobDetailPage() {
  const { jobId } = useParams();

  return (
    <div className="page">
      <h1>Job Detail</h1>
      <p>Showing details for Job ID: {jobId}</p>
      <p>Full job description and apply button can go here.</p>
    </div>
  );
}

function EmployerDashboardPage() {
  return (
    <div className="page">
      <h1>Employer Dashboard</h1>
      <p>Post new jobs, manage listings, view applicants.</p>
    </div>
  );
}

export default Chumma;
