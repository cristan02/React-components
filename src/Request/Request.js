import Header from './Header';
import data from './friends';
import FriendReq from './FriendReq';


const Request=() => {

    return (
        <div className='flex rounded border justify-center items-center w-full h-screen bg-gradient-to-r from-green-200 to-green-500 '>
            <div className='bg-gray-200 p-5 rounded-lg w-[500px] h-fit'>
                <p className='p-2'></p>
                <Header/>
                <p className='p-4'></p>
                <FriendReq req={data}/>
            </div>
        </div>
    )
}
export default Request;