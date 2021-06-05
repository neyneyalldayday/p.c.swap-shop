import React from 'react'
import PhotoArchive from '../components/PhotoArchive'
import images from '../Data/archiveData'


const ArchivePage = () => {
    

    return (
        <>
           <PhotoArchive  images={ images }  /> 
        </>
    )
}

export default ArchivePage;
    
