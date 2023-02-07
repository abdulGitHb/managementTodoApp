import React, { useState } from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import {AiOutlineDelete, AiOutlineStar, AiOutlineEdit} from 'react-icons/ai'

function TodoCompo(props) {

    const [initCol, setInitCol] = useState('');

    const hello = ()=>{
        setInitCol('text-white bg-green-600');
    }
  return (
    <>
    <div className='border border-black max-w-[400px] rounded-md mt-2 mb-2 bg-blue-100'>
        <div className='flex flex-col justify-between lg:flex-row'>

          <div className='flex flex-auto'>
            <div className={`check-btn mt-auto mb-auto ml-2 mr-2 rounded-full ${props.decoration? 'text-white bg-green-600':''} ${initCol}`}>
              <BsCheck2Circle size={20}
              className='cursor-pointer'
              onClick={hello}/>
            </div>

            <div className='w-full flex-auto'>
              <h1 className={`text-lg ${props.decoration? ' line-through':''} font-semibold ml-2`}>{props.title}</h1>
              <h1 className={`text-sm ml-2 ${props.decoration? ' line-through':''}`}>{props.description}</h1>
              <span className='mt-2 mb-1 mr-2 text-xs float-right border border-black rounded-full pl-1 pr-1 pb-[2px]'>{props.tag}</span>
            </div>
          </div>

            <div className='flex mt-auto mb-1 space-x-2 mr-2 ml-2'>
              <AiOutlineEdit size={20} className='hover:text-white hover:bg-black hover:border-2 hover:border-black rounded-full cursor-pointer'/>
              <AiOutlineDelete size={20} className='hover:text-white hover:bg-black hover:border-2 hover:border-black rounded-full cursor-pointer'/>
              <AiOutlineStar size={20} className='hover:text-white hover:bg-black hover:border-2 hover:border-black rounded-full cursor-pointer'/>
            </div>

        </div>
    </div>
    </>
  )
}

export default TodoCompo;


