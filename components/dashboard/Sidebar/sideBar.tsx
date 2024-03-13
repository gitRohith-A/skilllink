import { auth } from '@/auth';
import Link from 'next/link';
import React from 'react'
import Profile from './Elements/Profile';
import SideNav from './Elements/SideNav';
import { UserType } from '../profile/Profile';
import { getUserByEmail } from '@/Functions/User';

async function SideBar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session: any = await auth()
    const user: UserType = await getUserByEmail(session.user.email)

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 dark:bg-white dark:border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-orange-500 rounded-lg sm:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-orange-400 dark:hover:bg-orange-700 dark:focus:ring-orange-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <Link href="/dashboard" className="flex ms-2 md:me-24 font-bold  text-lg">
                                Skill <span className='text-orange-600'>Link</span>
                            </Link>
                        </div>
                        <Profile user={user} />
                    </div>
                </div>
            </nav>

            <SideNav />

            <div className="mt-12 p-4 pt-6 sm:ml-64">
                {children}
            </div>
        </>
    )
}

export default SideBar
