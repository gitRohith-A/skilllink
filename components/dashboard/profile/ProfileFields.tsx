'use client'
import React from 'react'
import { ProfileHeadProps } from './Profile'
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setModal } from '@/lib/features/modalSlice';
import { keyLabelMap } from '@/components/others/data/inputListsTypes';
import Link from 'next/link';

export interface ModalType {
    type: number,
    id: number
}


const ProfileFields: React.FC<ProfileHeadProps> = ({ user }) => {
    const dispatch = useDispatch();

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
                        <h4 className="flex justify-between text-xl text-gray-900 font-bold">Personal Info

                            <button onClick={e => dispatch(setModal({ id: 1, type: 'edit', active: true }))}>
                                <MdEdit size={15} className='text-blue-600' />
                            </button>

                        </h4>
                        <ul className="mt-2 text-gray-700">
                            {renderUserInfo()}
                        </ul>
                        {user.isAdmin === 'user' && user.enterpriseApproval !== 'pending' && user.enterpriseApproval !== true &&
                            <div className='mt-3'>
                                <Link href={'/user/req-enterprises'} className='px-4 py-2 rounded-md border-2 hover:drop-shadow-lg bg-prime justify-center items-center gap-1 inline-flex text-white'>
                                    Register For Enterprise
                                </Link>
                            </div>
                        }

                    </div>
                </div>
                <div className="flex flex-col w-full 2xl:w-2/3">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-gray-900 font-bold flex ">About
                            <button onClick={e => dispatch(setModal({ id: 2, type: 'edit', active: true }))}>
                                <MdEdit size={15} className='text-blue-600 ms-2 mt-1' />
                            </button>
                        </h4>
                        <p className="mt-2 text-gray-700 ">{user.aboutMe ? user.aboutMe : <span className='text-xs text-blue-500 underline'>Add About You</span>}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileFields
