import React from 'react';
import {Link} from 'react-router-dom';

import Topnav from './Components/Topnav';
import Navbar from './Components/Navbar';
import Onpage from './Components/Onpage'
function Home(){
    return(
        <div className='flex w-full'>
            <Navbar/>
            <div className='flex flex-col w-full p-4'>
                <Topnav/>
                <p className='p-5'></p>
                <Onpage page='chowgules.ac.in' buttonText='New doc'/>

                <p className='p-2'></p>

                <div>Docs & templates in this workspace and other docs shared with you</div>

                <p className='p-4'></p>

                <div className='flex justify-between'>
                    <div className=''>Templates</div>
                    <button className='text-blue-300'>Show</button>
                </div>

                <p className='py-4'></p>

                <div className='flex justify-between'>
                    <ul className='flex flex-row'>
                        <li className=''>Docs</li>
                        <p className='p-1'></p>

                        <li className=''>My Shortcuts</li>
                        <p className='p-1'></p>

                        <li className=''>Owned by me</li>
                        <p className='p-1'></p>

                        <li className=''>Shared with me</li>
                        <p className='p-1'></p>

                        <li className=''>Mentioned</li>
                        <p className='p-1'></p>

                        <li className=''>Deleted</li>
                        <p className='p-1'></p>
                    </ul>
                    <div className=''>Sort by viewed</div>
                </div>


                <p className='p-2'></p>

                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <div className='bg-gray-200 p-2 rounded-lg flex align-center'>
                            <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--b1glr5jJ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/396/3b0f0f01-b434-43de-aec4-e1d711a01d54.png' className='w-7 h-7'>
                            </img>
                        </div>

                        <p className='px-3'></p>
                        
                        <div className='flex flex-col'>
                            <div className=''>Meet Coda</div>
                            <div className='flex'>
                                <button className='px-1 bg-gray-200 rounded border'>Joined</button>
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
export default Home;