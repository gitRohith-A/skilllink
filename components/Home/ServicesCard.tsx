import Image from 'next/image';
import React from 'react'
import img from '@/public/home/sercicesimg/servimg.png'
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import ServiceRytFilter from './Elements/ServiceRytFilter';


const carddata = [
    {
        id: 1,
        profile: `R`,
        title: `web development`,
        description: `rLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        tagname: `web development`,

        price: `200`,
        discprice: `250`

    },
    {
        id: 2,
        profile: `S`,
        title: `web development`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        tagname: `web development`,
        price: `200`,
        discprice: `250`

    },
    {
        id: 3,
        profile: `S`,
        title: `web development`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        tagname: ["web development", "web development", "web development"],
        price: `200`,
        discprice: `250`
    },
]
function ServicesCard() {
    return (
        <div className='container py-3 px-12'>
            <div className="grid grid-cols-4 gap-4">
                <div className="div col-span-3 space-y-4">
                    {carddata.map((item, index) => {
                        return (

                            <div key={index} className="service-cards p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
                                <div className="grid grid-cols-4 gap-6
                        ">
                                    <Image src={img} alt='image' className='col-span-1' />
                                    <div className="col-span-3 
                            flex-col justify-start items-start gap-1 inline-flex
                            ">
                                        <div className="flex justify-between items-center w-full">
                                            <div className="bg-bgclr py-2 px-4 flex w-fit rounded-lg space-x-1">
                                                <FaStar fill='#F79009' />
                                                <FaStar fill='#F79009' />
                                                <FaStar fill='#F79009' />
                                                <FaStar fill='#F79009' />
                                                <FaStar fill='#F79009' />
                                                <p className='text-slate-600 text-xs font-semibold'>
                                                    5/5 rated
                                                </p>
                                            </div>
                                            <Link href='/login' className="w-[33.52px] h-[32.33px] px-[10.76px] py-1 bg-blue-500 rounded-2xl justify-center items-center inline-flex">
                                                <div className="pb-[0.34px] flex-col justify-start items-center inline-flex">
                                                    <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">
                                                        {item.profile}
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <h4 className='text-h4'>
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.description}
                                        </p>
                                        <div className="flex space-x-3">
                                            <div tabIndex={1} key={index} className="bg-prime bg-opacity-15 w-fit px-4 py-1 rounded-3xl my-4
                                    text-slate-800 text-[13px] leading-relaxe
                                    ">
                                                {item.tagname}
                                            </div>
                                            <div className="bg-prime bg-opacity-15 w-fit px-4 py-1 rounded-3xl my-4
                                    text-slate-800 text-[13px] leading-relaxe
                                    ">
                                                Tag Name
                                            </div>
                                            <div className="bg-prime bg-opacity-15 w-fit px-4 py-1 rounded-3xl my-4
                                    text-slate-800 text-[13px] leading-relaxe
                                    ">
                                                Tag Name
                                            </div>
                                            <div className="bg-prime bg-opacity-15 w-fit px-4 py-1 rounded-3xl my-4
                                    text-slate-800 text-[13px] leading-relaxe
                                    ">
                                                Tag Name
                                            </div>

                                        </div>
                                        <div className="flex justify-between  w-full items-center">
                                            <p className='text-slate-800 text-xl font-bold '>
                                                $120
                                                <span className='text-zinc-600 line-through ml-3 text-sm font-normal '>
                                                    $190

                                                </span>
                                            </p>
                                            <div className="space-x-3">
                                                <button className=" px-4 py-2 rounded-md border-2 hover:drop-shadow-lg border-prime justify-center items-center gap-1 inline-flex">
                                                    <div className="text-blue-600 text-sm font-normal leading-normal">Get Quotation</div>
                                                </button>
                                                <Link href='/login' className=" px-4 py-2 rounded-md border-2 hover:drop-shadow-lg bg-prime justify-center items-center gap-1 inline-flex">
                                                    <div className="text-white text-sm font-normal leading-normal">More Info</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <ServiceRytFilter />

            </div>
        </div>
    )
}

export default ServicesCard
