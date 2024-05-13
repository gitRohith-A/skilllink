'use client'
import Popup from '@/components/enterprise/Popup';
import Loading from '@/components/others/loading';
import React, { useEffect, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { UserType } from '../dashboard/profile/Profile';

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


    async function approveData(id: string) {
        try {
            setLoading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/approve/${id}`, {
                method: 'PATCH',
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
                <h1 className='mx-5 my-4 text-2xl font-semibold'>Enterprises Posts</h1>
                <div className=" ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-lg">

                            <tr className='border-b-2'>
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
                                {data.map(item => (
                                    <tr className="bg-[#F1F1F1] border-b" key={item._id}>

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
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => openPopup(item.user_id)}>
                                                <BiDetail size={20} />
                                            </button>
                                            <button onClick={() => approveData(item._id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
                                                <GoVerified size={20} />
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
