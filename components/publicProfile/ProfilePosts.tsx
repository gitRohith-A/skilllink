import Image from 'next/image'
import React from 'react'
import serviceimg from '@/public/profile/serviceimg.jpeg'
import { IoIosCheckmarkCircle, IoMdPeople } from "react-icons/io";
import { FaStar } from 'react-icons/fa6';

function ProfilePosts() {
    return (
        <div className='container py-3 px-12'>
            <div className="text-gary-900 text-2xl font-bold  leading-loose">Top Services</div>
            <div className="w-[50%] text-slate-500 text-base font-normal  leading-relaxed">Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</div>
            <div className="bg-white p-8 rounded-[10px] border-2 border-black/opacity-20 flex-col  my-8  gap-[25px] inline-flex">
                <div className="grid grid-cols-2 space-x-6 items-center">

                    <Image src={serviceimg} alt='img' className='object-cover h-52 rounded-md' />
                    <div className="">

                        <div className=" text-gray-900 text-[32px] font-semibold  leading-[48px]">Creating Awesome Mobile Apps</div>
                        <p className="text-slate-600 text-sm font-medium  w-full my-2 ">UI UX Design . Apps Design
                        </p>
                        <div className="flex items-center gap-6 my-2">
                            <div className="flex items-center gap-2">
                                <IoMdPeople size={25} fill='#54577A' />
                                <div className="text-gray-900 text-sm font-medium leading-[21px]">200 Workers Involved</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoMdPeople size={25} fill='#54577A' />
                                <div className="text-gray-900 text-sm font-medium leading-[21px]">1 Hour</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="star flex">
                                <FaStar className='text-blue-600' />
                                <FaStar className='text-blue-600' />
                                <FaStar className='text-blue-600' />
                                <FaStar className='text-blue-600' />
                                <FaStar className='text-blue-600' />
                            </div>
                            <div className="text-neutral-500 text-sm font-normal leading-[21px]">1 month ago</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className=" text-gray-900 text-2xl font-semibold  leading-9">Description</div>
                    <div className=" text-gray-900 text-sm font-normal  leading-7">Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.</div>
                </div>
                <div className="div">
                    <div className="text-gray-900 text-2xl font-semibold  leading-9 mb-6">Essence of Assessment</div>
                    <div className="flex flex-wrap gap-5">
                        <div className="flex m items-center space-x-2 w-max">
                            <IoIosCheckmarkCircle size={25} className='text-blue-600' />
                            <p className='w-max'>
                                Understanding the tools in Figma
                            </p>
                        </div>
                        <div className="flex m items-center space-x-2 w-max">
                            <IoIosCheckmarkCircle size={25} className='text-blue-600' />
                            <p className='w-max'>
                                Understand the basics of making designs
                            </p>
                        </div>
                        <div className="flex m items-center space-x-2 w-max">
                            <IoIosCheckmarkCircle size={25} className='text-blue-600' />
                            <p className='w-max'>
                                Designing a mobile application using figma
                            </p>
                        </div>
                        <div className="flex m items-center space-x-2 w-max">
                            <IoIosCheckmarkCircle size={25} className='text-blue-600' />
                            <p className='w-max'>
                                Presenting the design flow
                            </p>
                        </div>
                        <div className="flex m items-center space-x-2 w-max">
                            <IoIosCheckmarkCircle size={25} className='text-blue-600' />
                            <p className='w-max'>
                                Understanding the tools in Figma
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePosts
