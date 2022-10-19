import React from 'react';
import {Link} from 'react-router-dom';

function Topnav(){
    return(
        <div className='flex justify-between w-full'>
            <div className='flex w-full'>
                <button className='flex justify-center align-center h-10 w-15 bg-gray-200'>
                    <img src='' className='w-5 h-5'></img>
                </button>
                <input className='flex justify-center align-center h-10 w-30 bg-gray-200 rounded-lg' placeholder='Search all docs'></input>
            </div>
            <ul className='flex flex-row items-center h-10 w-15 '>
                <li className=''>Solutions</li>
                <p className='p-4'></p>
                <li className=''>Resorces</li>
                <p className='p-4'></p>
                <li className=''>Gallery</li>
                <p className='p-4'></p>
                <li className=''>Pricing</li>
                <p className='p-4'></p>
                <img src='font awesome icons/circle-user-solid.svg' className='w-5 h-5'></img>
            </ul>

        </div>

    )
}
export default Topnav;