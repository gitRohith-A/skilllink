import Image from 'next/image'
import React from 'react'
import profile from '../../public/epprofile.jpg'
import { FaStar, FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { MdVerified } from "react-icons/md";
import Link from 'next/link';

function profilebanner() {
    return (

        <div className=' p-6 border-b-2 border-blue-100'>
            <div className=" py-3 px-24  flex items-center justify-between  ">
                <div className="flex items-center gap-6">
                    <Image src={profile} alt='prifile image' className='h-auto w-44 rounded-full border-blue-600 border-4' />
                    <div className="space-y-3">
                        <div className="flex items-baseline gap-2">
                            <h1 className='text-black text-2xl font-extrabold  leading-9 '>
                                Company Name &nbsp;
                                <span className='text-lg font-semibold text-green-500 '>
                                    verified
                                </span>
                            </h1>
                            <MdVerified className='text-green-500' />
                        </div>

                        <p className='text-zinc-600 text-sm font-normal w-1/2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>

                        <div className="flex gap-4 ">
                            <Link href='/' className=' rounded-lg bg-blue-100'>
                                <FaFacebookF className='text-2xl m-2 text-blue-700' />
                            </Link>
                            <Link href='/' className=' rounded-lg bg-blue-100'>
                                <FaInstagram className='text-2xl m-2 text-blue-700' />
                            </Link>
                            <Link href='/' className=' rounded-lg bg-blue-100'>
                                <FaLinkedinIn className='text-2xl m-2 text-blue-700' />
                            </Link>
                            <Link href='/' className=' rounded-lg bg-blue-100'>
                                <FaXTwitter className='text-2xl m-2 text-blue-700' />
                            </Link>
                            <Link href='/' className=' rounded-lg bg-blue-100'>
                                <FaYoutube className='text-2xl m-2 text-blue-700' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid justify-items-center gap-12">
                    <div className="flex space-x-2 items-center">
                        <FaStar fill='#2563EB' />
                        <FaStar fill='#2563EB' />
                        <FaStar fill='#2563EB' />
                        <FaStar fill='#2563EB' />
                        <FaStar fill='#2563EB' />
                        <p className='text-neutral-400 text-base font-normal '>
                            9 Ratings                        </p>
                    </div>
                    <div className="space-x-3">
                        <button className=" px-4 py-2 rounded-md border-2 hover:drop-shadow-lg border-prime justify-center items-center gap-1 inline-flex">
                            <div className="text-blue-600 text-sm font-normal leading-normal">Get Quotation</div>
                        </button>
                        <Link href='/login' className=" px-4 py-2 rounded-md border-2 hover:drop-shadow-lg bg-prime justify-center items-center gap-1 inline-flex">
                            <div className="text-white text-sm font-normal leading-normal">Contact Us</div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default profilebanner
