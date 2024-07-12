"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function displayUsers() {
  const userData = useSelector((data) => data.users);
  console.log(userData);

  const dispatch = useDispatch();

  return (
    <div className="w-3/5  px-6 mt-12 h-full  border border-gray-600 overflow-scroll">
      <h2 className="mt-8 px-8 font-bold text-2xl">Display Here Users List</h2>
      {userData.map((item) => (
        <div className=" flex  justify-between px-8 w-12 mt-4 rounded-lg">
          <ul className=" bg-sky-300 flex-grow mr-4 px-6">
            <li> {item.name}</li>
          </ul>
          <button
            onClick={() => dispatch(removeUser(item.id))}
            className="bg-black text-white rounded-lg px-4"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
