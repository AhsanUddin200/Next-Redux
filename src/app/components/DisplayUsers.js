"use client"
import React from "react";
import { useSelector } from "react-redux";

export default function displayUsers() {

  const userData = useSelector((data)=>data.users);
  console.log(userData)
  return (
    <div className="w-3/5  px-6 mt-12 h-full  border border-gray-600">
      <h2 className="mt-8 px-8 font-bold text-2xl">Display Here Users List</h2>
      {
        userData.map((item)=>(
          <div className="px-8 w-12 bg-sky-300 mt-4 rounded-lg">
            <ul>
              <li> {item.name}</li>
            </ul>
            
          </div>
        ))
      }
    </div>
  );
}
