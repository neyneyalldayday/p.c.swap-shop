import React from 'react'
import Login from '../components/Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Home from '../Pages/index'



const LoginPage = () => {

    const [id, setId ] = useLocalStorage('id')

    return (
        
           id ? <Home id={id} /> : <Login onIdSubmit={setId} /> 
           
        
    )
}

export default LoginPage
