import React from 'react';
import {Link} from 'react-router-dom';

import TopnavSearch from './Components/TopnavSearch';
import Navbar from './Components/Navbar';
import Onpage from './Components/Onpage'
function Home(){
    return(
        <div className='flex w-full'>
            <Navbar/>
            <div className='flex flex-col w-full p-4'>
                <TopnavSearch/>
                <p className='p-5'></p>
                <Onpage page='Members & groups' buttonText='Invite'/>

                <p className='p-2'></p>

                <ul className='flex flex-row'>
                        <li className=''>Current members</li>
                        <p className='p-1'></p>

                        <li className=''>Removed members</li>
                        <p className='p-1'></p>

                        <li className=''>Offboarded members</li>
                        <p className='p-1'></p>

                        <li className=''>Groups</li>
                </ul>

                <p className='p-4'></p>

                <div>Current</div>
                <div>Current members of this workspace, Roles can be modified below.</div>

                <p className='p-4'></p>

                <div className='flex justify-end w-full'>
                    <button className='flex justify-center align-center h-10 w-15 bg-gray-200'>
                        <img src='' className='w-5 h-5'></img>
                    </button>
                    <input className='flex justify-center align-center h-10 w-30 bg-gray-200 rounded-lg' placeholder='Search all docs'></input>
                </div>

                <p className='p-4'></p>

                <div className='flex justify-between'>
                    <div className='flex'>
                    <img src='font awesome icons/circle-user-solid.svg' className='w-5 h-5'></img>

                    <p className='p-1'></p>
                    <div className=''>ASHBOURN CRISTAN D'CUNHA</div>

                    </div>
                    <button className=''>Doc Maker (Admin)</button>
                </div>

                <p className='p-2'></p>
                <div className='flex justify-between'>
                    <div className='flex'>
                    <img src='font awesome icons/circle-user-solid.svg' className='w-5 h-5'></img>

                    <p className='p-1'></p>
                    <div className=''>SAM FERNANDES</div>

                    </div>
                    <button className=''>Doc Maker (Admin)</button>
                </div>

                <p className='p-1'></p>

                
            </div>
        </div>
    )
}
export default Home;