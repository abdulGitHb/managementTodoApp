import React from 'react';
import {BsSearch, BsBell} from 'react-icons/bs';

function TopNav() {
  return (
    <>
      <div className='flex h-12 p-2 bg-white border border-gray-200 rounded-md mt-2 shadow shadow-lg'>
        <div className='flex flex-auto mt-auto mb-auto ml-auto mr-auto'>
          <div className='mt-auto mb-auto ml-2 z-10'>
            <BsSearch/>
          </div>
          <input className='ml-1 w-full border-none focus:outline-none text-center' placeholder='Search in EliteQ' type="text"/>
        </div>
        <div className='mt-auto mb-auto mr-2 ml-2'>
          <BsBell/>
        </div>
      </div>
    </>
  )
}

export default TopNav;