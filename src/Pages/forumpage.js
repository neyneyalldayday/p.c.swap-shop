import React from 'react'
import Forums from '../components/Forums'
import Sidebar from '../components/Sidebar'

const ForumPage = ({id}) => {
    return (
        <div> 
            <Sidebar id={id}  />            
            <Forums  />
        </div>
    )
}

export default ForumPage
