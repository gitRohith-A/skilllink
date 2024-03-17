
import Image from 'next/image';
import React from 'react'
import { FaSearchengin } from "react-icons/fa";
import img from '@/public/home/sercicesimg/servimg.png'
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";

const carddata = [
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

function ServicesCard() {
    return (
        <div className='container py-3 px-12'>
            <div className="grid grid-cols-4 gap-4">
                <div className="div col-span-3 space-y-4">
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-[15px] border border-indigo-100  items-center gap-5 inline-flex w-full ">
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
                                            <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">r</div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 className='text-h4'>
                                    Lorem Ipsum is simply dummy text dummy text ?
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <div className="flex space-x-3">
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
                                            <div className="text-white text-sm font-normal leading-normal">Get Quotation</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="div col-span-1 sticky top-5 
               w-full h-fit py-[13px] bg-neutral-100 rounded-[7px] flex-col justify-start items-center gap-2.5 inline-flex
                ">
                    Filters
                    <div className="relative flex items-center w-[95%] h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <CiSearch />
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.." />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServicesCard
