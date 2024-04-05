'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { MdOutlineThumbDown, MdOutlineThumbUp } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

function ReviewList() {
    const [review, setReview] = useState(false)

    const click = () => {

    }

    const data = [
        {
            name: 'ROhit',
            Country: 'United States',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eos accusantium dolores corporis quae vel ipsum velit voluptatum ratione iste iure, magnam consequuntur recusandae ullam.',
            months: '5 months'
        },
        {
            name: 'Shuheb',
            Country: 'India',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eos accusantium dolores corporis quae vel ipsum velit voluptatum ratione iste iure, magnam consequuntur recusandae ullam.',
            months: '5 months'
        }, {
            name: 'ROhit',
            Country: 'United States',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eos accusantium dolores corporis quae vel ipsum velit voluptatum ratione iste iure, magnam consequuntur recusandae ullam.',
            months: '5 months'
        },
        {
            name: 'Shuheb',
            Country: 'India',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eos accusantium dolores corporis quae vel ipsum velit voluptatum ratione iste iure, magnam consequuntur recusandae ullam.',
            months: '5 months'
        },

    ]
    return (
        <div className="grid grid-cols-2 gap-[50px]  mt-20">
            {data.map(ele => (

                <div className="">
                    <div className="flex space-x-3 items-center">
                        <Link href='/login' className="w-14 h-14 px-[10.76px] py-1 bg-blue-500 rounded-[100%] justify-center items-center inline-flex">
                            <div className="flex-col justify-start items-center inline-flex">
                                <div className="text-center text-white text-base font-bold uppercase leading-normal">r</div>
                            </div>
                        </Link>
                        <div className="">
                            <p className='text-zinc-700 text-base font-bold '>
                                {ele.name}
                            </p>
                            <p className='text-neutral-500 text-sm font-normal '>
                                {ele.Country}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mt-6">
                        <div className=" star flex w-fit items-center me-2">
                            <div className="flex items-center">
                                <FaStar fill='#404145' />
                                <FaStar fill='#404145' />
                                <FaStar fill='#404145' />
                                <FaStar fill='#404145' />
                                <FaStar fill='#404145' />
                                <span className='ms-1 mt-1'>
                                    5
                                </span>
                            </div>

                        </div>
                        <p className='border-l border-zinc-400 ps-2 mt-1'>{ele.months} ago</p>
                    </div>
                    {ele.text}

                    <div className="flex items-center text-zinc-700 text-sm font-bold leading-10">
                        Helpfull ?
                        <button className={`flex items-center text-blue-800 mx-2`}><MdOutlineThumbUp /> &nbsp; yes</button>
                        <button className="flex items-center mx-2"><MdOutlineThumbDown /> &nbsp; no</button>

                    </div>
                </div>
            ))}
            <button className='flex items-center gap-6 m-auto col-span-2 w-full justify-center py-3
          rounded-full border-2 border-zinc-800
          text-zinc-800 text-lg font-semibold leading-9
            '>
                See More Reviews
                <FaArrowRightLong />
            </button>
        </div>
    )
}

export default ReviewList

