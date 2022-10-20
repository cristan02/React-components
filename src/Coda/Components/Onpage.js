import React from 'react';

function Onpage(props){
    return(
        <div className='flex justify-between  w-full'>
            <div className='bold text-2xl font-semibold text-gray-700'>{props.page}</div>

            <button className='bg-black rounded-lg flex items-center px-3 py-2 text-white
            '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-4 h-4 fill-white'><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                <p className='p-1'></p>
                <span>{props.buttonText}</span>
            </button>
        </div>

    )
}
export default Onpage;