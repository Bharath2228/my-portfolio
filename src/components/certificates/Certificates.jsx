// Certificates.jsx
import React from 'react';
import { CertificatePannel } from './CertificatePannel';
import "./certificates.css"

export const Certificates = () => {
  // Array of certificate data
  const certificates = [
    {
      image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      title: "Advanced Web Development Certificate",
      description: "This certificate showcases advanced skills in web development and best practices."
    },
    {
      image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      title: "Machine Learning Specialization",
      description: "A comprehensive course on machine learning and data science."
    },
    {
        image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
        title: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      },
      {
        image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
        title: "Advanced Web Development Certificate",
        description: "This certificate showcases advanced skills in web development and best practices."
      },
      {
        image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
        title: "Machine Learning Specialization",
        description: "A comprehensive course on machine learning and data science."
      },
      {
        image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
        title: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      },
      {
        image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
        title: "Advanced Web Development Certificate",
        description: "This certificate showcases advanced skills in web development and best practices."
      },
      {
        image: "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
        title: "Machine Learning Specialization",
        description: "A comprehensive course on machine learning and data science."
      },
    // Add more certificate objects as needed
  ];

  return (
    <section className='section'>
        <h2 className="section__title">Certificates</h2>
        <span className="section__subtitle">My Accomplishments</span>
        <div className="certificates__container container grid">
            {certificates.map((cert, index) => (
                <CertificatePannel
                    key={index}
                    image={cert.image}
                    title={cert.title}
                    description={cert.description}
                />
            ))}
        </div>
    </section>
  );
};
