import React from 'react'
import { Link } from 'react-router-dom'

import TopnavSearch from './Components/TopnavSearch'
import Navbar from './Components/Navbar'
import Onpage from './Components/Onpage'
function Settings() {
  return (
    <div className="flex w-full">
      <Navbar />
      <div className="flex flex-col w-full p-4">
        <TopnavSearch />
        <p className="p-5"></p>

        <div className=''>
          <Onpage page="Workspace settings" buttonText="Invite" />

          <p className="p-2"></p>

          <ul className="flex flex-row h-10">
            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">About</li>
            <p className="p-2"></p>

            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">Billing</li>
            <p className="p-2"></p>

            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">Packs</li>
            <p className="p-2"></p>

            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">Access</li>

            <li className="py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700">Activity</li>
          </ul>

          <p className="p-2"></p>

          <div className='text-lg text-gray-700'>Name</div>
          
          <p className="p-2"></p>

          <input value='chowgules.ac.in' className='p-2 w-[600px] bg-gray-100 text-gray-700'></input>

          <p className="p-2"></p>

          <div className='text-lg text-gray-700'>Description</div>
          
          <p className="p-2"></p>

          <input paceholder='chowgules.ac.in' className='p-2 w-[600px] bg-gray-100 text-gray-700'></input>

          <p className="p-3"></p>
          <hr className=''></hr>
          <p className="p-3"></p>

            <button className='bg-blue-300 px-2 py-1 text-white rounded-lg'>Delete workspace</button>
          </div>
      </div>
    </div>
  )
}
export default Settings;
