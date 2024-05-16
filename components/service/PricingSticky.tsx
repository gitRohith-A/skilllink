import React from 'react'
import { IoMdTime } from "react-icons/io";
// import { AiOutlineReload } from "react-icons/ai";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Link from 'next/link';

function PricingSticky({ data }: { data: any }) {
    
    return (
        <div className="border-2    border-zinc-300 rounded-md">
            <div className='border-neutral-200 py-4 border-b-2'>
                <p className='text-center text-neutral-800 text-base font-bold'>Active</p>
            </div>
            <div className="px-6 py-6">
                <div className="text-zinc-700 text-2xl font-bold font-['Arial'] leading-normal">{data.price}</div>
                <p className='text-zinc-700 text-base font-normal'>
                   {data.priceDescription}
                </p>
                <p className='text-neutral-800 text-base font-bold py-6'>
                    Basic: <span className='text-neutral-500 text-base font-normal'>{data.description}</span>
                </p>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <IoMdTime size={22} />
                        <p className='text-neutral-800 text-[16px] font-bold'>{data.duration}</p>
                    </div>
                    {/* <div className="flex items-center gap-2">
                        <AiOutlineReload size={20} />
                        <p className='text-neutral-800 text-[16px] font-bold'>3 Revisions</p>
                    </div> */}
                </div>
                <div className="py-4 space-y-2">
                    <div className="flex items-center gap-2">
                        <VscDebugBreakpointLogUnverified size={20} />
                        <p className='text-neutral-400 text-sm font-normal'>{data.points[0]}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <VscDebugBreakpointLogUnverified size={20} />
                        <p className='text-neutral-400 text-sm font-normal'>{data.points[1]}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <VscDebugBreakpointLogUnverified size={20} />
                        <p className='text-neutral-400 text-sm font-normal'>{data.points[2]}</p>
                    </div>
                </div>
                <button className='w-full py-4 bg-black rounded flex-col justify-start items-center inline-flex'>
                    <div className="text-center text-white text-base font-bold  hover:text-blue-500">Request to order</div>
                </button>
                <Link href='/service/quotation' className="flex justify-center pt-4  text-neutral-800 text-sm hover:text-blue-600">Quotation request</Link>
            </div>
        </div>
    )
}

export default PricingSticky
