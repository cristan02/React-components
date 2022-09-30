
import '../App.css';
import Header from './Header';
import Adder from './Adder';

const Notes=() => {
  return (
    <div className='mt-[4rem] w-full flex justify-center p-4 '>
      <div className='bg-gray-800 p-5 rounded-lg min-w-[400px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
          <Header/>
          <p className="p-2"></p>
          <Adder/>
        </div>
    </div>

  );
}
export default Notes;