
import '../App.css';
import React, { useState } from 'react';
import data from './data';
import List from './List';

const Birthday=() => {
  const [people,setPeople] = useState(data);

  return (
    <div className='w-full h-screen flex justify-center items-center bg-rose-500'>
      <div className='bg-white min-w-[400px] rounded-lg p-4' >
        <div className="text-2xl"> {people.length} Birthdays today</div>
        <p className='p-2'></p>
        {people.map((person) => (
            <List person={person}/>
        ))}
        
        <button className="w-full bg-rose-500 hovrt:bg-rose-600 px-2 py-1 rounded" onClick={()=> setPeople([])}>Clear</button>
      </div>
    </div>
  );
}
export default Birthday;