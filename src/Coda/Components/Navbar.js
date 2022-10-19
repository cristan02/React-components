import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className='text-gray-600 p-2' > 
            <div className='w-[290px] p-4 h-screen border-r-2'>
                <div className='flex items-center justify-between '>
                    <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--b1glr5jJ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/396/3b0f0f01-b434-43de-aec4-e1d711a01d54.png' className='w-7 h-7'>
                    </img>
                    <img src='font awesome icons\backward-solid.svg ' className='w-5 h-5 '></img>
                </div>
                <p className='p-2'></p>
                <ul className="flex flex-col list-none  p-2 justify-left">
                    <li className="nav-item ">
                    <Link to='/'>                   
                        <div className='flex flex-row'>
                        <img src='font awesome icons\s-solid.svg ' className='w-5 h-5 border rounded p-1'></img>
                            <span className='px-4'>Home</span>
                        </div>
                    </Link>
                    </li>
                    <p className='p-2'></p>

                    <li className="nav-item">
                    <Link to='/Shortcut'>
                    <div className='flex flex-row'>
                        <img src='font awesome icons\star-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>My shortcuts</span>
                        </div>
                    </Link>
                    </li>
                    <p className='p-2'></p>
                    <li className="nav-item">
                        <Link to='/Template'>
                        <div className='flex flex-row'>
                        <img src='font awesome icons\newspaper-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>Manage templates</span>
                        </div>
                        </Link>
                    </li>
                    <p className='p-2'></p>

                    <li className="nav-item">
                        <Link to='/Packs'>
                        <div className='flex flex-row'>
                        <img src='font awesome icons\puzzle-piece-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>Packs</span>
                        </div>
                        </Link>
                    </li>
                    <p className='p-2'></p>
                    

                    <li className="nav-item">
                        <Link to='/Members'>
                        <div className='flex flex-row'>
                        <img src='font awesome icons\people-group-solid.svg ' className='w-5 h-5 '></img>
                            <span className='px-4'>Members</span>
                        </div>
                        </Link>
                    </li>
                    <p className='p-2'></p>

                    <li className="nav-item  flex items-center justify-between">
                        <Link to='/Folders'>
                        <div className='flex w-full justify-between'>
                            <span className='w-[230px]'>Folders</span>
                            <img src='font awesome icons\plus-solid.svg ' className='w-5 h-5 '></img>
                        </div>
                        </Link>
                    </li>
                    <p className='p-2'></p>

                    <li className="nav-item">
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