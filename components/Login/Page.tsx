import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="bg-black min-h-screen  justify-center grid content-center">
      <div className=" rounded-lg bg-white flex justify-center m-5  align-middle">

        <div className="justify-center  flex-col m-5 w-96 grid">
          <p className='text-xl font-bold  text-black p-5  '>
            Welcom to SkillLink
          </p>
          <button className='text-sm p-1 font-light   bg-blue-600 text-white rounded-lg my-2'>
            User          </button>
          <button className='text-sm p-1 font-light   bg-blue-600 text-white rounded-lg my-2'>
            Enterprice
          </button>
        </div>
      </div>


    </div>
  )
}

export default page
