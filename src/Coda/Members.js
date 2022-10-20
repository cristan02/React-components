import React from 'react'
import { Link } from 'react-router-dom'

import TopnavSearch from './Components/TopnavSearch'
import Navbar from './Components/Navbar'
import Onpage from './Components/Onpage'
function Members() {
  return (
    <div className="flex w-full">
      <Navbar />
      <div className="flex flex-col w-full p-4">
        <TopnavSearch />
        <p className="p-5"></p>

        <div className='max-w-[1000px]'>
          <Onpage page="Members & groups" buttonText="Invite" />

          <p className="p-2"></p>

          <ul className="flex flex-row h-10">
            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">Current members</li>
            <p className="p-2"></p>

            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">Removed members</li>
            <p className="p-2"></p>

            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">Offboarded members</li>
            <p className="p-2"></p>

            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">Groups</li>
          </ul>

          <p className="p-2"></p>

          <div className='text-xl text-gray-700'>Current</div>
          <div>
            Current members of this workspace, Roles can be modified below.
          </div>

          <p className="p-4"></p>

          <div className="flex justify-end w-full">
            <button className="flex items-center justify-center align-center h-8 w-10  bg-gray-100 rounded-l-lg  border-2  border-gray-300 border-r-0 p-3">
              <img
                src="font awesome icons\magnifying-glass-solid.svg"
                className="w-5 h-5"
              ></img>
            </button>
            <input
              className="flex justify-center align-center h-8 w-30 bg-gray-100 rounded-r-lg border-2  border-gray-300 border-l-0"
              placeholder="Search all docs"
            ></input>
          </div>

          <p className="p-3"></p>
          <hr className=''></hr>
          <p className="p-3"></p>

          <div className="flex justify-between hover:bg-gray-200 py-2 px-2 rounded">
            <div className="flex">
              <img
                src="font awesome icons/circle-user-solid.svg"
                className="w-6 h-6"
              ></img>

              <p className="p-1"></p>
              <div className="">ASHBOURN CRISTAN D'CUNHA</div>
            </div>
            <button className="">Doc Maker (Admin)</button>
          </div>

          
          <div className="flex justify-between hover:bg-gray-200 py-2 px-2 rounded">
            <div className="flex">
              <img
                src="font awesome icons/circle-user-solid.svg"
                className="w-6 h-6"
              ></img>

              <p className="p-1"></p>
              <div className="">SAM FERNANDES</div>
            </div>
            <button className="">Doc Maker (Admin)</button>
          </div>

          <p className="p-1"></p>
        </div>
      </div>
    </div>
  )
}
export default Members;
