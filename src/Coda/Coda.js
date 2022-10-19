import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Home from './Home';
import Shortcut from './Shortcut';
import Template from './Template';
import Packs from './Packs';
import Members from './Members';
import Folders from './Folders';
import Mydocs from './Mydocs';

const Coda=() => {

    return (

        <div className='bg-white'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Shortcut' element={<Shortcut/>}/>
                <Route path='/Template' element={<Template/>}/>
                <Route path='/Packs' element={<Packs/>}/>
                <Route path='/Members' element={<Members/>}/>
                <Route path='/Folders' element={<Folders/>}/>
                <Route path='/Mydocs' element={<Mydocs/>}/>
            </Routes>
        </div>
    )
}
export default Coda;