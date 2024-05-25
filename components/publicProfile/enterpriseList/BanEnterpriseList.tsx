import Image from 'next/image'
import React from 'react'
import image from '@/public/enterpriselist/epbanner.svg'

function BanEnterpriseList({ data }: any) {
    return (
        <div className="items-center justify-between flex  overflow-x-hidden p-16 px-32 py-12 bg-blue-50 w-100">
            <div className="pr-2 ">
                <h1 className="text-[2.5rem] font-semibold text-blue-600 "><span className="block w-full ">Get a registerd as Enterprise</span> and growing your business!</h1>
                <p className="py-4 text-zinc-600 text-[15px] font-normal   ">
                    Empowering you to make better for better growth, We make business growth
                </p>
                {data.role !== 'User' ?
                    '' :
                    <div className="mt-4">
                        <a href="#contact" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Register Now</span> </a>
                    </div>
                }
            </div>

            <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
                <Image src={image} alt='image' />
            </div>
        </div>
    )
}

export default BanEnterpriseList
