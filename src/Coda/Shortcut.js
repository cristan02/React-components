import React from 'react';
import {Link} from 'react-router-dom';

import Topnav from './Components/Topnav';
import Navbar from './Components/Navbar';
import Onpage from './Components/Onpage';

function Shortcut(){
    return(
        <div className='flex w-full'>
            <Navbar/>
            <div className='flex flex-col w-full p-4'>
                <Topnav/>
                <p className='p-5'></p>
                <Onpage page='My shortcuts' buttonText='New doc'/>

                <p className='p-2'></p>

                <div>Favourited docs across your workspace and other docs shared with you</div>

                <p className='p-6'></p>

                <div className='flex justify-between border-b-2  h-10'>
                    <ul className='flex flex-row'>
                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>Docs</li>          
                    </ul>
                </div>

                <div className='flex justify-between items-center rounded hover:bg-gray-100 py-4 px-5 mx-[-12px]'>
                    <div className='flex items-center'>
                        <div className='border-2 border-gray-200 p-2 rounded-lg flex align-center'>
                            <img src='font awesome icons\star-solid.svg' className='w-6 h-6'>
                            </img>
                        </div>

                        <p className='px-3'></p>
                        
                        <div className='flex flex-col '>
                            You dont have any stared document yet
                        </div>
                    </div>
                    <div className='flex'>
                        <img src='font awesome icons\ellipsis-solid.svg' className='w-5 h-h'></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Shortcut;