'use client'
import Popup from '@/components/enterprise/Popup';
import Loading from '@/components/others/loading';
import React, { useEffect, useState } from 'react';
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { UserType } from '../dashboard/profile/Profile';
import Link from 'next/link';

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/posts/${id}`, {
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




function Page({ params }: { params: UserType }) {
    const [data, setData] = useState<EnterpriseData[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedEnterprise, setSelectedEnterprise] = useState<EnterpriseData | null>(null);

    function rejects() {
    }


    useEffect(() => {
        async function getData() {
            setLoading(true)
            const result = await fetchData(params.id);
            setLoading(false)
            setData(result);
        }
        getData();
    }, [rejects()]);

    const openPopup = (enterprise: EnterpriseData) => {
        setSelectedEnterprise(enterprise);
    };

    function closePopup() {
        setSelectedEnterprise(null);
    };

    const updateData = async () => {
        const newData = await fetchData(params.id);
        setData(newData);
    };

    const clickDelet = async (data: { _id: string }) => {
        console.log(data)
        try {
            setLoading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/posts/${data._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const newData = await fetchData(params.id);
            setData(newData);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className='bg-[#F1F1F1] relative overflow-x-auto shadow-md sm:rounded-lg'>
                <div className="flex items-center justify-between">
                    <h1 className='mx-5 my-4 text-2xl font-semibold'>Enterprises Posts</h1>

                    <Link className='mx-5 my-4 text-sm border border-red-500 rounded-md p-3 font-semibold' href={'create-post'}>Create Post</Link>
                </div>
                <div className=" ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-lg">

                            <tr className='border-b-2'>
                                <th scope="col" className="px-6 py-3">
                                    Sl No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Discount Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        {loading ? <Loading />
                            :
                            <tbody>
                                {data.map((item, index) => (
                                    <tr className="bg-[#F1F1F1] border-b" key={item._id}>

                                        <td className="px-6 py-4 capitalize">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 capitalize">
                                            {item.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.discountPrice}
                                        </td>
                                        <td className="px-6 py-4 capitalize">
                                            {item.priceDescription}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.rating}
                                        </td>

                                        <td className="px-6 py-4 flex items-cente">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(item)}>
                                                <FaEye size={20} />
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => clickDelet(item)}>
                                                <FaTrashAlt size={20} />
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        }

                    </table>
                </div>
            </div>
            {selectedEnterprise && (
                <Popup
                    data={selectedEnterprise}
                    closePopup={closePopup}
                    updateData={updateData}
                />
            )}
        </div>
    );
}

export default Page;
