"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice';

export default function page() {
    const userData = useSelector((data)=>data.users);
    console.log(userData)

    const dispatch = useDispatch()
  return (
    <div>
      <h1>Remover User From Page</h1>
      {
        userData.map((item)=>(
            <div className='flex justify-between mt-4 font-bold text-8xl '>
               <span className='flex flex-grow'> {item.name}</span>
               <button  className="bg-white text-red-700 " onClick={()=>dispatch(removeUser(item.id))}>Remove User</button>
                </div>
        ))
      }
    </div>
  )
}
