import React from 'react';




const PhotoArchiveCard = ({ images, show }) => {
    
    return (
        <div
        className={`relative transition ease-in duration-300 transform ${
            show ? "" : "translate-y-16 opacity-0"
        }`}
        >
            <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
                p.c Builds
            </div>
            </div>
            <img src={images} alt=""/>
        </div>
    )
    
}


export default PhotoArchiveCard;