'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { profileData } from '../data/profileData'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/lib/features/loadingSlice'

interface Session {
    user: {
        name: string;
        email: string;
        image?: string;
    };
}

interface ProfileProps {
    session: Session;
}

function Profile({ session }: ProfileProps) {
    const [state, setState] = useState(false)
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.loading);

    const handleStateLoading = () => {
        setState(false)
        dispatch(setLoading(true))
    }

    return (
        <div>
            <div className="flex items-center">
                <div className="flex items-center ms-3">
                    <div>
                        <button type="button" className="flex text-sm bg-gray-400 rounded-full focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-400" onClick={() => setState(!state)}>
                            <span className="sr-only">Open user menu</span>
                            <Image className="w-8 h-8 rounded-full" src={session.user.image ?? ''} alt="-" width={20} height={20} />
                        </button>
                    </div>

                    <div className={`absolute top-12 right-2 z-50 ${state ? '' : 'hidden'} flex my-4 flex-col text-base list-none bg-white divide-y divide-orange-100 rounded shadow dark:bg-orange-700 dark:divide-orange-600 `} id="dropdown-user">
                        <div className="px-4 py-3" role="none">
                            <p className="text-sm text-orange-900 dark:text-white" role="none">
                                {session.user.name}
                            </p>
                            <p className="text-sm font-medium text-orange-900 truncate dark:text-orange-300" role="none">
                                {session.user.email}
                            </p>
                        </div>
                        <ul className="py-1 px-1" role="none">
                            {profileData.map(ele => (
                                <li key={ele.link}>
                                    <Link href={ele.link} onClick={handleStateLoading} className="block px-4 py-2 text-sm text-orange-700 hover:bg-orange-100 dark:text-orange-300 dark:hover:bg-orange-600 dark:hover:text-white" role="menuitem">{ele.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
