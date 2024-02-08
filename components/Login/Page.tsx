import Image from 'next/image'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

function page() {

  return (
    <div className=" login-main bg-black min-h-screen  justify-center grid content-center">
      <div className=" rounded-lg bg-white flex justify-center m-5  align-middle">

        <div className="justify-center  flex-col m-5 w-96 grid">
          <p className='text-xl font-bold  text-black p-5  '>
            Welcom to SkillLink
          </p>
          <button className='text-sm p-2 font-light bg-blue-600 text-white rounded-lg my-2  flex justify-center hover:bg-blue-500'>
            <div className="flex align-middle space-x-2">
              <div className='mt-.5 pl-2'   >
                <FaRegUserCircle size={20} />
              </div>
              <p className='text-xl pr-2'>User</p>
            </div>
          </button>
          <button className='text-sm p-2 font-light text-blue rounded-lg my-2  flex justify-center border-4 border-blue-800'>
            Enterprise
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
