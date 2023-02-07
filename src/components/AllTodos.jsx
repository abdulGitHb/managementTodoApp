import React, { useEffect, useState } from 'react'
import TodoCompo from './templates/TodoCompo';

function AllTodos() {

    const [json, setJson] = useState('');


  useEffect(() => {
    const allTodo = async ()=>{
      const response = await fetch('http://localhost:5000/app/alltodos',{
        method: 'GET',
        headers:{
          'content-type':'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNGQ3YWYxMjg1Y2M5YTc1ZmI4ZTZlIn0sImlhdCI6MTY3Mzg0NDY4NH0.2C_xxz6dK7mHsiredQLemKVvAO5E3HZofM5j6Vwb_8A'
        },
      });
    
      const jsonn = await response.json();
      if(json===''){
        setJson(jsonn);
      }
      console.log('json here')
      console.log(json); 
    }
  
    allTodo();
  }, [json]); 

  return (
    <>
        <div className='flex flex-col lg:flex-row w-full divide-y divide-black lg:divide-[#f9f9f9] p-1'>
            <div className='w-full p-2 flex-auto'>
              <div>
              <h1 className='text-center font-mono'>Assigned Tasks</h1>
              </div>
                {json && json.map(item=>{
                  return <TodoCompo 
                  id={item.id}
                  user={item.user}
                  title={item.title}
                  description = {item.description}
                  tag = {item.tag}
                  decoration={false}/> 
                  })
                }
            </div>
            <hr />
            <div className='w-full flex-auto p-2 mr-2'>
              <h1 className='text-center font-mono'>Completed tasks</h1>
              {json && json.map(item=>{
                return <TodoCompo 
                id={item.id}
                user={item.user}
                title={item.title}
                description = {item.description}
                tag = {item.tag}
                decoration={true}/> 
                })
              }
            </div>

        </div>

    </>
  )
}

export default AllTodos