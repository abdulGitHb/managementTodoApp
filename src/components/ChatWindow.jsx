import React, { useEffect, useState } from 'react'
import { FiSend, FiPaperclip } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import db from '../firebaseConfig';
import ChatMessageComp from './templates/ChatMessageComp';
import MessageCompo from './templates/MessageCompo';

function ChatWindow() {

    const {channelID} = useParams();
    const [chName, setChName] = useState('');
    const [channelMessages, setChannelMessages] = useState(null);
    // console.log(`The channel is ${channelID}`);

    useEffect(() => {
        // getting the channel name
        db.collection('channels').doc(channelID)
        .onSnapshot((snapshot)=>{
            setChName(snapshot.data())
        });

        // getting the messages for the respective channel
        db.collection("channels").doc(channelID)
        .collection('messages')
        .orderBy('timeStamp', 'asc')
        .onSnapshot(snapshot =>
            setChannelMessages(snapshot.docs.map(doc => doc.data()))
            );

      }, [channelID]);
      console.log(channelMessages);
      console.log(channelID);

  return (
    <>
        <div className='flex flex-col w-[100%] h-[90%] mt-2 p-2 rounded-md bg-gray-200 shadow shadow-lg'>
            <h1 className='text-lg'><strong>#{chName?.name}</strong></h1>

            <div className='flex-1 w-full bg-white mt-1 mb-1 p-2 rounded-md'>
                {
                    channelMessages && channelMessages.map(item=>{
                        // console.log(item)
                        return <div>
                            <ChatMessageComp 
                            chatMsg= {item}/>
                        </div> 
                    })
                }
            </div>
        
            <div className=''>
                <div className='flex h-12 p-2 bg-white border border-gray-200 rounded-md shadow shadow-lg'>
                    <div className='flex flex-auto mt-auto mb-auto ml-auto mr-auto'>
                        <div className='mt-auto mb-auto ml-2 z-10'>
                            <FiPaperclip/>
                        </div>
                        <input className='ml-2 w-full border-none focus:outline-none' placeholder='Start typing' type="text"/>
                    </div>
                    <div className='mt-auto mb-auto mr-2 ml-2'>
                        <FiSend/>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default ChatWindow;