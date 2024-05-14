import React from 'react'
import QuotationBody from './QuotationDate'
import QuotationDetails from './QuotationHead'
import QuotationFrom from './QuotationFrom'
import QuotationFor from './QuotationFor'

function Quotation() {
    return (
        <div className="flex justify-center">
            <div className='w-[75%] h-auto px-9 pb-6 bg-white rounded shadow border border-slate-300 flex-col justify-center items-center inline-flex'>
                <QuotationDetails />
                <QuotationBody />
                <div className="col-auto flex justify-between w-full">
                    <QuotationFrom />
                    <QuotationFor />
                </div>
            </div>
        </div>
    )
}

export default Quotation
