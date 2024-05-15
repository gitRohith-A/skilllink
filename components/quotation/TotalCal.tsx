import React from 'react'

function TotalCal() {
    return (
        <div className='ml-auto pr-6 my-6'>
            <div className=" text-slate-600 text-sm font-normal font-['Segoe UI Emoji'] leading-[21px]">Add Discounts/Additional Charges</div>
            <div className="flex items-center text-gray-900 text-2xl font-normal font-['Segoe UI Emoji'] leading-9 gap-36">
                <div className="">Total (INR)
                </div>
                <div className="totalamt">
                    ₹1,000
                </div>
            </div>

        </div>
    )
}

export default TotalCal
