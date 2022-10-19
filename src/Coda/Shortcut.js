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

                <div className='flex justify-between'>
                    <ul className='flex flex-row'>
                        <li className=''>Docs</li>
                        <p className='p-1'></p>            
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Shortcut;