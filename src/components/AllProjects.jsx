import React, { useEffect, useState } from 'react'
import TodoCompo from './templates/TodoCompo';

function AllProjects() {

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
            <div className='ml-2 mr-2'>
                {json && json.map(item=>{
                return <TodoCompo 
                id={item.id}
                user={item.user}
                title={item.title}
                description = {item.description}
                tag = {item.tag}/> 
                })
                }
            </div>
    </>
  )
}

export default AllProjects