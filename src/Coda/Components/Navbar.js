import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className='text-gray-600 p-2' > 
            <div className='w-[250px] min-h-screen h-full border-r-2'>
                <div className='flex items-center justify-between py-4 px-3'>
                    <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--b1glr5jJ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/396/3b0f0f01-b434-43de-aec4-e1d711a01d54.png' className='w-6 h-6'>
                    </img>
                    {/* <img src='font awesome icons\backward-solid.svg ' className='w-5 h-5 '/> */}
                </div>
                <p className='p-0'></p>
                <ul className='first-line:flex flex-col list-none  text-gray-400 justify-left px-1'>
                    <li className='nav-item hover:bg-gray-100 py-3 hover:rounded px-2 text-sm'>
                    <Link to='/'>                   
                        <div className='flex flex-row'>
                        <img src='font awesome icons\s-solid.svg ' className='w-5 h-5 border rounded p-1'></img>
                            <span className='px-4'>Home</span>
                        </div>
                    </Link>
                    </li>
                    

                   <li className='nav-item hover:bg-gray-100 py-3 hover:rounded px-2 text-sm'>
                    <Link to='/Shortcut'>
                    <div className='flex flex-row'>
                        <img src='font awesome icons\star-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>My shortcuts</span>
                        </div>
                    </Link>
                    </li>
                    
                   <li className='nav-item hover:bg-gray-100 py-3 hover:rounded px-2 text-sm'>
                        <Link to='/Template'>
                        <div className='flex flex-row'>
                        <img src='font awesome icons\newspaper-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>Manage templates</span>
                        </div>
                        </Link>
                    </li>
                    

                   <li className='nav-item hover:bg-gray-100 py-3 hover:rounded px-2 text-sm'>
                        <Link to='/Packs'>
                        <div className='flex flex-row'>
                        <img src='font awesome icons\puzzle-piece-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>Packs</span>
                        </div>
                        </Link>
                    </li>
                    
                    

                   <li className='nav-item hover:bg-gray-100 py-3 hover:rounded px-2 text-sm'>
                        <Link to='/Members'>
                        <div className='flex justify-between '>
                            <div className='flex flex-row'>
                            <img src='font awesome icons\people-group-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>Members</span>
                            </div>
                            <img src='font awesome icons\plus-solid.svg ' className='w-4 h-4 '></img>
                        </div>
                        </Link>
                    </li>

                    <li className='nav-item hover:bg-gray-100 py-3 hover:rounded px-2 text-sm'>
                        <Link to='/Settings'>
                        <div className='flex justify-between '>
                            <div className='flex flex-row'>
                            <img src='font awesome icons\gear-solid.svg' className='w-5 h-5 '></img>
                            <span className='px-4'>Workspace settings</span>
                            </div>
                        </div>
                        </Link>
                    </li>
                    
                    <p className='p-2'></p>

                    <li className="nav-item  flex items-center justify-between hover:bg-gray-100 py-2 hover:rounded px-3 text-sm ">
                        <Link to='/Folders'>
                        <div className='flex w-full justify-between'>
                            <span className='w-[220px]'>Folders</span>
                            <img src='font awesome icons\plus-solid.svg ' className='w-4 h-4 '></img>
                        </div>
                        </Link>
                    </li>
                    

                   <li className='nav-item hover:bg-gray-100 py-3 hover:rounded px-2 text-sm'>
                        <Link to='/Mydocs'>
                        <div className='flex flex-row'>
                        <img src='font awesome icons\lock-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>My docs</span>
                        </div>
                        </Link>
                    </li>
                </ul>

               
            </div>
            <div classname=''>

            </div>
        </div>
    )
}
export default Navbar;