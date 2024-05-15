'use client'
import React, { useState, ChangeEvent } from 'react';
import { LuImagePlus } from "react-icons/lu";

const QuotDate = () => {

    // Function to generate a random alphanumeric string
    const generateRandomString = () => {
        const length = 8; // You can adjust the length of the string as needed
        const characters = 'SKILLLINK0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    // State to hold the generated random string
    const [quotationNo, setQuotationNo] = useState<string>(generateRandomString());
    const [filePreview, setFilePreview] = useState<string>('');

    // Function to handle file selection
    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            displayPreview(file);
        }
    };

    // Function to display file preview
    const displayPreview = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                setFilePreview(reader.result);
            }
        };
    };

    return (
        <div className='w-[75%] h-auto p-9 bg-white rounded shadow border border-slate-300 flex-col justify-center items-center inline-flex'>
            <h3 className='text-2xl'>Quotation</h3>
            <div className="flex justify-between items-center grid-cols-10 w-full p-3 my-6 ">
                <div className="col-span-5  w-full space-y-2">
                    <div className="flex justify-between items-center">
                        <p className='text-slate-500 text-base font-normal'>Quotation No</p>
                        <input
                            type="text"
                            name="quotationNo"
                            value={quotationNo}
                            readOnly // Make the input field read-only
                            className="block w-56 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            placeholder="ex: A00001"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='text-slate-500 text-base font-normal'>Quotation Date</p>
                        <input
                            type="date"
                            name="quotationDate"
                            // Handle onChange event to set quotation date state
                            className="w-56 rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 inline-block  justify-between "
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='text-slate-500 text-base font-normal'>Valid Till Date</p>
                        <input
                            type="date"
                            name="validTillDate"
                            // Handle onChange event to set valid till date state
                            className="w-56 rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 inline-block  justify-between "
                        />
                    </div>
                </div>
                <div className="col-span-3 w-full  inline-flex justify-end">
                    <div className=" relative border-2 border-gray-300 border-dashed rounded-lg p-6 w-fit bg-slate-50" id="dropzone" >
                        <input type="file" className="absolute inset-0 w-full  opacity-0 z-50 cursor-pointer drop" onChange={handleFileSelect} />
                        <div className="flex justify-between items-center ">
                            <div className="text-center  mx-6">
                                <LuImagePlus size={30} className='mx-auto text-blue-600' />
                                <h3 className="mt-2 text-sm font-medium text-gray-900">
                                    <label htmlFor="file-upload" className="relative cursor-pointer">
                                        <span>Add Business Logo</span>
                                        <br />

                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                </h3>
                                <p className="mt-1 text-xs text-gray-500">
                                    Drag & Drop or browse to upload
                                    <br />
                                    PNG, JPG, GIF up to 800kb
                                </p>
                            </div>
                            {filePreview && <img src={filePreview} className=" max-h-32 " alt="Preview" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuotDate
