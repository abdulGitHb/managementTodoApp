import React from 'react'
import AllProjects from './AllProjects';
import AllTodos from './AllTodos';
import MessageNotiDash from './MessageNotiDash';
import {RxOpenInNewWindow} from 'react-icons/rx';
import { Link } from 'react-router-dom';
import SmallCalendar from './templates/SmallCalendar';

function DashBoard() {
  return (
    <>
    <div>
        <div className='flex'>
            <div className='border rounded-md h-[55vh] mt-2 mb-4 mr-3 bg-white shadow-md overflow-y-auto scrollbar-hide'>
                <div className='sticky top-0 flex justify-between bg-white p-1'>
                    <h1 className='text-center font-semibold text-xl ml-3'>My Tasks<small> (Today's Date)</small></h1>
                    <div className='mt-auto mb-auto ml-2 mr-2'>
                        <Link to='/mytasks'>
                            <RxOpenInNewWindow size={25}/>
                        </Link>
                    </div>
                </div>
                <hr />
                <div className=''>
                    <AllTodos/>
                </div>
            </div>

            <div className='flex flex-col border h-[55vh] rounded-md mt-2 w-[350px] p-2 max-w-[400px] mb-4 mr-2 bg-white shadow-md'>
                <h1 className='text-center font-semibold text-xl'>Calendar</h1>
                <hr />
                <div className='flex-auto mt-2'>
                <SmallCalendar/>
                </div>
            </div>

        </div>
        
        <div className='border w-[400px] rounded-md h-[30vh] mr-2 mt-2 mb-4 bg-white shadow-lg overflow-y-auto scrollbar-hide'>
            <h1 className='sticky top-0 bg-white ml-2 font-semibold text-xl mb-2 p-1'>Notification <small>(messages)</small></h1>
            <hr />
            <div className='ml-2'>
            <MessageNotiDash/>
            </div>
        </div>
    </div>
    </>
  )
}

export default DashBoard;