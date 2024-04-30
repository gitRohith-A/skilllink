'use client'
import Popup from '@/components/adminComponents/Table/Popup';
import Loading from '@/components/others/loading';
import React, { useEffect, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { GoVerified } from "react-icons/go";

export interface EnterpriseData {
    _id: string;
    enterpriseName: string;
    contactPersonName: string;
    phoneNo: string;
    emailAddress: string;
    icon: string;
    createdAt: Date;
    user_id: any;
    adminNote: string; // Add adminNote field
}

async function fetchData(): Promise<EnterpriseData[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise?approved=false`, {
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


function Page() {
    const [data, setData] = useState<EnterpriseData[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedEnterprise, setSelectedEnterprise] = useState<EnterpriseData | null>(null);
    const [adminNote, setAdminNote] = useState<string>('');

    function rejects() {
        console.log('Moved')
    }

    useEffect(() => {
        async function getData() {
            setLoading(true)
            const result = await fetchData();
            setLoading(false)
            setData(result);
        }
        getData();
    }, [rejects()]);

    const openPopup = (enterprise: EnterpriseData) => {
        setSelectedEnterprise(enterprise);
        setAdminNote(enterprise.adminNote || '');
    };

    function closePopup() {
        setSelectedEnterprise(null);
    };


    return (
        <div>
            <div className='bg-[#F1F1F1] relative overflow-x-auto shadow-md sm:rounded-lg'>
                <h1 className='mx-5 my-4 text-2xl font-semibold'>Unapproved Enterprises</h1>
                <div className=" ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-lg">
                            <tr className='border-b-2'>
                                <th scope="col" className="px-6 py-3">
                                    Icon
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Enterprise Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact Person Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
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
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                                            {item.icon ?
                                                <img src={process.env.NEXT_PUBLIC_SERVER_URL + "/" + item.icon} alt="-" className='rounded-full' height={50} width={50} />
                                                : <img src='/' alt="-" className='rounded-full' height={50} width={50} />
                                            }
                                        </th>
                                        <td className="px-6 py-4 capitalize">
                                            {item.enterpriseName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.contactPersonName}
                                        </td>
                                        <td className="px-6 py-4 capitalize">
                                            {item.phoneNo}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.emailAddress}
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(item.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                                        </td>

                                        <td className="px-6 py-4 flex items-cente">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(item)}>
                                                <FaEye size={20} />
                                            </button>
                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => openPopup(item.user_id)}>
                                                <BiDetail size={20} />
                                            </button>
                                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
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
                    rejects={rejects}
                />
            )}
        </div>
    );
}

export default Page;
