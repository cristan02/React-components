import React, { useState } from 'react';

const FriendReq=(props) => {

    const [req,setReq] = useState(props.req);

    const handleClear = (idx) => {
        setReq(prev => {
            return prev.filter((val, index) => {
                if (index != idx) return val
            })
        })
        
      }

    return (
        req.map((person,index) => (
            <div key={person.id} className="flex items-center mb-2  justify-between">
                <div className='flex justify-center gap-2 items-center'>
                    <img src={person.image} alt={person.username} height={50} width={50} className="rounded-[999px]" />
                    
                    <div className="grow flex flex-col">
                        <div className="text-lg leading-none">{person.username}</div>
                        <div className=" text-md text-gray-400">{person.name}</div>
                    </div>
                </div>
                <buttton className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700" onClick={() => handleClear(index)}>
                    Accept
                </buttton>
            </div>
        ))
    )
}
export default FriendReq;