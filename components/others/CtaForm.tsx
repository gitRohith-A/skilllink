'use client'

import { setForm } from '@/lib/features/formSlice';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const { form } = useSelector((state: any) => state.form);
    console.log(form)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function handleClose() {
        dispatch(setForm({ open: false }));
    }

    console.log(formData)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = new FormData();

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/form`, { formData, user_id: form.userId });

            setFormData({
                name: '',
                email: '',
                message: '',
                phone: '',
            });
            setSubmitted(true);
            dispatch(setForm({ open: false }));
        } catch (error) {
            console.error('Error:', error);
        }
    };


    if (form.open)
        return (
            <div className="fixed inset-0  flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
                <div className="bg-white p-8 rounded-lg w-96">
                    {!submitted ? (
                        <>
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold mb-4">Contact Form</h2>
                                <button className='text-lg font-semibold mb-4' onClick={() => handleClose()}>X</button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex justify-end">
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                                </div>
                            </form>
                        </>

                    ) : (
                        <div className="text-center">
                            <p className="text-lg font-semibold mb-2">Thank You!</p>
                            <p>We will get back to you soon with a quotation.</p>
                            <div className="flex  justify-around items-center">
                                <button className='text-lg font-semibold my-4 bg-blue-700 px-4 py-2 text-white rounded' onClick={() => handleClose()}>close</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
};

export default Form;
