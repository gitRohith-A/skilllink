import Image from 'next/image'
import React from 'react'
import art from '@/public/home/categories/art.svg'
import management from '@/public/home/categories/management.svg'
import business from '@/public/home/categories/business.svg'
import finance from '@/public/home/categories/finance.svg'
import data from '@/public/home/categories/data-science.svg'
import dev from '@/public/home/categories/dev.svg'
import marketing from '@/public/home/categories/marketing.svg'

function Categories() {
    return (
        <div className=' bg-neutral-100'>
            <div className="container flex  px-12 py-24 ">
                <div className="cols-2 flex justify-between ">
                    <div className="space-y-3 mr-36">
                        <div className="text-blue-600 text-base font-medium">Categories</div>
                        <div className="text-black text-3xl font-extrabold  ">Explore our<br />Popular Categories</div>
                        <div className="text-zinc-600 text-[15px] font-normal  ">Look into yourself, get something in return as your achievement</div>
                        <button className="border-2  text-center cursor-pointer text-neutral-950 text-sm font-medium w-fit px-6 py-3 rounded-lg">Browse all categories
                        </button>
                    </div>
                    <div className=" gap-14 flex flex-wrap ">

                        <div className="text-center">
                            <div className="w-20 h-20 px-[25px] pt-[25.30px] pb-[24.70px] bg-[#4270FF] bg-opacity-10 rounded-[14px] justify-center items-center inline-flex">
                                <Image src={art} alt='art image' />
                            </div>
                            <p className='mt-2 text-center text-slate-950 text-sm'>
                                Art
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 px-[25px] pt-[25.30px] pb-[24.70px] bg-[#FF6470] bg-opacity-10 rounded-[14px] justify-center items-center inline-flex">
                                <Image src={management} alt='art image' />
                            </div>
                            <p className='mt-2 text-center text-slate-950 text-sm'>
                                Management
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 px-[25px] pt-[25.30px] pb-[24.70px] bg-[#59C578] bg-opacity-10 rounded-[14px] justify-center items-center inline-flex">
                                <Image src={business} alt='art image' />
                            </div>
                            <p className='mt-2 text-center text-slate-950 text-sm'>
                                Business
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 px-[25px] pt-[25.30px] pb-[24.70px] bg-[#2675FF] bg-opacity-10 rounded-[14px] justify-center items-center inline-flex">
                                <Image src={finance} alt='art image' />
                            </div>
                            <p className='mt-2 text-center text-slate-950 text-sm'>
                                Finance
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 px-[25px] pt-[25.30px] pb-[24.70px] bg-[#20AD96] bg-opacity-10 rounded-[14px] justify-center items-center inline-flex">
                                <Image src={data} alt='art image' />
                            </div>
                            <p className='mt-2 text-center text-slate-950 text-sm'>
                                data-science
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 px-[25px] pt-[25.30px] pb-[24.70px] bg-[#F5B455] bg-opacity-10 rounded-[14px] justify-center items-center inline-flex">
                                <Image src={dev} alt='art image' />
                            </div>
                            <p className='mt-2 text-center text-slate-950 text-sm'>
                                Devlopment
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 px-[25px] pt-[25.30px] pb-[24.70px] bg-[#6151FB] bg-opacity-10 rounded-[14px] justify-center items-center inline-flex">
                                <Image src={marketing} alt='art image' />
                            </div>
                            <p className='mt-2 text-center text-slate-950 text-sm'>
                                marketing
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Categories
