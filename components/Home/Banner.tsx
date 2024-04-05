import Image from 'next/image'
import React from 'react'
import bannerimg from '../../public/home/bannerimg.svg'
function Banner() {
    return (
        <section className="w-full px-8 text-gray-700 py-[5rem] bg-no-repeat">
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
                <button className=" px-5 py-2 rounded-lg border border-prime border-opacity-50 text-prime hover:bg-prime hover:text-white" >
                    Get Started
                </button>
                <div className="div">
                    <Image src={bannerimg} alt='image' />
                </div>
            </div>
        </section>
    )
}

export default Banner
