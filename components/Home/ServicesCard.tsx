'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import img from '@/public/home/sercicesimg/servimg.png'
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import ServiceRytFilter from './Elements/ServiceRytFilter';
import Loading from '../others/loading';
import { ScaleLoader } from 'react-spinners';


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
    const [data, setData] = useState([{}])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/post`);
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setData(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    console.log(data)

    return (
        <div className='container py-3 px-12'>
            {loading ? <ScaleLoader /> :
                <div className="grid grid-cols-4 gap-4">
                    <div className="div col-span-3 space-y-4">
                        {data.map((item: any, index: any) => {
                            return (
                                <div key={index} className="service-cards p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
                                    <div className="grid grid-cols-4 gap-6">
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
                                                <Link href={`http://${item.user_id.websiteURL}`} className="w-[33.52px] h-[32.33px] px-[10.76px] py-1 bg-blue-500 rounded-2xl justify-center items-center inline-flex">
                                                    <div className="pb-[0.34px] flex-col justify-start items-center inline-flex">
                                                        <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">
                                                            <Image src={process.env.NEXT_PUBLIC_SERVER_URL + '/' + item.user_id.icon} alt='-' width={30} height={30} />
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
                                                {item.points.map((ele: any) => (

                                                    <div tabIndex={1} key={index} className="bg-prime bg-opacity-15 w-fit px-4 py-1 rounded-3xl my-4 text-slate-800 text-[13px] leading-relaxe ">
                                                        {ele}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-between  w-full items-center">
                                                <p className='text-slate-800 text-xl font-bold '>
                                                ₹ {item.price}
                                                    <span className='text-zinc-600 line-through ml-3 text-sm font-normal '>
                                                        {item.discountPrice}
                                                    </span>
                                                </p>
                                                <div className="space-x-3">
                                                    <button className=" px-4 py-2 rounded-md border-2 hover:drop-shadow-lg border-prime justify-center items-center gap-1 inline-flex">
                                                        <div className="text-blue-600 text-sm font-normal leading-normal">Get Quotation</div>
                                                    </button>
                                                    <Link href='/service' className=" px-4 py-2 rounded-md border-2 hover:drop-shadow-lg bg-prime justify-center items-center gap-1 inline-flex">
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
            }

        </div>
    )
}

export default ServicesCard
