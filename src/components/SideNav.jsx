import React, { useEffect, useState } from 'react'
import {FaChessBoard, FaCalendarCheck, FaTasks, FaPencilRuler} from 'react-icons/fa'
import {BiDownArrow, BiUpArrow} from 'react-icons/bi'
import {GrSystem, GrFormAdd} from 'react-icons/gr'
import {Link, useNavigate } from 'react-router-dom';
import db from '../firebaseConfig';

function SideNav() {

  const [channels, setChannels] = useState([]);
  const [channelVisibility, setChannelVisibility] = useState("hidden");

  const history = useNavigate();

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot=>(
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    ))
  }, []);

  // setting the channels visibility on clicking the right-side triangle
  const channelListVisibility=()=>{
    setChannelVisibility(channelVisibility?"":"hidden");
    // console.log(channelVisibility);
  }

  const addChannels=(e)=>{
    e.preventDefault();// preventing page reload
    //getting new channel name
    const channelName= prompt('Enter the Channel Name: ');

    // if the channel name is not empty, then adding it into the database of channels
    if(channelName){
      db.collection('channels').add({
        name:channelName
      })
    }
  }
  

  return (
    <>
     <div className='divide-y divide-black w-[160px] max-w-[170px] h-[90vh] bg-gray-300 mt-2 mb-2 rounded-md shadow-md mr-4 ml-2'>
      <div className='flex'>
        <h1 className='ml-2 mr-1'>Hey ABDUL, Welcome Back</h1>
        <div className='mt-auto mb-2 ml-2 mr-2'>
          <FaPencilRuler size={20}/>
        </div>
      </div>

        <hr/>

        <Link to='/'>
          <div className='flex hover:bg-red-400 w-full p-2 cursor-pointer'>
            <div className='mt-auto mb-auto ml-2 mr-2'>
              <FaChessBoard size={25}/>
            </div>
            <h1>Dashboard</h1>
          </div>
        </Link>

          <Link to='/mytasks'>
            <div className='flex flex-auto hover:bg-red-400 w-full mt-2 p-2 cursor-pointer'>
              <div className='mt-auto mb-auto ml-2 mr-2'>
                <FaTasks size={25}/>
              </div>
              <h1>My Tasks</h1>
            </div>
          </Link>

          <Link to='/mycalendar'>
            <div className='flex flex-auto hover:bg-red-400 w-full mt-2 p-2 cursor-pointer'>
                <div className='mt-auto mb-auto ml-2 mr-2'>
                <FaCalendarCheck size={30}/>
                </div>
                <h1>Calendar</h1>
            </div>
          </Link>


        <hr/>
        
        <div className='flex hover:bg-red-400 w-full p-2 justify-around cursor-pointer'>
            <div className='mt-auto mb-auto ml-2 mr-2'>
            <GrSystem size={25}/>
            </div>
            <h1>Projects</h1>
            <div className='mt-auto mb-[2px] ml-3 mr-2'>
            <BiDownArrow/>
            </div>
        </div>
        
        <hr />
        
        <div className='divide divide-black'>
          <div className='flex hover:bg-red-400 w-full p-2 justify-around cursor-pointer'>
              <div onClick={addChannels} className='mt-auto mb-auto ml-1 mr-2 hover:bg-blue-200 rounded-full'>
              <GrFormAdd size={25}/>
              </div>
              <h1>Channels</h1>
              <div onClick={channelListVisibility} className='mt-auto mb-auto ml-1 mr-2 hover:text-blue-300 rounded-full'>
                {channelVisibility?<BiDownArrow size={20}/> : <BiUpArrow size={20}/>}
              </div>
              
          </div>
          <hr />
          <div className={`${channelVisibility} transition easi-in-out delay-150`}>
            {channels.map(channel=>{
              return <Link to={`/channels/${channel.id}`}> <div className='ml-8 hover:bg-gray-400 cursor-pointer'># {channel.name}</div> </Link>
            })}
          </div>
        </div>
        
        <hr />
        
        <div className='flex hover:bg-red-400 w-full p-2 cursor-pointer'>
            <div className='mt-auto mb-auto ml-1 hover:bg-blue-200 rounded-full'>
            <GrFormAdd size={25}/>
            </div>
            <h1 className='ml-1'>Add Projects</h1>
        </div>
        <hr />

        
     </div>
    </>
  )
}

export default SideNav;