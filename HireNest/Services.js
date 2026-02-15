import React, { useState, useEffect } from 'react';
import './Services.css'; 
import { useNavigate } from 'react-router-dom';

const professionals = [
  { id: 1, name: 'Backend Developer', company: "TechSoft", location: "Remote" },
  { id: 2, name: 'UI/UX Designer', company: 'DesignHub', location: 'Bangalore' },
{ id: 3, name: 'Data Analyst', company: 'InsightCorp', location: 'Mumbai' },
{ id: 4, name: 'Frontend Developer', company: 'WebWorks', location: 'Chennai' },
{ id: 5, name: 'HR Manager', company: 'PeopleFirst', location: 'Hyderabad' },
{ id: 6, name: 'DevOps Engineer', company: 'CloudLink', location: 'Remote' }
  

];

const Services = () => {
    const Navigate2=useNavigate();
    const handleBook = () => {
      Navigate2("/BookingConfirmation");
    };
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProfessionals, setFilteredProfessionals] = useState(professionals);


  useEffect(() => {
    const results = professionals.filter(pro => 
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfessionals(results);
  }, [searchTerm]);

  return (
    
    <div>
    <header>
        <h1>HireNest Services</h1>
    </header>
    <div className="services-page">
       
     
      <h1>Find Jobs</h1>
 
          
      <div class="man">

      <input
        type="text"
        placeholder="Search by company name or service"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      
      <div className="professional-list">
        {filteredProfessionals.length > 0 ? (
          filteredProfessionals.map(pro => (
            <div key={pro.id} className="professional-card">
              <h2>{pro.name}</h2>
              <p>Company: {pro.company}</p>
              
              <p>Location: {pro.location}</p>
              
              <button className="book-now-btn" onClick={handleBook}>Apply Now</button>
            </div>
          ))
        ) : (
          <p>No jobs found for your search.</p>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Services;
