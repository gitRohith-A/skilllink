'use client'
import Loading from '@/components/others/loading';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export interface EnterpriseData {
    _id: string;
    enterpriseName: string;
    contactPersonName: string;
    phoneNo: string;
    emailAddress: string;
    icon: string;
    createdAt: Date;
    user_id: any;
    adminNote: string;
    description?: string;
    discountPrice?: string;
    priceDescription?: string;
    rating: string
}


async function fetchData(id: any): Promise<EnterpriseData[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/forms/${id}`, {
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




function Page({ params }: any) {
    const [data, setData] = useState<EnterpriseData[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedEnterprise, setSelectedEnterprise] = useState<EnterpriseData | null>(null);

    function rejects() {
    }
    console.log(data)

    useEffect(() => {
        async function getData() {
            setLoading(true)
            const result = await fetchData(params.id);
            setLoading(false)
            setData(result);
        }
        getData();
    }, [rejects()]);



    return (
        <div>
            <div className='bg-[#F1F1F1] relative overflow-x-auto shadow-md sm:rounded-lg'>
                <div className="flex items-center justify-between">
                    <h1 className='mx-5 my-4 text-2xl font-semibold'>Request Forms</h1>
                </div>
                <div className=" ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-lg">

                            <tr className='border-b-2'>
                                <th scope="col" className="px-6 py-3">
                                    Sl No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Message
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        {loading ? <Loading />
                            :
                            <tbody>
                                {data.map((item: any, index) => (
                                    <tr className="bg-[#F1F1F1] border-b" key={item._id}>

                                        <td className="px-6 py-4 capitalize">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 capitalize">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4 capitalize">
                                            {item.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.message}
                                        </td>

                                        <td className="px-6 py-4 flex items-cente">
                                            <Link href={`/service/quotation/${item.user_id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >
                                                Create Quotation
                                            </Link>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        }

                    </table>
                </div>
            </div>

        </div>
    );
}

export default Page;
