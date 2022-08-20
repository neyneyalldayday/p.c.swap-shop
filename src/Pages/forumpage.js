import React from 'react'
import Forums from '../components/Forums'
import Login from '../components/Login'
import useLocalStorage from '../hooks/useLocalStorage'


const ForumPage = () => {
    const [id, setId ] = useLocalStorage('id')
    return (
                               
           id ? <Forums id={id} /> : <Login onIdSubmit={setId} />
      
    )
}

export default ForumPage
