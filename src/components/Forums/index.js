import React from 'react'

const Forums = () => {
    return (
        <div class="md:container md:mx-auto h-screen bg-indigo-50 rounded-md pt-5">
           <div class="space-y-4 ...">
            <span class="block decoration-clone md:decoration-slice bg-gradient-to-b from-purple-400 to-indigo-600 text-pink-300 flex justify-center h-48 max-h-full md:max-h-screen text-6xl antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal rounded-md shadow-xl pt-5 pl-10 lg:pt-12  ">chat about computers</span>
            <span class="block flex justify-center rounded-md bg-indigo-100 h-12 shadow-xl rounded-md">
                <input class="placeholder-gray-500  text-center" placeholder="username"></input>
            </span>
            <span class="block shadow-inner flex justify-center h-48 max-h-full md:max-h-screen max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-4xl antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal  ">comment
            
                <textarea class="w-1/2 h-1/2 m-8 bg-yellow-50"></textarea>
            </span>
        </div>
            
            
           
        </div>
    )
}

export default Forums
