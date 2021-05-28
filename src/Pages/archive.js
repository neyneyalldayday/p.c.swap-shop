import React from 'react'
import PhotoArchive from '../components/PhotoArchive'


const Archive = () => {
    const images = [
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        ]
    return (
        <div>
           <PhotoArchive images={images} /> 
        </div>
    )
}

export default Archive
