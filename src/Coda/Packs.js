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
                    <img src='' className='w-full h-[200px]'></img>
                </div>

                <p className='p-4'></p>
                <Onpage page='Packs' buttonText='Create a Pack'/>

                <p className='py-4'></p>

                <div className='flex justify-between'>
                    <ul className='flex flex-row'>
                        <li className=''>My Packs</li>
                        <p className='p-1'></p>

                        <li className=''>Shared with me</li>
                        <p className='p-1'></p>

                        <li className=''>Shared with workspace</li>
                        <p className='p-1'></p>

                        <li className=''>Subscriptions</li>
                        <p className='p-1'></p>

                    </ul>
                    <div className=''>Sort by Last edited</div>
                </div>


                <p className='p-2'></p>

                
                    
            </div>
        </div>
    )
}
export default Packs;