import React from 'react';
import {Link} from 'react-router-dom';

function TopnavSearch(){
    return(
        <div className='flex justify-end w-full'>
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
export default TopnavSearch;