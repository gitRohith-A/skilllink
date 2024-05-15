'use client'
import React, { useState } from 'react';
import RenderStars from '@/components/others/RenderStars';
import Link from 'next/link';

function ReviewList({ data }: { data: any }) {
    const [visibleCount, setVisibleCount] = useState(4);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    if (data)

        return (
            <div className="grid grid-cols-2 gap-[50px] mt-20">
                {data.slice(0, visibleCount).map((ele: any) => (
                    <div className="" key={ele.name}>
                        <div className="flex space-x-3 items-center">
                            <Link href='/login' className="w-14 h-14 px-[10.76px] py-1 bg-blue-500 rounded-[100%] justify-center items-center inline-flex">
                                <div className="flex-col justify-start items-center inline-flex">
                                    <div className="text-center text-white text-base font-bold uppercase leading-normal">{ele.userId.name.slice(0, 1)}</div>
                                </div>
                            </Link>
                            <div className="">
                                <p className='text-zinc-700 text-base font-bold '>
                                    {ele.userId.name}
                                </p>
                                <p className='text-neutral-500 text-sm font-normal '>
                                    {ele.userId.email}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <div className="star flex w-fit items-center me-2">
                                <div className="flex items-center">
                                    <RenderStars rating={ele.rating} />
                                </div>
                            </div>
                            <p className='border-l border-zinc-400 ps-2 mt-1'>{new Date(ele.updatedAt).toLocaleDateString()}</p>
                        </div>
                        {ele.reviewText}
                    </div>
                ))}
                {data.length > visibleCount && (
                    <div className="text-center mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={loadMore}>Load More</button>
                    </div>
                )}
            </div>
        );
}

export default ReviewList;


{/* <div className="flex items-center text-zinc-700 text-sm font-bold leading-10">
    Helpfull ?
    <button className={`flex items-center text-blue-800 mx-2`}><MdOutlineThumbUp /> &nbsp; yes</button>
    <button className="flex items-center mx-2"><MdOutlineThumbDown /> &nbsp; no</button>

</div> */}


{/* <button className='flex items-center gap-6 m-auto col-span-2 w-full justify-center py-3
rounded-full border-2 border-zinc-800
text-zinc-800 text-lg font-semibold leading-9
'>
See More Reviews
<FaArrowRightLong />
</button> */}