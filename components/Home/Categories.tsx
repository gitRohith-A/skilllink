import React from 'react'

function Categories() {
    return (
        <div className=' bg-neutral-100'>
            <div className="container flex  px-12 py-24 ">
                <div className="grid grid-cols-2 gap-4 ">
                    <div className="space-y-2">
                        <div className="text-blue-600 text-base font-medium  capitalize leading-relaxed">Categories</div>
                        <div className="text-black text-3xl font-extrabold  leading-9">Explore our<br />Popular Categories</div>
                        <div className="w-[376px] h-[52px] pr-[95px] flex-col justify-start items-start inline-flex">
                            <div className="text-zinc-600 text-[15px] font-normal  leading-relaxed">Look into yourself, get something in return as your achievement</div>
                        </div>
                        <button className="border-2  text-center cursor-pointer text-neutral-950 text-sm font-medium w-fit px-6 py-3 rounded-lg">Browse all categories</button>

                    </div>
                    <div className="">
                        hello
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Categories
