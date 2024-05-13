'use client'

import { handleOpen } from '@/Functions/HandleEvents'
import profile from '@/public/home/profile.png'
import Image from 'next/image'
import React from 'react'
import { profileData } from '../data/profileData'
import Link from 'next/link'
import { ProfileHeadProps } from '../../profile/Profile'

function ProfileDropdown({ user }: ProfileHeadProps) {
    return (
        <>
            <div>
                <button type="button" className="flex text-sm bg-gray-400 rounded-full focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-400" onClick={handleOpen} >
                    <span className="sr-only">Open user menu</span>
                    {user?.image ? <Image className="w-8 h-8 rounded-full" src={user?.image} alt="-" width={20} height={20} /> : <Image className="w-8 h-8 rounded-full" src={profile} alt="-" width={20} height={20} />}
                </button>

                <div className={`absolute top-12 right-2 z-50 hidden my-4 flex-col text-base list-none bg-white divide-y divide-blue-100 rounded shadow dark:bg-blue-700 dark:divide-blue-600 `} id="user-dropdown">
                    <div className="px-4 py-3" role="none">
                        <p className="text-sm text-blue-900 dark:text-white" role="none">
                            {user?.name}
                        </p>
                        <p className="text-sm font-medium text-blue-900 truncate dark:text-blue-300" role="none">
                            {user?.email}
                        </p>
                    </div>
                    <ul className="py-1 px-1" role="none">
                        {profileData.map(ele => (
                            <li key={ele.link}>
                                <Link href={ele.link} onClick={handleOpen} className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white" role="menuitem">{ele.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProfileDropdown
