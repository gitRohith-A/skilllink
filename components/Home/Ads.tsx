import Image from 'next/image'
import React from 'react'
import ads1 from '@/public/home/ads/ads-1.png'
import ads2 from '@/public/home/ads/ads-2.png'

function Ads() {
    return (
        <div className='p-16 px-32 bg-blue-600 bg-opacity-15 flex  justify-center '>
            <div className="flex space-x-2">

                <div className="w-80 h-44  rounded-md border-2 border-transparent hover:border-blue-600 overflow-clip  justify-center items-center inline-flex transition-colors duration-300 delay-100">
                    <Image src={ads1} alt='image' className='rounded-md' />

                </div>
                <div className="w-52 h-44 border-2 border-transparent hover:border-blue-600 overflow-clip rounded-md  justify-center items-center inline-flex transition-colors duration-300 delay-100">
                    <Image src={ads2} alt='image' className='object-contain rounded-md' />

                </div>
                <div className="w-52 h-44 border-2 border-transparent hover:border-blue-600 overflow-clip rounded-md  justify-center items-center inline-flex transition-colors duration-300 delay-100">
                    <Image src={ads2} alt='image' className='object-contain rounded-md' />

                </div>
                <div className="w-52 h-44 border-2 border-transparent hover:border-blue-600 overflow-clip rounded-md  justify-center items-center inline-flex transition-colors duration-300 delay-100">
                    <Image src={ads2} alt='image' className='object-contain rounded-md' />

                </div>
                <div className="w-52 h-44 border-2 border-transparent hover:border-blue-600 overflow-clip rounded-md  justify-center items-center inline-flex transition-colors duration-300 delay-100">
                    <Image src={ads2} alt='image' className='object-contain rounded-md' />

                </div>
                <div className="w-52 h-44 border-2 border-transparent hover:border-blue-600 overflow-clip rounded-md  justify-center items-center inline-flex transition-colors duration-300 delay-100">
                    <Image src={ads2} alt='image' className='object-contain rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default Ads
