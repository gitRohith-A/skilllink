import { auth, signOut } from '@/auth'
import Link from 'next/link';
import React from 'react'
import signout from '@/public/signout/signout.svg'
import Image from 'next/image';

async function page() {
    const session = await auth()
    return (

        <div className="" >
            <div className="container px-5 flex items-center justify-center my-auto h-screen ">
                <div className="div">
                    <Image src={signout} alt='image' />
                </div>
                <div className=" space-y-5">
                    <p className='text--500 text-3xl font-medium'>Do you want to sign out?</p>
                    <form action={async () => {
                        "use server";
                        await signOut();
                    }}>
                        <Link type="button" href={'/dashboard'} className='rounded-full bg-blue-600 text-white hover:bg-blue-500 px-4 py-3 me-4'>
                            Go back
                        </Link>
                        <button type="submit" className='rounded-full bg--600/50 text-black border-2 hover:bg--300 px-4 py-3'>
                            Sign out
                        </button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default page
