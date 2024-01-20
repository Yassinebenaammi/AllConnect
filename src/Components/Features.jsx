import React from 'react';

function Features() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="feature-item text-center">
            <img src={process.env.PUBLIC_URL + '/assets/u-1.PNG'} alt="Feature 1" className="img-fluid smaller-image" />
            <p>Local Expertise</p>
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="feature-item text-center">
            <img src={process.env.PUBLIC_URL + '/assets/u-2.png'} alt="Feature 2" className="img-fluid smaller-image" />
            <p>Innovation at the Core</p>
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="feature-item text-center">
            <img src={process.env.PUBLIC_URL + '/assets/u-3.png'} alt="Feature 3" className="img-fluid smaller-image" />
            <p>End-to-End Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
