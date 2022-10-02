import { useEffect, useState } from 'react';
import data from './menu'

function Restaurant() {
    const [menu, setMenu] = useState(data);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let cats = ['all']
        data.forEach(val => {
            if (!cats.includes(val.category))
                cats.push(val.category)
        })
        setCategories(cats)
    })

    function handleAll(cat) {
        if (cat == "all") return setMenu(data)

        setMenu(() => {
            return data.filter(item => {
                if (item.category == cat) return item
            })
        })
    }


    return (
        <div className='py-11 w-full h-full min-h-screen flex  items-center flex-col bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 '>
            <div className='max-w-lg text-4xl font-semibold leading-normal text-stone-800 font-nono'>Our Menu</div>
            <hr className='w-14 h-1 bg-orange-400 rounded border-0  '></hr>
            <p className="p-2"></p>
            <div className='flex flex-row space-x-5 '>
                {categories.map(cat => {
                    return (
                        <div>
                            {/*<button className='capitalize py-1 px-3 rounded ' onClick={(e) => {
                        handleAll(cat);
                    }}>{cat}</button>*/}
                            <button type="button" className=' capitalize bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2 w-20 text-gray-700 text-lg font-semibold text-stone-800 
                            focus:shadow focus:shadow-slate-800' onClick={(e) => {
                                handleAll(cat);
                            }}>{cat}</button>
                            <p className="p-2"></p>
                        </div>
                    )
                })}
            </div>

            <div className='flex grid grid-cols-2 gap-4 p-2 '>
                {menu.map((item, idx) => (
                    <div className='rounded bg-gray-50 p-4 py-6 flex flex-col h-50 max-w-[370px] min-w-[280px] items-center shadow-md shadow-zinc-500'>
                        <div className='place-self-start inline-block px-3 py-1 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full transition duration-150 ease-in-ou bg-red-200'>{item.category}</div>
                
                        <img className='shadow-lg w-44 h-44 rounded-full border border-gray-100 shadow-sm' src={item.image} />
                        <div className='flex flex-col p-2 items-center'>
                            <div className='capitalize  text-xl'>{item.name}</div>
                            <div className='text-gray-400 text-center'>~{item.description}</div>
                        </div>
                        <div className='text-xl font-semibold'>{item.price}</div>
                        <button type="button" class="text-white bg-red-700 hover:bg-red-800 font-light rounded-full text-xs px-4 py-2 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 ">ORDER NOW</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurant;