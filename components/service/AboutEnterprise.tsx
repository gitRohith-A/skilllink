import React from 'react'

function AboutEnterprise({ data }: { data: any }) {
    return (
        <div className='my-12 max-w-4xl'>
            <p className='text-zinc-700 text-xl font-bold mb-4'>About the Enterprise</p>
            <div className="border-[1.5px] rounded-md p-4 border-zinc-300">
                <h4 className='text-zinc-700 text-base font-bold'>
                    {data.additionalNotes}
                </h4>
            </div>
        </div>
    )
}

export default AboutEnterprise
