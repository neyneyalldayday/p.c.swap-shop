import React from 'react'
import PhotoArchive from '../components/PhotoArchive'


export default function Index() {
    const images = [
        "../images/image4.jpg",
        "../images/image5.jpg",
        "../images/image6.jpg",
        "../images/image7.jpg",
        "../images/image8.jpg",
        "../images/image9.jpg",
        ]
    return (
        <div>
           <PhotoArchive images={images} /> 
        </div>
    )
}
    
