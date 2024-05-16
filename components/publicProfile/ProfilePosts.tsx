'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosCheckmarkCircle, IoMdPeople } from "react-icons/io";
import RenderStars from '../others/RenderStars';

function ProfilePosts({ data }: { data: any }) {
    const [visibleItems, setVisibleItems] = useState(2); // Number of items initially visible
    const loadMore = () => setVisibleItems(prev => prev + 2); // Function to load more items

    return (
        <div className='container py-3 px-12'>
            <div className="text-gary-900 text-2xl font-bold leading-loose">Top Services</div>
            <div className="w-[50%] text-slate-500 text-base font-normal leading-relaxed">Here you can find more details about your projects. Keep your user engaged by providing meaningful information.</div>

            {data.slice(0, visibleItems).map((ele: any) => ( // Render only the visible items
                <div key={ele.id} className="bg-white p-8 rounded-[10px] border-2 border-black/opacity-20 flex-col my-8 gap-[25px] inline-flex">
                    <div className="flex grid-cols-2 space-x-6 items-center">
                        <Image src={process.env.NEXT_PUBLIC_SERVER_URL + ele.image} alt='img' className='object-cover w-62 rounded-md' width={250} height={100} />
                        <div className="">
                            <div className="text-gray-900 text-[32px] font-semibold  leading-[48px]">Creating Awesome Mobile Apps</div>
                            <p className="text-slate-600 text-sm font-medium  w-full my-2 ">UI UX Design . Apps Design</p>
                            <div className="flex items-center gap-6 my-2">
                                <div className="flex items-center gap-2">
                                    <IoMdPeople size={25} fill='#54577A' />
                                    <div className="text-gray-900 text-sm font-medium leading-[21px]">{ele.duration}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <RenderStars rating={parseInt(ele.rating)} />
                                <div className="text-neutral-500 text-sm font-normal leading-[21px]">1 month ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-gray-900 text-2xl font-semibold  leading-9">Description</div>
                        <div className="text-gray-900 text-sm font-normal  leading-7">Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.</div>
                    </div>
                    <div className="div">
                        <div className="text-gray-900 text-2xl font-semibold  leading-9 mb-6">Essence of Assessment</div>
                        <div className="flex flex-wrap gap-5">
                            {ele.points.map((item: any) => (
                                <div className="flex m items-center space-x-2 w-max" key={item}>
                                    <IoIosCheckmarkCircle size={25} className='text-blue-600' />
                                    <p className='w-max'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {data.length > visibleItems && ( // Show the "Load More" button if there are more items available beyond the currently visible ones
                <div className="flex justify-center mt-8">
                    <button onClick={loadMore} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none">Load More</button>
                </div>
            )}
        </div>
    );
}

export default ProfilePosts;
