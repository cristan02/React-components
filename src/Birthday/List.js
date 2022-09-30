
import React, { useState } from 'react';
export default function List({ person }) {
    const [count, setCount] = useState(0)
    const { id, name, age, image } = person
    return (

        <div key={id} className="flex items-center mb-4">
            <img src={image} alt={name} height={50} width={50} className="rounded-[999px]" />
            <div className="grow">
                <div className="text-lg">{name}</div>
                <div className="text-md text-gray-400"> {age} years</div>
            </div>
            <div className="text-gray-400">Wished by : {count}</div>
            <buttton onClick={() => setCount(count + 1)} className="cursor-pointer p-3">
                <img className="w-6 h-6" src="birthday-cake.png"></img>
            </buttton>
        </div>
    )
}


