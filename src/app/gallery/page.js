import PhotoGallery from '@/components/PhotoGallery'
import React from 'react'

const page = () => {
    const images = [
        { src: '/images/pic1.jpg' },
        { src: '/images/pic2.jpg' },
        { src: '/images/pic3.jpg' },
        // Add more images as needed
      ];
    return (
        <div className='text-center '>
            <h1 className='text-4xl font-semibold my-7 '>Photo Gallery</h1>
            <PhotoGallery  images={images} />
        </div>
    )
}

export default page
