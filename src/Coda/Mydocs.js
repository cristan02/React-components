import React from 'react';
import {Link} from 'react-router-dom';

import Topnav from './Components/Topnav';
import Navbar from './Components/Navbar';
import Onpage from './Components/Onpage'
function Mydocs(){
    return(
        <div className='flex w-full'>
            <Navbar/>
            <div className='flex flex-col w-full p-4'>
                <Topnav/>
                <p className='p-5'></p>
                <Onpage page='My docs' buttonText='New doc'/>

                <p className='p-2'></p>

                <div>Private docs only available to you and people you've shared with</div>

                <p className='p-5'></p>

                <div className='flex justify-between border-b-2  h-10'>
                    <ul className='flex flex-row'>
                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>Docs</li>
                        <p className='p-2'></p>

                    </ul>
                    <div className=''>Sort by modified</div>
                </div>
                
                <div className='flex justify-between items-center rounded hover:bg-gray-100 py-4 px-5 mx-[-12px]'>
                    <div className='flex'>
                        <div className='border-2 border-gray-200 p-2 rounded-lg flex align-center'>
                            <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--b1glr5jJ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/396/3b0f0f01-b434-43de-aec4-e1d711a01d54.png' className='w-7 h-7'>
                            </img>
                        </div>

                        <p className='px-3'></p>
                        
                        <div className='flex flex-col '>
                            <div className='text-gray-700'>Meet Coda</div>
                            <div className='flex'>
                                <button className='px-1 bg-gray-200 rounded border'>My docs</button>
                                <p className='p-1'></p>
                                <div className=''>Last modified by you yersterday at 10:15 AM</div>
                            </div>
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
export default Mydocs;