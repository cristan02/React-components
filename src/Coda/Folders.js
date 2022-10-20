import React from 'react';
import {Link} from 'react-router-dom';

import Topnav from './Components/Topnav';
import Navbar from './Components/Navbar';
import Onpage from './Components/Onpage'
function Folders(){
    return(
        <div className='flex w-full'>
            <Navbar/>
            <div className='flex flex-col w-full p-4'>
                <Topnav/>
                <p className='p-5'></p>
                <Onpage page='Folders' buttonText='New folder'/>

                <p className='p-1'></p>

                <div>All folders in this workspace. Hover to join and view a folder's docs.</div>

                <p className='p-4'></p>

                <div className='flex justify-between border-b-2  h-10'>
                    <ul className='flex flex-row'>
                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>All</li>
                        <p className='p-2'></p>

                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>Joined</li>
                        <p className='p-2'></p>

                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>Not joined</li>
                        <p className='p-2'></p>
                    </ul>
                    
                </div>

                <p className='p-2'></p>

                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-h fill-gray-500'><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                        
                        <p className='px-3'></p>
                        
                        <div className='flex flex-col items-center justify-start '>
                            <div className='text-gray-700 text-base'>My docs</div>
                            <button className='px-1 py-0 bg-gray-200 rounded border'>Joined</button>
                        </div>
                    </div>
                    <div className='flex justify-items-center'>
                        <img src='font awesome icons\circle-user-solid.svg' className='w-5 h-h'></img>
                        <span className='px-2'>1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Folders;