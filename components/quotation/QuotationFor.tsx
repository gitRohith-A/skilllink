import React, { useState, ChangeEvent } from "react";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";

function QuotationFor() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gst, setGst] = useState('');
    const [pan, setPan] = useState('');
    const [customField, setCustomField] = useState('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleGstChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGst(event.target.value);
    };

    const handlePanChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPan(event.target.value);
    };

    const handleCustomFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCustomField(event.target.value);
    };

    return (
        <div className='bg-slate-50 w-[49%] p-4 rounded'>
            <div className="flex items-baseline gap-4">
                <div className="pb-2 border-dashed border-b border-slate-600 flex-col justify-start items-start inline-flex">
                    <div className="text-gray-900 text-xl font-normal ">Quotation For</div>
                </div>
                <div className="text-slate-500 text-sm font-normal  ">(Client Details)</div>
            </div>
            <div className="my-4 p-4 w-full bg-white rounded border border-slate-300 flex-col justify-start items-start inline-flex">
                <div className='w-full'>
                    <div className="space-y-8">
                       
                        <input placeholder='Clients business name (Required)' className='w-full border-b border-slate-300 focus:outline-none ' />
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
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap  justify-start mt-4 gap-2 mb-6">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="GST"
                            value={gst}
                            onChange={handleGstChange}
                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="PAN"
                            value={pan}
                            onChange={handlePanChange}
                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Custom Field"
                            value={customField}
                            onChange={handleCustomFieldChange}
                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default QuotationFor
