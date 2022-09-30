import React, { useState } from 'react';

const Adder=() => {
  const [job,setJob] = useState(0);
  const [arr,setArr] = useState([]);

  function appArr(){
    setArr(prev => {
      return [...prev, job]
    })
  }

  const handleClear = (idx) => {
    setArr(prev => {
        return prev.filter((val, index) => {
            if (index != idx) return val
        })
    })
  }
  return ( 
    <div>
        <input type="text" placeholder="Enter a Todo" onChange={(e)=>setJob(e.target.value)}></input>
        <button onClick={appArr}>Add</button>

        {arr.map((todo,index) => (
          <div>
            <span  onChange={(e)=>setJob(e.target.value)}>{todo}</span>
            <button onClick={() => handleClear(index)}>delete</button>
          </div>
        ))}

        
    </div>
  
  )
}
export default Adder;