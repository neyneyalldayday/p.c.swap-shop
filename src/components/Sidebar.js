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
        <div style={{width: '250px'}} >            
            <div activeKey={activeKey} onSelect={setActiveKey}>
            <nav  className="flex flex-col sm:flex-row space-x-4 ">                   
                <button className={activeKey === CONVERSATIONS_KEY} onClick={() => toggleTab(CONVERSATIONS_KEY)}>conversations</button>                    
                <button  className={activeKey === CONTACTS_KEY} onClick={() => toggleTab(CONTACTS_KEY)}>contacts</button>                                    
            </nav>
            </div>
            <div className="border-2 md:border-t-4 flex-grow overflow-auto">
                <div className={activeKey === CONVERSATIONS_KEY ?  'conversations' : 'invisible'}>
                    <Conversations/>
                </div>
                <div className={activeKey === CONTACTS_KEY ? 'contacts' : 'invisible' } >
                    <Contacts/>
                </div>
            </div>
            <div>
                Your Id:<span className="text-extralight visible">{id}</span>
            </div>
            <button>
                New {conversationsOpen ? 'Conversation' : 'Contact'}
            </button>

        </div>
    )
}
