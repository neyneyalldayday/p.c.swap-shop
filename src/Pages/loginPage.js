import React, {useState} from 'react'
import Login from '../components/Login'

const LoginPage = () => {

    const [id, setId ] = useState()

    return (
        <>
            {id}
           <Login onIdSubmit={setId} /> 
        </>
    )
}

export default LoginPage
