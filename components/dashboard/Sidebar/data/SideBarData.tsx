import { MdDashboard } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

export const sideNavData = [
    {
        label: 'Dashboard',
        icon: <MdDashboard />,
        link: '/dashboard'
    },
]

export const sideNavDataAdmin = [
    {
        label: 'Users',
        icon: <RiArrowDownSLine />,
        link: '/admin/users-list',
        subList: [
            {
                label: 'User List',
                icon: <MdDashboard />,
                link: '/admin/users-list'
            },
            {
                label: 'Notifications',
                icon: <MdDashboard />,
                link: '/admin/users-list'
            },
        ]
    },
    {
        label: 'Enterprises catogary',
        icon: <RiArrowDownSLine />,
        link: '/admin/enterprises-list',
        subList: [
            {
                label: 'Enterprsies List',
                icon: <MdDashboard />,
                link: '/admin/enterprises-list'
            },
            {
                label: 'Notifications',
                icon: <MdDashboard />,
                link: '/admin/enterprises-list'
            },
        ]
    },

]
export const sideNavDataEnterprises = [
    {
        label: 'users',
        icon: <MdDashboard />,
        link: '/admin/users-list'
    }
]