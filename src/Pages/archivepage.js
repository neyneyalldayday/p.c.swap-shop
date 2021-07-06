import React from 'react'
import PhotoArchive from '../components/PhotoArchive'
import { archiveData } from '../Data/archiveData'


const ArchivePage = () => {
    

    return (
        <div> 
            bunch of photos       
           <PhotoArchive  images={ archiveData }  />    
        </div>
    )
}

export default ArchivePage;
    
