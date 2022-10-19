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

                <div className='flex justify-between'>
                    <ul className='flex flex-row'>
                        <li className=''>Docs</li>
                        <p className='p-1'></p>

                    </ul>
                    <div className=''>Sort by modified</div>
                </div>
                
                <p className='p-2'></p>

                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <div className='bg-gray-200 p-2 rounded-lg flex align-center'>
                            <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--b1glr5jJ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/396/3b0f0f01-b434-43de-aec4-e1d711a01d54.png' className='w-7 h-7'>
                            </img>
                        </div>

                        <p className='px-3'></p>
                        
                        <div className='flex flex-col '>
                            <div className=''>Meet Coda</div>
                            <div className=''>Last modified by you yersterday at 10:15 AM</div>
                        </div>
                    </div>
                    <div className='flex'></div>
                </div>
            </div>
        </div>
    )
}
export default Mydocs;