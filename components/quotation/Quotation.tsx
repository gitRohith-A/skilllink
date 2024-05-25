'use client'

import React, { useEffect, useState } from 'react'
import QuotationBody from './QuotationDate'
import QuotationDetails from './QuotationHead'
import QuotationFrom from './QuotationFrom'
import QuotationFor from './QuotationFor'
import AddItems from './AddItems'
import ItemsTable from './ItemsTable'
import TotalCal from './TotalCal'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import { EnterpriseData } from '../enterprise/PostList'
import { useParams } from 'next/navigation'

async function fetchData(id: any): Promise<EnterpriseData[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/${id}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData: EnterpriseData[] = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}


function Quotation() {
    const [state, setState] = useState<any>(null)
    const params = useParams()

    useEffect(() => {
        fetchData(params.slug)
    }, [])

    return (
        <div className="flex justify-center my-12">
            <div className='w-[75%] h-auto px-9 pb-6 bg-white rounded shadow border border-slate-300 flex-col justify-center items-center inline-flex'>

                <div className="flex justify-start w-full">
                    <Link href={'/enterprise/forms-list'} className=" flex items-center bg-green-500 hover:bg-green-700 text-white mt-1 font-bold py-2 px-4 rounded" >
                        <FaArrowLeft className='mx-2' />  Back
                    </Link>
                </div>

                <QuotationDetails />
                <QuotationBody
                    state={state}
                    setState={setState}
                />
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
