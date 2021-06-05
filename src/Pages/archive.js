import React from 'react'
import PhotoArchive from '../components/PhotoArchive'
import archiveData from '../Data/archiveData'


const ArchivePage = () => {
    

    return (
        <>
           <PhotoArchive images={ archiveData }  /> 
        </>
    )
}

export default ArchivePage;
    
