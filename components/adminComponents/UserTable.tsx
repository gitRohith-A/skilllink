'use client'
import React, { useState } from 'react';
import profile from '../../public/home/profile.png'
import Image from 'next/image';

function UserTable({ data, heading }: { data: any, heading: string }) {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.users.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <div className='bg-[#F1F1F1] relative overflow-x-auto shadow-md sm:rounded-lg'>
                <h1 className='mx-5 my-4 text-2xl font-semibold'>{heading}</h1>
                <div className=" ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-lg">
                            <tr className='border-b-2'>
                                <th scope="col" className="px-6 py-3">
                                    Photo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Action
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((ele: any) => (
                                <tr className="bg-[#F1F1F1] border-b" key={ele._id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                                        {ele.image ?
                                            <img src={ele.image} alt="-" className='rounded-full' height={50} width={50} />
                                            : <Image src={profile} unoptimized className="rounded-full" alt='-' width={50} height={50} />
                                        }
                                    </th>
                                    <td className="px-6 py-4 capitalize">
                                        {ele.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {ele.email}
                                    </td>
                                    <td className="px-6 py-4 capitalize">
                                        {ele.isAdmin}
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(ele.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}
                                    </td>
                                    {/* <td className="px-6 py-4 flex items-cente">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-4 me-2"><FaCheck size={15} /></a>
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-4 ms-2"><ImCross size={15} /></a>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-4">
                <ul className="flex justify-center">
                    {Array.from({ length: Math.ceil(data.users.length / itemsPerPage) }).map((_, index) => (
                        <li key={index} className={`${currentPage === index + 1 ? 'bg-gray-200' : ''} border border-gray-300 mx-1 px-3 py-1 cursor-pointer`} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserTable;
