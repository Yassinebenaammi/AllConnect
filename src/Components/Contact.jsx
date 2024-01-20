import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import SectionSeparator from './SectionSeparator';

function Contact() {
  const form = useRef();
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.user_email;
    if (!validateEmail(emailInput.value)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');

    emailjs.sendForm('service_qjcdhfp', 'template_b06ertp', form.current, 'ew9O0URAtMKtnGHAy')
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Email sent successfully!');
        // Clear form after successful submission if needed
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setSuccessMessage('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <div className='container mt-5 mb-5'>
      <h1><SectionSeparator title="Contact." /></h1>

      <div className="row">
        <div className="col-md-6">
          <h1 className='talk'>Let’s Talk</h1>
          <p>Have some big idea or brand to develop and need help? <br></br> Then reach out we'd love to hear about your project and provide help</p>
          <h3>Email :</h3>
          <p>allconnect@contact.com</p>
          <h3>Socials :</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="icon" />
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail}>
            {successMessage && (
              <div className="alert alert-success mt-3" role="alert">
                {successMessage}
              </div>
            )}
            <div className="form-group mt-3">
              <label>Name</label>
              <input className="form-control" type="text" name="user_name" required />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                type="email"
                name="user_email"
                required
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="form-group mt-3">
              <label>Message</label>
              <textarea className="form-control" name="message" required />
            </div>
            <input className="form-control mt-3 btn gradient-button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
