"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";

export default function page() {
  const dispatch = useDispatch();

  const apiUserData = useSelector((data) => data.usersData.usersAPIData);
  console.log(apiUserData);

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);
  return (
    <div className="">
      <h2 className="mt-4 px-2 font-bold text-xl">Users List From Rest Api</h2>
      {/* /*<button onClick={()=>dispatch(fetchApiUsers())}>Load Users</button> */}
      <div className="px-6 mt-3 font-serif text-pretty">
      {apiUserData.length &&
        apiUserData.map((item) => 
        <h5 className='block' key={item.id}>{item.name}<br />{item.email}</h5>
        
        
        )}
      </div>
    
    </div>
  );
}
