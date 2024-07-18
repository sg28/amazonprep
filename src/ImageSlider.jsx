import React, { useState } from 'react';
import './App.css';

const photos = [
  'https://via.placeholder.com/600/92c952',
  'https://via.placeholder.com/600/771796',
  'https://via.placeholder.com/600/24f355',
  'https://via.placeholder.com/600/d32776',
  'https://via.placeholder.com/600/f66b97'
];

const IamgeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="slider">
      <button onClick={prevPhoto} className="slider-button">Previous</button>
      <img src={photos[currentIndex]} alt="slider" className="slider-image" />
      <button onClick={nextPhoto} className="slider-button">Next</button>
    </div>
  );
};

export default IamgeSlider;
