"use client"
import React, { useState } from 'react';
import { addUser } from '../redux/slice';
import {useDispatch} from 'react-redux'

export default function AddUsers() {
  const [name,setName] = useState("")
  const dispatch = useDispatch()


  const userDispatch=()=>{
    //console.log(name);
    dispatch(addUser(name))

  }
  return (
    <div className='px-12 border border-gray-800'>
      <h1 className='mt-8 font-bold text-xl'>Add Here Users</h1>
      <input 
        type="text"
        placeholder='Add New User'
        className='border p-3 gap-6 mt-6 block'
      
        onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={userDispatch} className='bg-blue-500 text-white  mt-2  mb-8 block px-24'>Add Users</button>
    </div>
  );
}
