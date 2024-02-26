import React from 'react'
import { ProfileHeadProps } from './Profile'

const keyLabelMap: { [key: string]: string } = {
    email: 'Email',
    name: 'Full Name',
    date: 'Joining Date',
    address: 'Location',
    categories: 'Categories',
    occupation: 'Occupation',
};

const ProfileFields: React.FC<ProfileHeadProps> = ({ user }) => {

    const renderUserInfo = () => {
        return Object.entries(keyLabelMap).map(([key, label]) => {
            const value = user[key];
            const formattedValue = key === 'date' && value ? new Date(value).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : value;

            return (
                <li key={key} className="flex border-b py-2">
                    <span className="font-bold w-32">{label} : </span>
                    <span className="text-gray-700">{formattedValue || 'N/A'}</span>
                </li>
            );
        });
    };

    return (
        <div>
            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col 2xl:w-1/3">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                        <ul className="mt-2 text-gray-700">
                            {renderUserInfo()}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-full 2xl:w-2/3">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-gray-900 font-bold">About</h4>
                        <p className="mt-2 text-gray-700">{user.about ? user.about : <span className='text-xs text-orange-500 underline'>Add About You</span>}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileFields
