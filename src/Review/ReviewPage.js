import { useState } from 'react';
import Review from './Review';
import data from './reviews';

function ReviewPage() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  function prev() {
    if (index == 0) return setIndex(people.length - 1)

    setIndex(index - 1)
  }

  function next() {
    if (index == people.length - 1)  return setIndex(0)

    setIndex(index + 1)
  }

  return (
    <div className='mt-[4rem] w-full flex justify-center'>
      <div className='bg-gray-800 p-5 rounded-lg min-w-[400px] bg-gradient-to-b from-sky-400 to-sky-300'>
        <div className='text-3xl text-center font-semibold text-zinc-900'>Movie Reviews</div>
        <p className='p-1'></p>
        <Review person={people[index]}/>
        <p className='p-2'></p>
        <div className='flex justify-center p-1'>
            
            <button type="button" onClick={prev} className="border border-blue-700 bg-blue-700 text-white  font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:border-blue-500  dark:text-white">
              Prev
            </button>
            <p className='p-2'></p>
            
            <button type="button" onClick={next} className="border border-blue-700 bg-blue-700 text-white  font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:border-blue-500  dark:text-white">
              Next
            </button>

        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
