import React from 'react'
import { GrView } from "react-icons/gr";
function page() {
    return (
        <div className="flex flex-col ">
            <div className="-m-1.5 overflow-x-auto ">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 ">
                            <thead >
                                <tr >
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Enterprice Name</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">date</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Catagory Name</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">View Profile</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 ">
                                <tr className='text-center'>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Rohith</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">22-04-2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">catagory Name</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-center">
                                        <button className='hover:text-blue-600 text-md font-semibold flex items-center '><GrView className='mr-2' />View</button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Approve</button>
                                    </td>
                                </tr>
                                <tr className='text-center'>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Rohith</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">22-04-2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">catagory Name</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-center">
                                        <button className='hover:text-blue-600 text-md font-semibold flex items-center '><GrView className='mr-2' />View</button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Approve</button>
                                    </td>
                                </tr>
                                <tr className='text-center'>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Rohith</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">22-04-2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">catagory Name</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-center">
                                        <button className='hover:text-blue-600 text-md font-semibold flex items-center '><GrView className='mr-2' />View</button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Approve</button>
                                    </td>
                                </tr>
                                <tr className='text-center'>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Rohith</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">22-04-2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">catagory Name</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-center">
                                        <button className='hover:text-blue-600 text-md font-semibold flex items-center '><GrView className='mr-2' />View</button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Approve</button>
                                    </td>
                                </tr>
                                <tr className='text-center'>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Rohith</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">22-04-2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">catagory Name</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-center">
                                        <button className='hover:text-blue-600 text-md font-semibold flex items-center '><GrView className='mr-2' />View</button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Approve</button>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page