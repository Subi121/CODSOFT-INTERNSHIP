// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <header>
                <h1>About HireNest</h1>
            </header>

            <div className="container">
            <div class="free">
                <div className="section">

                    <img src="https://clipground.com/images/clip-art-new-job-12.jpg" alt="HireNest Team" width="100" height="100" />
                    <div className="section-content">
                        <h2>Who We Are</h2>
                        <p>
                       Welcome to Hirenest, your smart gateway to opportunities! We connect talented individuals with companies looking for the perfect match—quickly, easily, and efficiently. Whether you're a job seeker exploring your next big role or a company searching for top-tier talent, Hirenest streamlines the entire process.
From verified profiles and role-specific filters to seamless scheduling and secure communication, everything you need is in one place. At Hirenest, we don’t just match jobs—we build careers and grow teams!
                            
                        </p>
                    </div>
                </div>

                <div className="section">
                    <img src="https://www.fintech.ca/wp-content/uploads/2023/09/image-1-1024x688.png" alt="Our Mission" width="100" height="100" />
                    <div className="section-content">
                    
                        <h2>Our Mission</h2>
                        <p>
                       At Hirenest, our mission is to transform the hiring landscape by seamlessly connecting talented individuals with the right companies through a reliable, intuitive platform. We aim to simplify the recruitment process for both job seekers and employers by offering smart tools, verified profiles,
                        and secure communication channels.Whether you're a professional seeking growth or an organization searching for the perfect hire, Hirenest is committed to delivering a streamlined, transparent, and empowering experience for all. We strive to make career-building and talent acquisition easier, more accessible, and more human.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            
            

            <footer>
                <p>&copy; 2025 HireNest. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
