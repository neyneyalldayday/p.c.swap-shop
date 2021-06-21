import React, {useState} from 'react'
import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({id}) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    const toggleTab = (index) => {
        setActiveKey(index);
    }

    return (
        <div  className="md:container md:mx-auto  bg-indigo-50 rounded-md pt-5  space-x-4" >            
            <div activeKey={activeKey} onSelect={setActiveKey} className="block shadow-inner flex flex-col justify-center  h-24 md:h-12 max-h-full md:max-h-screen max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-4xl antialiased sm:subpixel-antialiased md:antialiased font-semibold  tracking-tight md:tracking-normal">
            <nav  className="flex flex-col sm:flex-row space-x-4 ">                   
                <button className={activeKey === CONVERSATIONS_KEY} onClick={() => toggleTab(CONVERSATIONS_KEY)}>conversations</button>                    
                <button  className={activeKey === CONTACTS_KEY} onClick={() => toggleTab(CONTACTS_KEY)}>contacts</button>                                    
            </nav>
            </div>
            <br></br>
            <div className="border-2 md:border-t-4 flex-grow overflow-auto block shadow-inner flex flex-col justify-center  h-12 max-h-full md:max-h-screen max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-sm antialiased sm:subpixel-antialiased md:antialiased font-semibold  tracking-tight md:tracking-normal ">
                <div className={activeKey === CONVERSATIONS_KEY ?  'conversations' : 'invisible'}>
                    <Conversations/>
                </div>
                <div className={activeKey === CONTACTS_KEY ? 'contacts' : 'invisible' } >
                    <Contacts/>
                </div>
            </div>
            <div className="border-2 md:border-t-4   shadow-inner  justify-center  h-12  max-w-full md:max-w-screen bg-indigo-100 rounded-md text-pink-300 text-sm antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal">
                Your Id:<span className="text-extralight visible">{id}</span>
            </div>
            <button className="text-pink-300 block box-border h-12 w-32 border-4 text-sm m-3 flex font-semibold rounded-lg shadow-md hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-85 ">
                New {conversationsOpen ? 'Conversation' : 'Contact'}
            </button>

        </div>
    )
}
