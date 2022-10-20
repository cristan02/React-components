import React from 'react';
import {Link} from 'react-router-dom';

import TopnavSearch from './Components/TopnavSearch';
import Navbar from './Components/Navbar';
import Onpage from './Components/Onpage';
import BoxTemplate from './Components/BoxTemplate';

function Template(){
    return(
        <div className='flex w-full'>
            <Navbar/>
            <div className='flex flex-col w-full p-4'>
                <TopnavSearch/>

                <p className='p-2'></p>

                <div className='border rounded-lg'>
                    <img src='https://cdn.coda.io/assets/de6d81724f05/img/workspaces/templates-background.png' className='w-full h-[210px] rounded-lg'></img>
                </div>

                <p className='p-4'></p>
                <Onpage page='Manage templates' buttonText='Create a template'/>

                <p className='py-4'></p>

                <div className='flex flex-col items-center justify-center px-[50px] py-[25px] border  rounded-lg'>
                    <div className='text-gray-500 text-lg'>No custom templates...yet</div>

                    <p className='p-1'></p>

                    <div className=''>Browse our templates to start your doc, see how other teams use</div>

                    <div className=''>Coda, or create your own.</div>
                    
                    <p className='p-4'></p>
                    
                    <div className='w-full flex grid grid-cols-3 gap-5 px-6 max-w-[980px]'>
                        <BoxTemplate image='https://cdn.coda.io/assets/de6d81724f05/img/templates/browse_templates_banner.png' title='Browse all templates' text='See what you can build with Coda, and jumpstart your first doc.'/>
                        <BoxTemplate image='https://cdn.coda.io/assets/de6d81724f05/img/templates/gallery_banner.png' title='Get inspired by real teams' text='Coda templates power thousands of teams to do their best work.'/>
                        <BoxTemplate image='https://cdn.coda.io/assets/de6d81724f05/img/templates/make_templates_banner.png' title='Make your own template' text='Building docs over and over again? 
                        create a custom template to share.'/>
                    </div>

                    

                </div>
                <p className='p-2'></p>

                
                    
            </div>
        </div>
    )
}
export default Template;