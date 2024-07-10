import React from 'react';

export default function AddUsers() {
  return (
    <div className='px-12 border border-gray-800'>
      <h1 className='mt-8 font-bold text-xl'>Add Here Users</h1>
      <input 
        type="text"
        placeholder='Add New User'
        className='border p-6 gap-6 mt-6 block'
      />
      <button className='bg-blue-500 text-white  mt-2 hover:scale-105 hover:text-black hover:bg-white mb-8 block px-12'>Add Users</button>
    </div>
  );
}
