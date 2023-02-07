import React from 'react'

function ChatMessageComp(props) {
    // console.log(props.chatMsg);
  return (
    <>
     <div className="flex">
        <div className="flex mt-1 mb-1 w-[90%]">
          <img
            className="h-8 w-8 ml-4 mt-2 mb-2  object-cover rounded-full"
            src={props.chatMsg.userImg}
            alt="user img"
          />
          <div className="flex flex-col p-1 ml-2 mr-4 mt-auto mb-auto bg-green-400 rounded-r-lg rounded-b-lg">
            <h1 className="font-semibold text-md">{props.chatMsg.user}</h1>
            <h1 className='text-xl'>{props.chatMsg.name}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatMessageComp;