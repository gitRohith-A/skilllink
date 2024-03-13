import Link from 'next/link'
import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

function NavBar() {
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

                        <div className="px-2    ">
                            <IoIosNotificationsOutline size={25} className='text-blue-400' />
                        </div>
                        <div className="px-2 mx-3">
                            <IoMailOutline size={25} className='text-blue-400' />
                        </div>


                        <div className="rounded-full w-fit bg-prime px-4 py-2">
                            <h6 className='text-white'>
                                R
                            </h6>
                        </div>
                    </div>
                </div>
                {/* drop down */}


            </div>
        </div>
    )
}

export default NavBar
