import React, { useState, ChangeEvent } from "react";

interface QuotationDateProps {
    state: any;
    setState: React.Dispatch<any>;
}


const QuotationFor: React.FC<QuotationDateProps> = ({ state }) => {

    return (
        <div className='bg-slate-50 w-[49%] p-4 rounded'>
            <div className="flex items-baseline gap-4">
                <div className="pb-2 border-dashed border-b border-slate-600 flex-col justify-start items-start inline-flex">
                    <div className="text-gray-900 text-xl font-normal ">Quotation By</div>
                </div>
                <div className="text-slate-500 text-sm font-normal  ">(Business Details)</div>
            </div>
            <div className="my-4 p-4 w-full bg-white rounded border border-slate-300 flex-col justify-start items-start inline-flex">
                <div className='w-full'>
                    <div className="space-y-8">
                        <input placeholder='Clients business name (Required)' value={state?.enterpriseName
                        } className='w-full border-b border-slate-300 focus:outline-none ' />
                        <textarea className="w-full border-b border-slate-300 focus:outline-none" placeholder="Address" name="" id="" rows={5} value={state?.address} ></textarea>
                    </div>
                    <div className="flex flex-wrap  justify-start mt-4 gap-2 mb-6">
                        <input
                            type="text"
                            placeholder="Email"
                            value={state?.emailAddress}

                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={state?.phoneNo}

                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="GST"
                            value={state?.gstNumber}

                            className="w-full border-b border-slate-300 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuotationFor
