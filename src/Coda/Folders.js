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

                <div className='flex justify-between'>
                    <ul className='flex flex-row'>
                        <li className=''>All</li>
                        <p className='p-1'></p>

                        <li className=''>Joined</li>
                        <p className='p-1'></p>

                        <li className=''>Not joined</li>
                        <p className='p-1'></p>
                    </ul>
                    <div className=''>Sort by viewed</div>
                </div>

                <p className='p-2'></p>

                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <img src='font awesome icons\lock-solid.svg' className='w-5 h-h'></img>

                        <p className='px-3'></p>
                        
                        <div className='flex flex-col items-center justify-start '>
                            <div className=''>My docs</div>
                            <button className='px-1 bg-gray-200 rounded border'>Joined</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src='font awesome icons\circle-user-solid.svg' className='w-5 h-h'></img>
                        <span className=''>1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Folders;