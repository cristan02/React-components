import React, { useState } from 'react';

const Adder=() => {
  const [job,setJob] = useState(0);
  const [arr,setArr] = useState([]);

  function appArr(){
    setArr(prev => {
      return [...prev, job]
    })
    document.getElementById('clear').value="";
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
      <input type="text" id="clear" className="w-5/6 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none custom-size"
        onChange={(e)=>setJob(e.target.value)}
        placeholder="Enter a Todo"/>
        <span className="p-1"></span>
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center mr-2 mb-2" onClick={appArr}>Add</button>
        {/* <input type="text" placeholder="Enter a Todo" onChange={(e)=>setJob(e.target.value)}></input>*/}
        {/*<button onClick={appArr}>Add</button>*/}

        {arr.map((todo,index) => (
          <div className="mb-2 flex place-content-center w-full">
            <div className="flex align-center w-11/12  gap-x-0 place-content-between px-4 py-1 border border-zinc-600 rounded">
            <span  className="place-self-end"  onChange={(e)=>setJob(e.target.value)}>{todo}</span>
            <button onClick={() => handleClear(index)} className="w-6 place-self-end"><img src="icons8-trash-can.svg"></img></button>
          </div>
          <p className="p-1"></p>
          </div>
          
        ))}
        {arr.length > 0 && 
        <div className="w-full flex justify-center">
          <button type="button" class="text-white  bg-red-800 font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-2 dark:bg-red-600 dark:bg-red-700 dark:focus:ring-red-900" onClick={()=> setArr([])}>Delete All</button>
        </div>
        }
        
    </div>
  
  )
}
export default Adder;
