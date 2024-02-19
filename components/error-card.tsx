'use client'
import React from 'react';

function ErrorCard() {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl text-red-600 font-semibold mb-4">Oops! Something went wrong.</h1>
                <p className="text-gray-700 mb-8">We're sorry, an unexpected error occurred.</p>
                <button
                    onClick={() => { window.location.href = '/login' }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
}

export default ErrorCard;
