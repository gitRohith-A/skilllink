'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ScaleLoader } from 'react-spinners';
import RenderStars from '../others/RenderStars';
import { IoSearch } from "react-icons/io5";

interface User {
    websiteURL: string;
    icon: string;
}

interface Post {
    _id: string;
    image: string;
    rating: string;
    user_id: User;
    title: string;
    description: string;
    points: string[];
    price: number;
    discountPrice: number;
    slug: string;
}

const ServicesCard: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [visiblePosts, setVisiblePosts] = useState(3);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/post`);
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const responseData = await response.json();
                setData(responseData.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLoadMore = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
    };

    return (
        <div className='container py-3 px-12'>
            <div className="flex items-center justify-center m-10 relative">
                <input
                    type="text"
                    className='rounded-full w-[50%]'
                    placeholder='Search....'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <IoSearch className='absolute right-[22.5rem] text-blue-600' size={25} />
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-[400px]">
                    <ScaleLoader />
                </div>
            ) : filteredData.length === 0 ? (
                <div className="flex justify-center items-center h-[200px] text-center text-gray-600">
                    No posts available.
                </div>
            ) : (
                <div className="flex justify-center content-center gap-4">
                    <div className="space-y-4 w-[70%]">
                        {filteredData.slice(0, visiblePosts).map((item) => (
                            <div key={item._id} className="service-cards p-5 rounded-[15px] border border-indigo-100 items-center gap-5 inline-flex w-full">
                                <div className="grid grid-cols-4 gap-6">
                                    <Image src={process.env.NEXT_PUBLIC_SERVER_URL + item.image} alt='image' className='col-span-1' width={500} height={100} unoptimized />
                                    <div className="col-span-3 flex-col justify-start items-start gap-1 inline-flex">
                                        <div className="flex justify-between items-center w-full">
                                            <div className="bg-bgclr py-2 px-4 flex w-fit rounded-lg space-x-1">
                                                <RenderStars rating={parseInt(item.rating)} />
                                                <p className='text-slate-600 text-xs font-semibold'>
                                                    {item.rating}/5 rated
                                                </p>
                                            </div>
                                            <Link href={`http://${item.user_id.websiteURL}`} className="px-[10.76px] py-1 justify-center items-center inline-flex">
                                                <div className="pb-[0.34px] flex-col justify-start items-center inline-flex">
                                                    <div className="text-center text-white text-base font-bold font-['Arial'] uppercase leading-normal">
                                                        <Image src={process.env.NEXT_PUBLIC_SERVER_URL + '/' + item.user_id.icon} alt='-' width={30} height={30} className='rounded-full' unoptimized />
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
                                            {item.points.map((ele, index) => (
                                                <div tabIndex={1} key={index} className="bg-prime bg-opacity-15 w-fit px-4 py-1 rounded-3xl my-4 text-slate-800 text-[13px] leading-relaxe">
                                                    {ele}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between w-full items-center">
                                            <p className='text-slate-800 text-xl font-bold'>
                                                ₹ {item.price}
                                                <span className='text-zinc-600 line-through ml-3 text-sm font-normal'>
                                                    {item.discountPrice}
                                                </span>
                                            </p>
                                            <div className="space-x-3">
                                                <Link href={'/service/quotation'} className="px-4 py-2 rounded-md border-2 hover:drop-shadow-lg border-prime justify-center items-center gap-1 inline-flex">
                                                    <div className="text-blue-600 text-sm font-normal leading-normal">Get Quotation</div>
                                                </Link>
                                                <Link href={`/posts/${item.slug}`} className="px-4 py-2 rounded-md border-2 hover:drop-shadow-lg bg-prime justify-center items-center gap-1 inline-flex">
                                                    <div className="text-white text-sm font-normal leading-normal">More Info</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredData.length > visiblePosts && (
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-6 py-2 rounded-md border-2 hover:drop-shadow-lg border-prime justify-center items-center gap-1 inline-flex">
                                    <div className="text-blue-600 text-sm font-normal leading-normal">Load More</div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServicesCard;
