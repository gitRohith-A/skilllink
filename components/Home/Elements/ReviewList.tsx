'use client'
import React, { useState } from 'react';
import RenderStars from '@/components/others/RenderStars';
import Link from 'next/link';

function ReviewList({ data }: { data: any }) {
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    if (data)
        return (
            <div className='flex flex-col'>
                <div className="grid grid-cols-3 gap-[50px] mt-20">
                    {data.slice(0, visibleCount).map((ele: any) => (
                        <div className="" key={ele.name}>
                            <div className="flex space-x-3 items-center">
                                <Link href='/login' className="w-14 h-14 px-[10.76px] py-1 bg-blue-500 rounded-[100%] justify-center items-center inline-flex">
                                    <div className="flex-col justify-start items-center inline-flex">
                                        <div className="text-center text-white text-base font-bold uppercase leading-normal">{ele.userId.name.slice(0, 1)}</div>
                                    </div>
                                </Link>
                                <p className='text-zinc-700 text-base font-bold '>
                                    {ele.userId.name}
                                </p>
                                <p className='text-neutral-500 text-sm font-normal '>
                                    {ele.userId.email}
                                </p>
                            </div>
                            <div className="flex items-center mt-6">
                                <div className="star flex w-fit items-center me-2">
                                    <div className="flex items-center">
                                        <RenderStars rating={ele.rating} />
                                    </div>
                                </div>
                                <p className='border-l border-zinc-400 ps-2 mt-1'>{ele.updatedAt.slice(0, 10)}</p>
                            </div>
                            {ele.reviewText}
                        </div>
                    ))}
                </div>
                {data.length > visibleCount && (
                    <div className='flex justify-center mt-10'>
                        <button
                            onClick={loadMore}
                            className="px-6 py-2 rounded-md border-2 hover:drop-shadow-lg border-prime justify-center items-center gap-1 inline-flex">
                            <div className="text-blue-600 text-sm font-normal leading-normal">Load More</div>
                        </button>
                    </div>

                )}
            </div>
        );
}

export default ReviewList;
