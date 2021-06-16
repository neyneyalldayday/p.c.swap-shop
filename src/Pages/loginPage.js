import React from 'react'
import Login from '../components/Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from '../components/Dashboard'


const LoginPage = () => {

    const [id, setId ] = useLocalStorage('id')

    return (
        
           id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} /> 
           
        
    )
}

export default LoginPage
