'use client'
import React, { useState } from 'react';
import { ProfileHeadProps } from '../../profile/Profile';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import { sideNavDataEnterprises, sideNavData, sideNavDataAdmin } from '../data/SideBarData';

interface SideNavItem {
    label: string;
    icon: JSX.Element;
    link: string;
    subList?: SideNavItem[];
}

function SideNav({ user }: ProfileHeadProps) {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const sideNavDataMap = new Map<string, SideNavItem[]>([
        ['user', sideNavData],
        ['admin', sideNavDataAdmin],
        ['enterprise', sideNavDataEnterprises],
    ]);
    const currentSideNavData = sideNavDataMap.get(user.isAdmin || '') || [];

    const handleToggleSubList = (link: string) => {
        setOpenSubMenu(link === openSubMenu ? null : link);
    };

    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 light:bg-gray-800 light:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white light:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {currentSideNavData.map((item) => (
                        <SideNavItem key={item.link} item={item} openSubMenu={openSubMenu} handleToggleSubList={handleToggleSubList} />
                    ))}
                </ul>
            </div>
        </aside>
    );
}

interface SideNavItemProps {
    item: SideNavItem;
    openSubMenu: string | null;
    handleToggleSubList: (link: string) => (void);
}

const SideNavItem: React.FC<SideNavItemProps> = ({ item, openSubMenu, handleToggleSubList }) => {
    const isSubListOpen = openSubMenu === item.link;

    return (
        <li>
            {item.subList ? (
                <>
                    <div className="flex items-center p-2 text-gray-900 rounded-lg light:text-white group cursor-pointer" onClick={() => handleToggleSubList(item.link)}>
                        <span className="ms-3">{item.label}</span>
                        <span className="ml-auto">{isSubListOpen ? <RiArrowDownSLine /> : <RiArrowRightSLine />}</span>
                    </div>
                    {isSubListOpen && (
                        <ul className="ml-4 space-y-2 font-medium">
                            {item.subList.map((subItem) => (
                                <li key={subItem.link}>
                                    <div className="flex items-center p-2 text-gray-900 rounded-lg light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group">
                                        {subItem.icon}
                                        <span className="ms-3">
                                            <a href={subItem.link}>{subItem.label}</a>
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <div className="flex items-center p-2 text-gray-900 rounded-lg light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group">
                    {item.icon}
                    <span className="ms-3">
                        <a href={item.link}>{item.label}</a>
                    </span>
                </div>
            )}
        </li>
    );
};

export default SideNav;
