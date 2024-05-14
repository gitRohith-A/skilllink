'use client'
import React from 'react';
import { FaTriangleExclamation } from "react-icons/fa6";
import { ProfileHeadProps } from './Profile';
import Tooltip from '@/components/others/tools/ToolTips';
import profile from '@/public/home/profile.png'
import Image from 'next/image';
import { MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setModal } from '@/lib/features/modalSlice';

const ProfileHead: React.FC<ProfileHeadProps> = async ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className="h-full bg-gray-200 p-4">
      <div className="bg-white rounded-lg shadow-xl pb-8">

        {/* Profile backgorund preview and edit */}
        <div className="w-full h-[250px]">
          <img src={user?.backgrounImage ? user?.backgrounImage : "https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"} className="w-full h-full rounded-tl-lg rounded-tr-lg" />
          {/* <div className="bg-gray-200 relative bottom-11 left-2 w-fit p-3 rounded-full">
            <MdEdit size={15} className='text-blue-600 cursor-pointer' onClick={e => dispatch(setModal({ id: 4, type: 'edit', active: true }))} />
          </div> */}
        </div>
        {/* Profile backgorund preview and edit */}

        <div className="flex flex-col items-center -mt-20">
          {/* Profile Photo preview and edit */}
          {user.image ?
            <img src={user.image} className="w-40 h-40 bg-auto border-4 border-white rounded-full" />
            :
            <Image src={profile} unoptimized className="w-40 h-40 border-4 border-white rounded-full" alt='-' width={20} height={20} />
          }
          <div className="bg-blue-200 relative bottom-11 left-[60px] w-fit p-3 rounded-full">
            <MdEdit size={15} className='text-blue-600 cursor-pointer' onClick={e => dispatch(setModal({ id: 3, type: 'edit', active: true }))} />
          </div>
          {/* Profile Photo preview and edit */}

          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl capitalize">{user.name}</p>
          </div>
          <p className="text-gray-700 capitalize">{user.isAdmin}</p>
          <p className="text-sm text-gray-500">{user.location}</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">

          <div className="flex items-center space-x-4 mt-2">
            {user.boardingStatus === 1 ? (
              <Tooltip message='Compelete Your Profile'>
                <span className="text-red-500 underline"> <FaTriangleExclamation /></span>
              </Tooltip>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
