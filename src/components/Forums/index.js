import React, {useRef, useState, useEffect} from 'react'
import useForum from "./useForum"


export default function Forums({id})  {

    const { messages, sendMessage } = useForum();
    const [newMessage, setNewMessage] = useState("");   
    
    const idRef = useRef()
    const messageRef = useRef()    

    const handleNewMessageChange = event => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage !== "") {
            sendMessage(newMessage);
            setNewMessage("");
        }
    };    

    const handleKeyUp = event => {
        if (event.key === "Enter"){
            if (newMessage !== "") {
                sendMessage( newMessage );
                setNewMessage("");
            }
        }
    }
    useEffect(() => messageRef.current.scrollIntoView({behavior: "smooth"}), [])


    return (
        <div className="md:container md:mx-auto h-screen  bg-indigo-50 rounded-md pt-5  space-x-4 ">                 
           <div className="space-y-3 ">               
              <span className=" block decoration-clone md:decoration-slice bg-gradient-to-b from-purple-400 to-indigo-600 text-pink-300 flex justify-center h-48 max-h-full md:max-h-screen text-6xl antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal rounded-md shadow-xl pt-5 pl-10 lg:pt-12  ">chat about computers</span>              
              <span className="block shadow-inner flex flex-col justify-center  h-32 max-h-full md:max-h-screen max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-4xl antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal  ">
                <h1 className="flex justify-center">Public Comment</h1>            
                <textarea className=" table-row-group m-1 flex justify-center text-sm  bg-yellow-50"
                     id="message"
                     label="Message"
                     placeholder="enter message here"
                     value={newMessage}
                     onChange={handleNewMessageChange}
                     onKeyUp={handleKeyUp}
                ></textarea> 
                <button className="block box-border h-6 w-12 border-4 text-sm m-3 flex font-semibold rounded-lg shadow-md hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-85 "
                    disabled={!newMessage}                    
                    onClick={handleSendMessage}                    
                >Send</button>                                               
              </span>                           
           </div>
           <br></br>
           
             <span className=" block shadow-inner flex flex-col justify-center  h-32 max-h-full md:max-h-screen max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-4xl antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal">
                 <ol className="block text-sm">
                 {messages.map((message, i) => (
                     <li key={i}>
                         <div className="border-2 md:border-t-4    justify-center  h-12  max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-sm antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal">
                           Your Id:<span className="text-extralight visible">{id}</span>
                         </div>                                                 
                         <span>{message.body}</span>
                         <span>{idRef.body}</span>
                     </li>
                 ))}
                 </ol>                 
                 <div ref={messageRef}></div>                             
             </span> 
                  
        </div>
    )
}


