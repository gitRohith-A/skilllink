import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";

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
        icon: <MdDashboard />,
        link: '/admin/users-list'
    },
    {
        label: 'Enterprises',
        icon: <MdDashboard />,
        link: '/admin/enterprises-list'
    }
]
export const sideNavDataEnterprises = [
    {
        label: 'users',
        icon: <MdDashboard />,
        link: '/admin/users-list'
    }
]