'use client'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '@/lib/features/modalSlice';
import { RootState } from '@/lib/store';
import { FileState, ProfileHeadProps } from '../dashboard/profile/Profile';
import { keyLabelMapInput, StringObject } from './data/inputListsTypes';
import { setError } from '@/lib/features/errorSlice';
import { editUser } from '@/Functions/User';


const ModalPrototype: React.FC<ProfileHeadProps> = ({ user }) => {
    const modalstate = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<StringObject>({
        email: user.email || '',
        name: user.name || '',
        location: user.location || '',
        categories: user.categories || '',
        occupation: user.occupation || '',
        aboutMe: user.aboutMe || '',
    });

    const [files, setFiles] = useState<FileState>(null);

    const handleChange = (key: string, value: string) => {
        if (key === 'name' && /\d/.test(value)) {
            alert('Name should not contain numbers.');
            return;
        }
        setFormData(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {
        dispatch(setError({ active: true, message: 'check' }));

        const response = await editUser(user._id, formData, files);
        if (response.success) {
            dispatch(setModal({ id: 0, type: ' ', active: false }));
            window.location.reload();
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFiles(file);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            {modalstate.active && (
                <div className="fixed inset-0 z-50 flex  items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="relative z-50 w-full max-w-md p-6 mx-auto bg-[#06273C] rounded-lg shadow-xl">
                        <div className="text-xl font-bold text-white">Profile Update</div>

                        {modalstate.id === 4 || modalstate.id === 3 ? (
                            <div
                                className="flex justify-center mt-4 border-2 border-dashed border-gray-300 p-4 rounded-lg text-white"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                {
                                    !files &&
                                    <>
                                        Drop image here or click to upload
                                    </>
                                }

                                {files && (
                                    <img src={URL.createObjectURL(files)} alt="Preview" className="mt-2 max-w-[200px] max-h-[200px]" />
                                )}
                            </div>
                        ) : (
                            <>
                                {modalstate.id === 2 ? (
                                    <div className="flex justify-center mt-4">
                                        <textarea
                                            className="shadow appearance-none border-2 h-24 border-[#254862] rounded-xl w-96 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#0C3350]"
                                            id="aboutMe"
                                            placeholder="About Me"
                                            value={formData.aboutMe}
                                            onChange={e => handleChange('aboutMe', e.target.value)}
                                        />
                                    </div>
                                ) : (
                                    Object.keys(keyLabelMapInput).map(key => (
                                        <div className="flex justify-center mt-4" key={key}>
                                            {key === 'location' ? (
                                                <textarea
                                                    className="shadow appearance-none border-2 h-24 border-[#254862] rounded-xl w-96 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#0C3350]"
                                                    id={key}
                                                    placeholder={keyLabelMapInput[key]}
                                                    value={formData[key]}
                                                    onChange={e => handleChange(key, e.target.value)}
                                                />
                                            ) : (
                                                <input
                                                    className="shadow appearance-none border-2 h-10 border-[#254862] rounded-xl w-96 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#0C3350] disabled:bg-gray-800"
                                                    id={key}
                                                    type="text"
                                                    placeholder={keyLabelMapInput[key]}
                                                    value={formData[key]}
                                                    onChange={e => handleChange(key, e.target.value)}
                                                    disabled={key === 'email'}
                                                />
                                            )}
                                        </div>
                                    ))
                                )}
                            </>
                        )}



                        <div className="flex justify-end">

                            <button
                                className="mt-4 px-4 me-2 py-1 bg-blue-500 text-white rounded-md"
                                onClick={handleSubmit}
                            >
                                Save
                            </button>
                            <button
                                className="mt-4 px-4 py-1 bg-blue-500 text-white rounded-md"
                                onClick={e => dispatch(setModal({ id: 0, type: ' ', active: false }))}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
};

export default ModalPrototype;
