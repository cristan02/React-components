import React from 'react';

function Onpage(props){
    return(
        <div className='flex justify-between  w-full'>
            <div className='bold text-lg'>{props.page}</div>

            <button className='bg-gray-200 rounded-lg flex items-center px-2 py-1'>
                <img src='font awesome icons\plus-solid.svg' className='w-3 h-3'></img>
                <p className='p-1'></p>
                <span>{props.buttonText}</span>
            </button>
        </div>

    )
}
export default Onpage;