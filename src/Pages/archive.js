import React from 'react'
import PhotoArchive from '../components/PhotoArchive'
import { ArchiveData } from '../Data/ArchiveData'

const Archive = () => {
    return (
        <div>
           <PhotoArchive images={ArchiveData} /> 
        </div>
    )
}

export default Archive
