import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
function ServiceOfferedProfile() {
    return (
        <div className='my-6 flex gap-6 items-center'>
            <Link href='/' className="bg-slate-400 w-fit h-fit px-4 py-2 rounded-full text-white font-bold text-lg">
                P
            </Link>
            <div>
                <div className='flex gap-6'>
                    <p className='text-zinc-700 text-lg font-semibold '>Service Provider Name</p>
                    <div className="h-5 px-2 py-3 bg-blue-800 rounded justify-start items-center gap-1.5 inline-flex">
                        <RiVerifiedBadgeFill size={20} fill='white' />
                        <div className="text-white text-sm font-medium ">Verified</div>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className="flex items-center gap-3">
                        <FaStar />
                        <p className='text-zinc-700 text-base font-bold '>5
                            <span className='text-zinc-500 text-base font-normal'>
                                (363)
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceOfferedProfile
