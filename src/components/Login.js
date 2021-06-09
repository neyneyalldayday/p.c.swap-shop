import React, { useRef } from 'react'

export default function Login({ onIdSubmit }) {
    
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current)
        console.log(idRef)
    }


    return (
        <div className="container mx-auto w-screen h-screen bg-gray-300 ">
            <div  className="md:container md:mx-auto flex justify-center">               
            <form onSubmit={handleSubmit} className="box-content h-64 w-64 p-4 border-4 border-green-100 shadow-2xl flex justify-center  m-20 md:m-32 flex-col relative space-y-6 bg-purple-50" >
                <label className="block bg-green-400 flex-col  inset-x-0 top-0 m-5 rounded-full h-24  flex items-center justify-center ">Login/Signup</label>
                <input  className="block flex-col focus:outline-black focus:ring focus:border-green-100 relative m-1 placeholder-opacity-100 " ref={idRef} required placeholder="enter username here"></input>
                <button type="submit" className="flex flex-col bg-green-400 m-1 rounded-full py-3 px-6 animate-bounce  transition duration-500 ease-in-out bg-green-400 hover:bg-purple-200 transform hover:-translate-y-1 hover:scale-110 ">click to login</button>
                <button type="submit"  className="flex flex-col bg-green-400 m-1 rounded-full py-3 px-6 animate-bounce  transition duration-500 ease-in-out bg-green-400 hover:bg-purple-200 transform hover:-translate-y-1 hover:scale-110 ">create new username</button>

            </form>
        </div>
  </div>
        
    )
}
