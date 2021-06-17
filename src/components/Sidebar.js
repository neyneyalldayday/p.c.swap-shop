import React, {useState} from 'react'
import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({id}) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    return (
        <div style={{width: '250px'}} >            
            <div activeKey={activeKey} onSelect={setActiveKey}>
            <nav  className="flex flex-col sm:flex-row space-x-4 ">                   
                <button eventKey={CONVERSATIONS_KEY}>conversations</button>                    
                <button  eventKey={CONTACTS_KEY}>contacts</button>                                    
            </nav>
            </div>
            <div className="border-2 md:border-t-4 flex-grow overflow-auto">
                <div eventKey={CONVERSATIONS_KEY}>
                    <Conversations/>
                </div>
                <div eventKey={CONTACTS_KEY}>
                    <Contacts/>
                </div>
            </div>
            <div>
                Your Id:<span className="text-extralight">{id}</span>
            </div>
            <button>
                New {conversationsOpen ? 'Conversation' : 'Contact'}
            </button>

        </div>
    )
}
