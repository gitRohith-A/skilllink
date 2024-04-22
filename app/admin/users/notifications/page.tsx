'use client'
import Popup from '@/components/adminComponents/Table/Popup';
import React, { useEffect, useState } from 'react';

export interface EnterpriseData {
    _id: string;
    enterpriseName: string;
    contactPersonName: string;
    phoneNo: string;
    emailAddress: string;
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
    const [selectedEnterprise, setSelectedEnterprise] = useState<EnterpriseData | null>(null);

    useEffect(() => {
        async function getData() {
            const result = await fetchData();
            setData(result);
        }
        getData();
    }, []);

    const openPopup = (enterprise: EnterpriseData) => {
        setSelectedEnterprise(enterprise);
    };

    const closePopup = () => {
        setSelectedEnterprise(null);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mx-4 my-2">Unapproved Enterprises</h2>
            <div className="overflow-x-auto mx-4">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Enterprise Name</th>
                            <th className="px-4 py-2">Contact Person Name</th>
                            <th className="px-4 py-2">Phone No</th>
                            <th className="px-4 py-2">Email Address</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="border px-4 py-2">{item.enterpriseName}</td>
                                <td className="border px-4 py-2">{item.contactPersonName}</td>
                                <td className="border px-4 py-2">{item.phoneNo}</td>
                                <td className="border px-4 py-2">{item.emailAddress}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(item)}>
                                        View
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedEnterprise && <Popup data={selectedEnterprise} closePopup={closePopup} />}
        </div>
    );
}

export default Page;
