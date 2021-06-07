import React, { useRef } from 'react'

export default function Login() {
    
    const idRef = useRef()


    return (
        <div className="container mx-auto w-screen h-screen">
            <div className="md:container md:mx-auto flex justify-center">               
            <div className="box-content h-64 w-64 p-4 border-4 border-green-100 shadow-2xl flex justify-center  m-20 md:m-32 flex-col relative space-y-6 bg-purple-50" >
                <span className="block bg-green-400 flex-col  inset-x-0 top-0 m-5 rounded-full h-24 w-24 flex items-center justify-center ">Login/Signup</span>
                <input  className="block flex-col focus:outline-black focus:ring focus:border-green-100 relative m-1 placeholder-opacity-100 " ref={idRef} placeholder="enter username here"></input>
                <button className="flex flex-col bg-green-400 m-1 rounded-full py-3 px-6 animate-bounce  transition duration-500 ease-in-out bg-green-400 hover:bg-purple-200 transform hover:-translate-y-1 hover:scale-110 ">click</button>

            </div>
        </div>
  </div>
        
    )
}
