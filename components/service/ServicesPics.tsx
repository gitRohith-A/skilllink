import Image from 'next/image'
import React from 'react'

function ServicesPics({ data }: { data: any }) {
    return (
        <div className="max-w-4xl ">

            <div id="default-carousel" className="relative" data-carousel="static">
                <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    <Image src={process.env.NEXT_PUBLIC_SERVER_URL  + data} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." width={100} height={100} unoptimized />
                </div>
            </div>
        </div>
    )
}

export default ServicesPics
