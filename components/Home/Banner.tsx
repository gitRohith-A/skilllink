import React from 'react'

function Banner() {
    return (
        <>
            <section className="w-full px-8 text-gray-700 bg-[url('../public/home/linebg.svg')] py-[12rem]">
                <div className="container grid justify-items-center">
                    <div className=" my-5 px-5 py-1 bg-prime size-fit rounded-[3rem]">
                        <p className='text-white '><small>
                            Your Gateway to Business Success!
                        </small></p>
                    </div>
                    <h1 className='my-5 text-6xl font-bold'>
                        Welcome to <span className='text-prime'>SkillLink</span>
                    </h1>
                    <p className='my-5 '>
                        Connect with skilled professionals effortlessly
                    </p>
                    <button className=" px-5 py-2 rounded-lg border border-prime border-opacity-50 text-prime" >
                        Complete Your Profile
                    </button>

                    <ul className='flex my-12'>
                        <li className='px-3 bg-black m-1 rounded-3xl text-white font-light'><p className='px-3 py-2 text-[10px]'>Websites Development</p></li>
                        <li className='px-3 bg-black m-1 rounded-3xl text-white font-light'><p className='px-3 py-2 text-[10px]'>Websites Development</p></li>
                        <li className='px-3 bg-black m-1 rounded-3xl text-white font-light'><p className='px-3 py-2 text-[10px]'>Websites Development</p></li>
                        <li className='px-3 bg-black m-1 rounded-3xl text-white font-light'><p className='px-3 py-2 text-[10px]'>Websites Development</p></li>
                        <li className='px-3 bg-black m-1 rounded-3xl text-white font-light'><p className='px-3 py-2 text-[10px]'>Websites Development</p></li>
                        <li className='px-3 bg-black m-1 rounded-3xl text-white font-light'><p className='px-3 py-2 text-[10px]'>Websites Development</p></li>
                        <li className='px-3 bg-black m-1 rounded-3xl text-white font-light'><p className='px-3 py-2 text-[10px]'>Websites Development</p></li>
                        <li className='px-3 bg-black m-1 rounded-3xl text-white font-light'><p className='px-3 py-2 text-[10px]'>Websites Development</p></li>
                    </ul>
                </div>

            </section>





        </>
    )
}

export default Banner
