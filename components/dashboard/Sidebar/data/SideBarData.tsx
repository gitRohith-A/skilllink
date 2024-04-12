import { MdDashboard } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';

export const sideNavData = [
    {
        label: 'Dashboard',
        icon: <MdDashboard />,
        link: '/dashboard',
    },
];

export const sideNavDataAdmin = [
    {
        label: 'Users',
        icon: <RiArrowDownSLine />,
            subList: [
            {
                label: 'User List',
                icon: <MdDashboard />,
                link: '/admin/users-list',
            },
            {
                label: 'Notifications',
                icon: <MdDashboard />,
                link: '/admin/users/notifications',
            },
        ],
    },
    {
        label: 'Enterprises category',
        icon: <RiArrowDownSLine />,
        link: '/admin/enterprises-list',
        subList: [
            {
                label: 'Enterprises List',
                icon: <MdDashboard />,
                link: '/admin/enterprises-list',
            },
            {
                label: 'Notifications',
                icon: <MdDashboard />,
                link: '/admin/enterprises/notifications',
            },
        ],
    },
];

export const sideNavDataEnterprises = [
    {
        label: 'Users',
        icon: <MdDashboard />,
        link: '/admin/users-list',
    },
];
