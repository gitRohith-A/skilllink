import React from 'react'

function ProfileAboutus({ data }: { data: any }) {

    return (
        <div className='container py-3 px-12'>
            <h3 className='text-gray-900 text-2xl font-bold leading-loose'>General Information</h3>
            <p className=' text-slate-500 text-base font-normal  leading-relaxed'>
                {data?.generalInfo}
            </p>

            <div className=" columns-3 ">
                <div className="w-full px-8 my-3 py-6 border border-black/opacity-20 bg-white rounded-2xl shadow flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-slate-400 text-sm font-medium  leading-tight">Owner</div>
                    <div className="text-indigo-900 text-base font-normal leading-none">{data.contactPersonName}</div>
                </div>
                <div className="w-full px-8 my-3 py-6 border border-black/opacity-20 bg-white rounded-2xl shadow flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-slate-400 text-sm font-medium  leading-tight">Intustry Type</div>
                    <div className="text-indigo-900 text-base font-normal leading-none">{data.industryType}</div>
                </div>
                <div className="w-full px-8 my-3 py-6 border border-black/opacity-20 bg-white rounded-2xl shadow flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-slate-400 text-sm font-medium  leading-tight">Number Of Employees</div>
                    <div className="text-indigo-900 text-base font-normal leading-none">{data.numberOfEmployees}</div>
                </div>
                <div className="w-full px-8 my-3 py-6 border border-black/opacity-20 bg-white rounded-2xl shadow flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-slate-400 text-sm font-medium  leading-tight">Year Of Establish</div>
                    <div className="text-indigo-900 text-base font-normal leading-none">{data.yearEstablished}</div>
                </div>
                <div className="w-full px-8 my-3 py-6 border border-black/opacity-20 bg-white rounded-2xl shadow flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-slate-400 text-sm font-medium  leading-tight">Address</div>
                    <div className="text-indigo-900 text-base font-normal leading-none">{data.address}</div>
                </div>
            </div>

            <div className="my-12">
                <iframe src={data.locationLink} style={{ border: 0 }} loading="lazy" className='w-full h-60 rounded-xl'></iframe>
            </div>
        </div >
    )
}

export default ProfileAboutus
