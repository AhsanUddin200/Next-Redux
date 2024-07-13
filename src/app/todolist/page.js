"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../redux/todoSlice';

export default function page() {
    const [todo,setTodo] = useState("");

    const todoData = useSelector((data)=>data.todosData.todos)
    console.log(todoData)
    const dispatch = useDispatch()



  return (
    <div className='px-12 mt-6 '>
      <h2 className='font-bold text-xl'>Add ToDo Here</h2>

      <input 
       type="text"
       placeholder='Add Here Your Task'
       onChange={(e)=>setTodo(e.target.value)}
       className='mt-4 border border-gray-600'       />
<br/>
       <button onClick={()=>dispatch(addTodos(todo))} className='bg-black text-white mt-2 px-12 ml-2 rounded-lg' >Add ToDo</button>
        <div className='px-4'>

        <h3 className='mt-4  font-bold'>ToDo List</h3>
       {
        todoData.length && todoData.map((item)=>(
            <h5 className='font-mono text-xl mt-2 px-8'>{item.name}</h5>
        ))
       }
        </div>
       
    </div>
  )
}
