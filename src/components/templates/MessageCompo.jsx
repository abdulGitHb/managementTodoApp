import React from "react";
import {MdCancel} from 'react-icons/md'

function MessageCompo(props) {
  // console.log(props.user);
  return (
    <>
      <div className="flex">
        <div className="flex mt-1 mb-1 w-[350px] cursor-pointer hover:shadow">
          <img
            className="h-14 w-14 ml-4 mt-2 mb-2  object-cover rounded-full"
            src={props.userImg}
            alt="image here"
          />
          <div className="flex flex-col ml-2 mr-4 mt-auto mb-auto">
            <h1 className="font-semibold text-lg">{props.user}</h1>
            <h1>{props.name}</h1>
          </div>
        </div>

        <div className="text-white bg-blue-400 rounded-full mt-auto mb-auto ml-2 cursor-pointer hover:shadow-lg hover:shadow-red-400">
          <MdCancel size={25}/>
        </div>
      </div>
      <hr />
    </>
  );
}

export default MessageCompo;
