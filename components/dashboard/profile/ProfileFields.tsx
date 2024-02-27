'use client'
import React, { useState } from 'react'
import { ProfileHeadProps } from './Profile'
import { MdEdit } from "react-icons/md";

const keyLabelMap: { [key: string]: string } = {
    email: 'Email',
    name: 'Full Name',
    date: 'Joining Date',
    address: 'Location',
    categories: 'Categories',
    occupation: 'Occupation',
};

export interface ModalType {
    type: number,
    id: number
}

const ProfileFields: React.FC<ProfileHeadProps> = ({ user }) => {
    const [Modal, setModal] = useState<ModalType>({ type: 0, id: 0 })

    const renderUserInfo = () => {
        return Object.entries(keyLabelMap).map(([key, label]) => {
            const value = user[key];
            const formattedValue = key === 'date' && value ? new Date(value).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : value;

            return (
                <li key={key} className="flex border-b py-2">
                    <span className="font-bold w-32">{label} : </span>
                    <span className="text-gray-700">{formattedValue || 'N/A'}</span>
                </li>
            );
        });
    };

    return (
        <div>
            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col 2xl:w-1/3">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                        <h4 className="flex justify-between text-xl text-gray-900 font-bold">Personal Info <MdEdit size={15} className='text-orange-600' onClick={e => setModal({ type: 1, id: 1 })} /></h4>
                        <ul className="mt-2 text-gray-700">
                            {renderUserInfo()}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-full 2xl:w-2/3">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-gray-900 font-bold flex ">About <MdEdit size={15} className='text-orange-600 ms-2 mt-1' /></h4>
                        <p className="mt-2 text-gray-700 ">{user.about ? user.about : <span className='text-xs text-orange-500 underline'>Add About You</span>}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileFields
