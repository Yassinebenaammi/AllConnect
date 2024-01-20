import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../App.css';
import SectionSeparator from './SectionSeparator';


function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Yassine BEN.AAMMI',
      role: 'FrontEnd Developper',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/yassine.jpg',
      social: {
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/'
      }
    },
    {
      id: 2,
      name: 'Mohammed ERRMIOUI',
      role: 'BackEnd Developper',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/yassine.jpg',
      social: {
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/'
      }
    },
    {
      id: 3,
      name: 'Ismail ELADDIOUI',
      role: 'Graphic Designer',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/yassine.jpg',
      social: {
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
        github: 'https://github.com/'
      }
    }
  ];

  return (

<div className="container mt-5">
<h1><SectionSeparator title="Team." /></h1>

      <div className="row mt-5">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-md-4 tm-card ">
            <div className="team-card text-center ">
              <div className="team-image">
                <img src={process.env.PUBLIC_URL + member.image} alt={member.name} className="img-fluid roundedimg" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="team-description">{member.description}</p>
              <div className="social-icons d-flex justify-content-center">
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
