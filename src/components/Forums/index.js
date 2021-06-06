import React from 'react'


const Forums = () => {
    return (
        <div className="md:container md:mx-auto h-screen  bg-indigo-50 rounded-md pt-5 ">
           <div className="space-y-3  ">
              <span className=" block decoration-clone md:decoration-slice bg-gradient-to-b from-purple-400 to-indigo-600 text-pink-300 flex justify-center h-48 max-h-full md:max-h-screen text-6xl antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal rounded-md shadow-xl pt-5 pl-10 lg:pt-12  ">chat about computers</span>
              <span className="block flex justify-center rounded-md bg-indigo-100 h-12 shadow-xl rounded-md">
                <input className="placeholder-gray-500  text-center" placeholder="username"></input>
              </span>
              <span className="block shadow-inner flex flex-col justify-center  h-32 max-h-full md:max-h-screen max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-4xl antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal  ">
                <h1 className="flex justify-center">comment</h1>            
                <textarea className=" table-row-group m-1 flex justify-center text-sm  bg-yellow-50"></textarea> 
                <button className="block box-border h-6 w-12 border-4 text-sm m-3 flex font-semibold rounded-lg shadow-md hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-85 ">Send</button>                                               
              </span>                           
           </div>
           <br></br>
             <div className=" block shadow-inner flex flex-col justify-center  h-32 max-h-full md:max-h-screen max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-4xl antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal">
               <h1 className="flex justify-center">comments</h1>
               
             </div> 
                  
        </div>
    )
}

export default Forums
