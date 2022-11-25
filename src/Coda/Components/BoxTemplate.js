import React from 'react'

function BoxTemplate(props) {
  return (
    <div className="flex justify-start flex-col max-w-[300px] border rounded-lg text-left">
      <img src={props.image} className="w-full h-[100px]"></img>
      <p className='p-2'></p>
      <div className="p-2 flex flex-col ">
        <div className="text-gray-700 font-semibold">{props.title}</div>
        <p className='p-1'></p>
        <div className="text-left text-gray-700">{props.text}</div>
      </div>
      <p className='p-3'></p>
      <div className='px-2'>
        <div className=" flex-items-center py-0 border border-gray-500 rounded-lg text-gray-800  text-base flex justify-center items-center ">
            Browse templates
        </div>
      </div>
      <p className='p-2'></p>
    </div>
  )
}
export default BoxTemplate
