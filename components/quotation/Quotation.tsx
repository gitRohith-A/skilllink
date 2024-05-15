import React from 'react'
import QuotationBody from './QuotationDate'
import QuotationDetails from './QuotationHead'
import QuotationFrom from './QuotationFrom'
import QuotationFor from './QuotationFor'
import AddItems from './AddItems'
import ItemsTable from './ItemsTable'
import TotalCal from './TotalCal'

function Quotation() {
    return (
        <div className="flex justify-center my-12">
            <div className='w-[75%] h-auto px-9 pb-6 bg-white rounded shadow border border-slate-300 flex-col justify-center items-center inline-flex'>
                <QuotationDetails />
                <QuotationBody />
                <div className="col-auto flex justify-between w-full">
                    <QuotationFrom />
                    <QuotationFor />
                </div>
                <AddItems />
                <ItemsTable />
                <TotalCal />

                <button className="px-5 py-3 bg-blue-600 rounded border border-blue-600 justify-center items-center inline-flex text-center text-white text-sm  ">
                    Save & Continue
                </button>
            </div>
        </div>
    )
}

export default Quotation
