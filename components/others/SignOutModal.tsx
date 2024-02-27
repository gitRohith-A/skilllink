import { signOut } from '@/auth';
import React from 'react';

async function SignOut({ isOpen, setIsOpen }: { isOpen: any, setIsOpen: any }) {
    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="relative z-50 w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl">
                        <div className="text-xl font-bold">SignOut</div>
                        <div>
                            {/* Display user session details */}
                            <p>User: user</p>
                            <p>Email: email</p>
                        </div>
                        <form action={async () => {
                            await signOut();
                        }}>
                            <button type="submit">
                                Sign out
                            </button>
                        </form>

                        <button onClick={() => setIsOpen(false)} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignOut;
