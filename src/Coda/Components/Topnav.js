import React from 'react';
import {Link} from 'react-router-dom';

function Topnav(){
    return(
        <div className='flex justify-between w-full'>
            <div className='flex w-full text-sm'>
                <button className='flex items-center justify-center align-center h-8 w-10  bg-gray-100 rounded-l-lg  p-3'>
                    <img src='font awesome icons\magnifying-glass-solid.svg' className='w-5 h-5'></img>
                </button>
                <input className='flex justify-center align-center h-8 min-w-30 w-[370px] bg-gray-100 rounded-r-lg' placeholder='Search all docs'></input>
            </div>
            <ul className='flex flex-row justify-center items-center h-10 w-15  text-gray-500 text-sm  '>
                <li className=''>Solutions</li>
                <p className='p-4'></p>
                <li className=''>Resorces</li>
                <p className='p-4'></p>
                <li className=''>Gallery</li>
                <p className='p-4'></p>
                <li className=''>Pricing</li>
                <p className='p-4'></p>
                <img src='font awesome icons/circle-user-solid.svg' className='w-6 h-6'></img>
            </ul>

        </div>

    )
}
export default Topnav;