import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import RenderStars from '@/components/others/RenderStars';


async function ServiceOfferedProfile({ data }: { data: any }) {
    return (
        <div className='my-6 flex gap-6 items-center'>
            <Link href='/' className="bg-slate-400 w-fit h-fit px-4 py-2 rounded-full text-white font-bold text-lg">
                P
            </Link>
            <div>
                <div className='flex gap-6'>
                    <p className='text-zinc-700 text-lg font-semibold '>{data.user_id.enterpriseName}</p>
                    <div className="h-5 px-2 py-3 bg-blue-800 rounded justify-start items-center gap-1.5 inline-flex">
                        <RiVerifiedBadgeFill size={20} fill='white' />
                        <div className="text-white text-sm font-medium ">Verified</div>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className="flex items-center gap-3">
                        <p className='text-zinc-700 text-base font-bold flex items-center'>
                            <span className='me-2'>
                                {data.rating}
                            </span>


                            <RenderStars rating={parseInt(data.rating)} /> /  ({data.review.length})
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceOfferedProfile
