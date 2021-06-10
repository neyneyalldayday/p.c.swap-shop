import React from 'react'
import Login from '../components/Login'
import useLocalStorage from '../hooks/useLocalStorage'

const LoginPage = () => {

    const [id, setId ] = useLocalStorage('id')

    return (
        <>
           {id}
           <Login onIdSubmit={setId} /> 
        </>
    )
}

export default LoginPage
