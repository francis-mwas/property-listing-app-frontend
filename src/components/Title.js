import React from 'react';

function Title({ title }) {
  return (
    <div className="section-title">
      <div className="section-title__text title__text">
        <h2>{title}</h2>
      </div>
      <div className="under-line"></div>
    </div>
  );
}

export default Title;
