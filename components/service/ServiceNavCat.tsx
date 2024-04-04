import Link from 'next/link'
import React from 'react'

function ServiceNavCat() {
    return (
        <div className='border-gray-200 border-t-[1.5px] border-b-[1.5px] 
        py-3 flex  px-32 gap-6 font-light text-sm h-12
        '>
            <Link href='/' className="hover:text-blue-600 cursor-pointer hover:border-b-2 hover:border-blue-600 on">Graphics & Design</Link>
            <Link href='/' className="hover:text-blue-600 cursor-pointer hover:border-b-2 hover:border-blue-600">Graphics & Design</Link>
            <Link href='/' className="hover:text-blue-600 cursor-pointer hover:border-b-2 hover:border-blue-600">Graphics & Design</Link>
            <Link href='/' className="hover:text-blue-600 cursor-pointer hover:border-b-2 hover:border-blue-600">Graphics & Design</Link>
        </div>
    )
}
export default ServiceNavCat
