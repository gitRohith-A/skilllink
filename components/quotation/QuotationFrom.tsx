'use client'
import { ChangeEvent, useState } from "react"
import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";

function QuotationFrom() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div className='bg-slate-50 w-[49%] p-4 rounded'>
            <div className="flex items-baseline gap-4">
                <div className="pb-2 border-dashed border-b border-slate-600 flex-col justify-start items-start inline-flex">
                    <div className="text-gray-900 text-xl font-normal ">Quotation From</div>
                </div>
                <div className="text-slate-500 text-sm font-normal  ">(Your Details)</div>
            </div>
            <div className="my-4 p-4 w-full bg-white rounded border border-slate-300 flex-col justify-start items-start inline-flex">
                <div className='w-full'>
                    <div className="space-y-8">
                        <div className="relative mt-2  shadow-sm border-b border-slate-300">
                            <input type="text" name="Country" id="Country" className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900  ring-inset  focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                            <div className="absolute inset-y-0 right-0 flex items-center w-full">
                                <select id="currency" name="currency" className="h-full w-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm">
                                    <option>USD</option>
                                    <option>CAD</option>
                                    <option>EUR</option>
                                    <option>IND</option>
                                </select>
                            </div>
                        </div>
                        <input placeholder='Your Business / Freelancer Name (Required)' className='w-full border-b border-slate-300 focus:outline-none ' />
                        <input placeholder='Address (optional)' className='w-full border-b border-slate-300 focus:outline-none ' />
                        <div className="flex space-x-4">
                            <input placeholder='City (optional)' className='w-full border-b border-slate-300 focus:outline-none ' />
                            <input placeholder='Postal Code / Zip Code' className='w-full border-b border-slate-300 focus:outline-none ' />
                        </div>
                        <div className="relative mt-2 shadow-sm border-b border-slate-300">
                            <input
                                type="text"
                                name="Country"
                                id="Country"
                                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-inset focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                value={selectedOption}
                                readOnly
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center w-full">
                                <select
                                    id="currency"
                                    name="currency"
                                    className="h-full w-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                                    onChange={handleChange}
                                    value={selectedOption}
                                >
                                    <option value="">Select an option</option>
                                    <option value="USD">USD</option>
                                    <option value="CAD">CAD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="IND">IND</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap  justify-start mt-4 gap-8 mb-6">
                        <button className=" flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
                            <MdMailOutline className="text-blue-600" size={25} />
                            <p>Add Email</p>
                        </button>
                        <button className=" flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
                            <MdOutlineLocalPhone className="text-blue-600" size={25} />
                            <p>Add Phone Number</p>
                        </button>
                        <button className=" flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
                            <VscDiffAdded className="text-blue-600" size={25} />
                            <p>Add GST</p>
                        </button>
                        <button className=" flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
                            <VscDiffAdded className="text-blue-600" size={25} />
                            <p>Add PAN</p>
                        </button>
                        <button className=" flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
                            <VscDiffAdded className="text-blue-600" size={25} />
                            <p>Add Custom Fields</p>
                        </button>


                    </div>
                </div>

            </div>
        </div>

    )
}

export default QuotationFrom
