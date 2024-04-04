import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { signIn } from 'next-auth/react';
// import { useModalContext } from '@/contexts/ModalContext';


function ServiceModal() {
    return (
        <>
            <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 ">
                        <div className="relative transform rounded overflow-hidden w-1/3  bg-white bg-[url('/images/bannerbg.webp')] bg-contain text-left shadow-xl transition-all sm:my-8  sm:max-w-lg p-10 sm:p-4 sm:w-[90%] no-repeat md:w-[90%] xl:w-1/2">

                            hello

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ServiceModal;