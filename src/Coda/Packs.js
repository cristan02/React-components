import React from 'react';
import {Link} from 'react-router-dom';

import TopnavSearch from './Components/TopnavSearch';
import Navbar from './Components/Navbar';
import Onpage from './Components/Onpage'
function Packs(){
    return(
        <div className='flex w-full'>
            <Navbar/>
            <div className='flex flex-col w-full p-4'>
                <TopnavSearch/>

                <p className='p-2'></p>

                <div className='rounded-lg'>
                    <img src='https://cdn.coda.io/assets/de6d81724f05/img/workspaces/packs-banner.png' className='w-full h-[210px] rounded-lg'></img>
                </div>

                <p className='p-4'></p>
                <Onpage page='Packs' buttonText='Create a Pack'/>

                <p className='py-4'></p>

                <div className='flex justify-between border-b-2 h-10'>
                    <ul className='flex flex-row'>
                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>My Packs</li>
                        <p className='p-2'></p>

                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>Shared with me</li>
                        <p className='p-2'></p>

                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>Shared with workspace</li>
                        <p className='p-2'></p>

                        <li className='py-2 cursor-pointer hover:text-gray-700 hover:border-b-2  hover:border-gray-700'>Subscriptions</li>
                        <p className='p-2'></p>

                    </ul>
                    <div className=''>Sort by Subscription date</div>
                </div>


                <p className='p-2'></p>

                
                    
            </div>
        </div>
    )
}
export default Packs;