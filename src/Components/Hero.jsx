import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const handleDownloadPDF = () => {
    // Provide the path to your PDF file
    const pdfFilePath = process.env.PUBLIC_URL + '/assets/report.pdf';

    // Trigger download by creating a link element
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="container-fluid hero-section">
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5 content d-flex align-items-center justify-content-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeftVariants}
              transition={{ duration: 2 }}
            >
              <div className="hero-content text-center">
                <h1 className='hero-title'>Turning Ideas Into Reality</h1>
                {/* Hide the hero-desc on tablets (sm) */}
                <p className='hero-desc '>From ideation to implementing, developing, and streamlining workflows – we're here to help build your practical startup.</p>
                <button className="btn btn-primary gradient-button mx-3" onClick={handleDownloadPDF}>View Report</button>
              </div>
            </motion.div>
          </div>
          {/* The image column is hidden on small screens (mobile and tablets) */}
          <div className="col-md-6 d-none d-sm-flex align-items-center justify-content-center">
            <img src={process.env.PUBLIC_URL + '/assets/img1.png'} alt="Hero" className="img-fluid img-hero d-none d-md-block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
