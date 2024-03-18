'use client'
import React from 'react'
import { sideNavData, sideNavDataAdmin, sideNavDataEnterprises } from '../data/SideBarData'
import Link from 'next/link'
import { ProfileHeadProps } from '../../profile/Profile'

function SideNav({ user }: ProfileHeadProps) {

    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 light:bg-gray-800 light:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white light:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {(user.isAdmin === 'user' ? sideNavData : user.isAdmin === 'admin' ? sideNavDataAdmin : sideNavDataEnterprises).map(ele => (
                        <li key={ele.link}>
                            <Link href={ele.link} className="flex items-center p-2 text-gray-900 rounded-lg light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group">
                                {ele.icon}
                                <span className="ms-3">{ele.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SideNav
