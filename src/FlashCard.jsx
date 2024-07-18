import React, { useState, useRef } from 'react';

function FlashCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Using useRef to simulate the object you provided
  const cardDetails = useRef({
    id: '1',
    native_text: "red",
    foreign_text: 'rouge',
    story_line: 'https://iamsnehashis.com/',
    img: 'https://www.gstatic.com/webp/gallery/2.jpg'
  }).current; 

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Styles
  const containerStyles = {
    perspective: '1000px',
    width: '300px',
    height: '200px',
    cursor: 'pointer',
    margin: '20px auto'
  };

  const cardStyles = {
    width: '100%',
    height: '100%',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
  };

  const faceStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    fontSize: '2rem',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '10px'
  };

  const backFaceStyles = {
    ...faceStyles,
    backgroundColor: '#28a745',
    transform: 'rotateY(180deg)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyles} onClick={handleFlip}>
      <div style={cardStyles}>
        <div style={faceStyles}>
          {cardDetails.native_text}
        </div>
        <div style={backFaceStyles}>
          {cardDetails.foreign_text}
          <a 
          href={cardDetails.story_line} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ marginTop: '20px', color: '#fff' }}>
            Story Link
          </a>
          <img  src={cardDetails.img} 
                alt="Illustration" 
                style={{ width: '90%', marginTop: '10px', maxHeight: '60px', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
