import React, {useState} from 'react'
import Login from '../components/Login'

const LoginPage = () => {

    const [id, setId ] = useState()

    return (
        <div>
            {id}
           <Login onIdSubmit={setId} /> 
        </div>
    )
}

export default LoginPage
