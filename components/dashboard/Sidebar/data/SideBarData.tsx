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
                link: '/admin/users',
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
        link:'/admin/enterprises',
        icon: <RiArrowDownSLine />,
        subList: [
            {
                label: 'Enterprises List',
                icon: <MdDashboard />,
                link: '/admin/enterprises',
            },
            {
                label: 'Notifications',
                icon: <MdDashboard />,
                link: '/admin/enterprises/notifications',
            },
        ],
    },
    {
        label: 'Category',
        icon: <RiArrowDownSLine />,
        link: '/admin/category',
        subList: [
            {
                label: 'Create Category',
                icon: <MdDashboard />,
                link: '/admin/category/create',
            },
            {
                label: 'Category List',
                icon: <MdDashboard />,
                link: '/admin/category',
            },
        ], 
    }
];

export const sideNavDataEnterprises = [
    {
        label: 'Users',
        icon: <MdDashboard />,
        link: '/admin/users-list',
    },
];
