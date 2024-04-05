import React from 'react'
import { FaSearchengin } from "react-icons/fa";

const filterData = [
    {
        id: 1,
        title: `web development`
    },
    {
        id: 2,
        title: `web development`
    },
    {
        id: 3,
        title: `web development`
    },
    {
        id: 4,
        title: `web development`
    },
    {
        id: 5,
        title: `web development`
    },
    {
        id: 6,
        title: `web development`
    },
]

function SearchandFilters() {
    return (
        <div className='container '>
            <div className=" flex justify-around items-center my-14">

                <div className="flex ">
                    <input type="search" id='search' placeholder='What service are you looking for today?' required className='w-[50rem] border-prime border-[1px] rounded-l-xl px-4 py-2  outline-none ' />
                    <div className="div">
                        <button type="submit" className="text-white h-[45px]  bg-prime hover:bg-prime  font-medium rounded-r-lg text-sm px-4 ">
                            <div className="div">
                                <FaSearchengin size={25} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <ul className='flex my-12 justify-center'>
                {filterData.map((item, index) => {
                    return (

                        <li className='px-3  bg-black m-1 rounded-3xl text-white font-light hover:bg-prime hover:text-white'><p className='px-3 py-2 text-[10px]'>{item.title}</p></li>

                    )
                })}
            </ul>



        </div>
    )
}

export default SearchandFilters
