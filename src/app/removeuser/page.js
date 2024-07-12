"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice';

export default function Page() {
    const userData = useSelector((data) => data.usersData.users);
    console.log(userData);

    const dispatch = useDispatch();

    return (
        <div className='flex flex-col items-center p-4'>
            <h1 className='mt-4 font-bold text-2xl mb-6'>Remove User From Page</h1>
            <div className='w-full max-w-lg'>
                {userData.map((item) => (
                    <div key={item.id} className='flex justify-between items-center bg-sky-300 p-4 mb-4 rounded-lg shadow-md'>
                        <span className='flex-grow text-lg'>{item.name}</span>
                        <button 
                            className="bg-red-500 hover:bg-red-200 hover:text-black text-white font-bold py-2 px-4 rounded"
                            onClick={() => dispatch(removeUser(item.id))}
                        >
                            Remove User
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
