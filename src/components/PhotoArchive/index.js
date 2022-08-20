import React, { useState } from 'react'
import PhotoArchiveCard from '../PhotoArchiveCard'
import VisibilitySensor from 'react-visibility-sensor';

const PhotoArchive = ({ images, id }) => { 
   
    const [imagesShownArray, setImagesShownArray] = useState(        
        Array(images.length).fill(false)
        );
        
     
    

    const imageVisibleChange = (index, isVisible) => {
        if (isVisible) {
            setImagesShownArray((currentImagesShownArray) => {
                currentImagesShownArray[index] = true;
                return [...currentImagesShownArray];
            });
        }
    };


    return (
        <>
        <div className="border-2 md:border-t-4    justify-center  h-6  max-w-full md:max-w-screen bg-indigo-100  text-pink-300 text-sm antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal">
            Your Id:<span className="text-extralight visible">{id}</span>
        </div>   
        <div className="grid grid-cols-2 gap-1">
        {images &&
        images.map((images, index) => (
            <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
            >
                
                <PhotoArchiveCard
                images={images.image}
                show={imagesShownArray[index]}
                />
            </VisibilitySensor>
        ))}

        
        </div>     
        </>
         
     );
}

export default PhotoArchive;






