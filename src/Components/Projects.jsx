// ProjectsSection.js
import React from 'react';
import SectionSeparator from './SectionSeparator';
import '../App.css';

function ProjectsSection() {
  return (
    <div className="container mt-5">
      <h1><SectionSeparator title="Projects." /></h1>

      <div className="row project-row mt-5 mb-5">
        {/* First Column (Image) */}
        <div className="col-md-6 text-center">
          <div className="project-item">
            <img src={process.env.PUBLIC_URL + '/assets/t1.jpg'} alt="Project 1" className="img-fluid rounded" />
          </div>
        </div>

        {/* Second Column (Title and Description) */}
        <div className="col-md-6 d-flex align-items-center justify-content-center text-center desc">
          <div className="project-item smaller-width">
            <h3>Delivery platform</h3>
            <p className="text-justify">
              Platform dedicated to delivery companies operating in the e-commerce sector.
              This platform is used by the company's clients and staff
            </p>
          </div>
        </div>
      </div>
      

      {/* Continue with other sections */}

      <div className="row project-row mb-5">
        {/* First Column (Image) */}
       

        {/* Second Column (Title and Description) */}
        <div className="col-md-6 d-flex align-items-center justify-content-center text-center desc ">
          <div className="project-item smaller-width">
            <h3>Coffee App</h3>
            <p className="text-justify">
            Specifically designed to simplify the daily tasks of coffee servers,
            this application aims to streamline order-taking and optimize distribution
            </p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="project-item">
            <img src={process.env.PUBLIC_URL + '/assets/t1.jpg'} alt="Project 1" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
