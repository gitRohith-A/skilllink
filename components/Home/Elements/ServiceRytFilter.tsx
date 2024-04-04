import React from 'react'
import { CiSearch } from 'react-icons/ci'

function ServiceRytFilter() {
    return (
        <div>
            <div className="div col-span-1 sticky top-5 
               w-full h-fit py-[13px] bg-neutral-100 rounded-[7px] flex-col justify-start items-center gap-2.5 inline-flex
                ">
                Filters
                <div className="relative flex items-center w-[95%] h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <CiSearch />
                    </div>

                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.." />
                </div>
            </div>
        </div>
    )
}

export default ServiceRytFilter
