// SectionSeparator.js
import React from 'react';
import '../App.css'

function SectionSeparator({ title }) {
  return (
    <div className="section-separator">
      <div className="separator-line"></div>
      <div className="separator-title">{title}</div>
    </div>
  );
}

export default SectionSeparator;
