
import React from 'react';

const PhotoGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={image.src}
            alt={`Photo ${index + 1}`}
            className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-96"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
