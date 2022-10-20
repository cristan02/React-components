import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Home from './Home';
import Shortcut from './Shortcut';
import Template from './Template';
import Packs from './Packs';
import Members from './Members';
import Settings from './Settings';
import Folders from './Folders';
import Mydocs from './Mydocs';

const Coda=() => {

    return (

        <div className='bg-white text-gray-400 font-sm'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Shortcut' element={<Shortcut/>}/>
                <Route path='/Template' element={<Template/>}/>
                <Route path='/Packs' element={<Packs/>}/>
                <Route path='/Members' element={<Members/>}/>
                <Route path='/Settings' element={<Settings/>}/>
                <Route path='/Folders' element={<Folders/>}/>
                <Route path='/Mydocs' element={<Mydocs/>}/>
            </Routes>
        </div>
    )
}
export default Coda;