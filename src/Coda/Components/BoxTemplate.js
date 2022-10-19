import React from 'react';

function BoxTemplate(props){
    return(
        <div className='flex flex-col max-w-[480px]'>
                <img src={props.image} className='w-full h-[100px]'></img>
                <div className='p-2 flex flex-col items-center'>
                    <div className=''>{props.title}</div>
                    <div className='text-left'>{props.text}</div>
                </div>             
        </div>
    )
}
export default BoxTemplate;

