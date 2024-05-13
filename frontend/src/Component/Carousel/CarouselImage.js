import React from 'react';
import  './Carousel.css';
import Carousel from './Carousel';
const CarouselImage = () => {
  const images = [
    'https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain',
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Bootstrap Carousel Example</h1>
      <Carousel images={images} />
    </div>
  );
};

export default CarouselImage;
