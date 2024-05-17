import ServerError from '@/components/others/internalServerError';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function EnterpriseCard() {

    let response
    let data

    try {
        response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/all`, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        data = await response.json();
    } catch (error) {
        console.error(error);

        return (<ServerError />)
    }

    return (
        <div className="flex flex-wrap p-16 px-32 py-12 justify-around bg-gray-50">

            {data.map((ele: any) => (

                <div className="relative flex flex-col justify-center overflow-hidden py-8" key={ele.enterpriseName}>
                    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto w-80 max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-400">
                                <Image src={process.env.NEXT_PUBLIC_SERVER_URL + '/' + ele.icon} width={50} height={50} alt='-' className='rounded-full' />
                            </span>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p className='h-24 font-bold text-lg'>{ele.enterpriseName} <br /><span className='font-normal text-sm'>
                                    {ele.generalInfo ? ele.generalInfo.slice(0, 120) : ''}{ele.generalInfo?.length > 120 ? '....' : ''}
                                </span>
                                </p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <Link href={`/enterprises/${ele.slug}`} className="text-blue-500 transition-all duration-300 group-hover:text-white">
                                        View Profile
                                        &rarr;
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default EnterpriseCard
