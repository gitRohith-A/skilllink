import { getUserByEmail } from '@/Functions/User';
import { auth } from '@/auth';
import Link from 'next/link'
import React from 'react'
import { UserType } from '../dashboard/profile/Profile';
import ProfileDropdown from '../dashboard/Sidebar/Elements/ProfileDropdown';



async function NavBar() {
    const session: any = await auth();
    const user: UserType = await getUserByEmail(session?.user.email);

    return (
        <div className='bg-white'>
            <div className="container py-3 px-12">
                <div className="columns-3 justify-between flex ">

                    <p className='text-black text-lg font-bold self-center'>
                        Skill<span className='text-prime'>
                            Link
                        </span>
                    </p>
                    <div className="text-black  text-sm font-normal capitalize self-center">
                        <Link href='/' className='px-3 text-sm  font-normal hover:text-prime'>Home</Link >
                        <Link href='/' className='px-3 text-sm  font-normal hover:text-prime'>Browse</Link >
                        <Link href='/' className='px-3 text-sm  font-normal hover:text-prime'>Market place</Link >
                    </div>
                    <div className="columns-2 flex items-center">

                        {user ?
                            <ProfileDropdown
                                user={user}
                            />
                            :
                            <Link href='/login' className="rounded hover:border-1 px-3 py-1 bg-prime text-white hover:bg-blue-500">
                                Login
                            </Link>
                        }
                    </div>
                </div>
                {/* drop down */}


            </div>
        </div>
    )
}

export default NavBar
