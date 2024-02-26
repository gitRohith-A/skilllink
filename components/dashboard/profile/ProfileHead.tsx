import React from 'react';
import { FaUserEdit } from "react-icons/fa";
import { ProfileHeadProps } from './Profile';


const ProfileHead: React.FC<ProfileHeadProps> = async ({ user }) => {
  return (
    <div className="h-full bg-gray-200 p-4">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-[250px]">
          <img src={user?.backgrounImage ? user?.backgrounImage : "https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"} className="w-full h-full rounded-tl-lg rounded-tr-lg" />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img src={user.image ?? ''} className="w-40 border-4 border-white rounded-full" />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl capitalize">{user.name}</p>
          </div>
          <p className="text-gray-700 capitalize">{user.isAdmin}</p>
          <p className="text-sm text-gray-500">{user.location}</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            {user.boardingStatus === 1 ? (
              <span className="text-red-500 underline">Complete your profile</span>
            ) : null}
            <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <FaUserEdit />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
