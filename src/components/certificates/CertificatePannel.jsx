import React from 'react';

export const CertificatePannel = ({ image, title, description }) => {
  return (
    <div className="certificate__panel">
      <a href="#">
        <img className="certificate__img" src={image} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="certificate__title">
            {title}
          </h5>
        </a>
        <p className="certificate__description mb-3">
          {description}
        </p>
      </div>
    </div>
  );
};
