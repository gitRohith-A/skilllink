import React from 'react'

function AddItems() {
    return (
        <div className="grid grid-cols-12 bg-blue-600 w-full px-12 py-6 gap-2 mt-6 rounded-tl-xl rounded-tr-xl">
            <div className="col-span-4">
                <div className="text-white text-sm font-normal leading-[21px]">Product Name</div>
            </div>
            <div className="col-span-2">
                <div className="text-white text-sm font-normal leading-[21px]">GST</div>
            </div>
            <div className="col-span-1">
                <div className="text-white text-sm font-normal leading-[21px]">Qty</div>
            </div>
            <div className="col-span-2">
                <div className="text-white text-sm font-normal leading-[21px]">Rate</div>
            </div>
            <div className="col-span-3">
                <div className="text-white text-sm font-normal leading-[21px]">Amount</div>
            </div>
        </div>
    )
}

export default AddItems
