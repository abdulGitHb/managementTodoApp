import React, { useEffect, useState } from 'react'
import { FiSend, FiPaperclip } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import db from '../firebaseConfig';

function ChatWindow() {

    const {channelID} = useParams();
    const [chName, setChName] = useState('');
    // console.log(`The channel is ${channelID}`);

    useEffect(() => {
        db.collection('channels').doc(channelID)
        .onSnapshot((snapshot)=>{
            setChName(snapshot.data())
        });
      }, [channelID]);
    //   console.log(chName);

  return (
    <>
        <div className='flex flex-col w-[100%] h-[90%] mt-2 p-2 rounded-md bg-gray-200 shadow shadow-lg'>
            <h1><strong># {chName.name}</strong></h1>

            <div className='flex-1 w-full bg-white mt-1 mb-1 p-2 rounded-md'>

            </div>
        
            <div className=''>
                <div className='flex h-12 p-2 bg-white border border-gray-200 rounded-md shadow shadow-lg'>
                    <div className='flex flex-auto mt-auto mb-auto ml-auto mr-auto'>
                        <div className='mt-auto mb-auto ml-2 z-10'>
                            <FiPaperclip/>
                        </div>
                        <input className='ml-2 w-full border-none focus:outline-none' placeholder='Search in EliteQ' type="text"/>
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