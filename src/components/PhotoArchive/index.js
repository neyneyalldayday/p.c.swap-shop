import React, { useState } from 'react'
import PhotoArchiveCard from '../PhotoArchiveCard'
import VisibilitySensor from 'react-visibility-sensor';

const PhotoArchive = ({ images }) => { 
   
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






