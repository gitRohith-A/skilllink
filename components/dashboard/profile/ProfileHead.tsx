import React from 'react';
import { FaExclamation } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ProfileHeadProps } from './Profile';
import Tooltip from '@/components/others/tools/ToolTips';

const ProfileHead: React.FC<ProfileHeadProps> = async ({ user }) => {
  return (
    <div className="h-full bg-gray-200 p-4">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-[250px]">
          <img src={user?.backgrounImage ? user?.backgrounImage : "https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"} className="w-full h-full rounded-tl-lg rounded-tr-lg" />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img src={user.image ?? user.image} className="w-40 border-4 border-white rounded-full" />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl capitalize">{user.name}</p>
          </div>
          <p className="text-gray-700 capitalize">{user.isAdmin}</p>
          <p className="text-sm text-gray-500">{user.location}</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">

          <div className="flex items-center space-x-4 mt-2">
            {user.boardingStatus === 1 ? (
              <Tooltip message='Compelete Profile'>
                <span className="text-red-500 underline"> <FaExclamation /></span>
              </Tooltip>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
