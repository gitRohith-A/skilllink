import { auth, signOut } from '@/auth'
import Link from 'next/link';
import React from 'react'

async function page() {
    const session = await auth()
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="container px-5">

                <div className="text--500 text-3xl mb-5">
                    Do you want to sign out?
                </div>

                <form action={async () => {
                    "use server";
                    await signOut();
                }}>
                    <Link type="button" href={'/dashboard'} className='rounded-full bg-blue-600 text-white hover:bg-blue-500 px-4 py-3 me-4'>
                        Go back
                    </Link>
                    <button type="submit" className='rounded-full bg--600/50 text-white hover:bg--300 px-4 py-3'>
                        Sign out
                    </button>
                </form>
            </div>
        </div >
    )
}

export default page
