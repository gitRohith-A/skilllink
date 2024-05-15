import Image from 'next/image'
import React from 'react'

import { ScaleLoader } from 'react-spinners'


const backgroundColors = [
    '#4270FF',
    '#FF6470',
    '#59C578',
    '#2675FF',
    '#F5B455',
    '#6151FB'
];

async function Categories() {
    let data = null
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category`);
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        let { categories } = await response.json();
        data = categories
    } catch (error) {
        console.error('Error fetching categories:', error);
        return (
            <>
                Error
            </>
        )
    }

    return (
        <div className=' bg-neutral-100'>
            <div className="container flex  px-12 py-24 ">
                <div className="cols-2 flex justify-between ">
                    <div className="space-y-3 mr-36">
                        <div className="text-blue-600 text-base font-medium">Categories</div>
                        <div className="text-black text-3xl font-extrabold  ">Explore our<br />Popular Categories</div>
                        <div className="text-zinc-600 text-[15px] font-normal  ">Look into yourself, get something in return as your achievement</div>

                    </div>
                    {!data ?
                        <div className="flex justify-center items-center h-[400px]">
                            <ScaleLoader />
                        </div>
                        :
                        <div className=" gap-14 flex flex-wrap ">
                            <div className="gap-14 flex flex-wrap">
                                {data?.map((category: any, index: any) => (
                                    <div className="text-center" key={category.name}>
                                        <div
                                            className="w-20 h-20 px-[15px] rounded-[14px] justify-center items-center inline-flex"
                                            style={{ backgroundColor: `${backgroundColors[index % backgroundColors.length]}1A` }} // 1A for 10% opacity
                                        >
                                            <Image src={process.env.NEXT_PUBLIC_SERVER_URL + '/' + category.icon} alt={`${category.name} image`} width={50} height={50} unoptimized />
                                        </div>
                                        <p className='mt-2 text-center text-slate-950 text-sm'>
                                            {category.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories
