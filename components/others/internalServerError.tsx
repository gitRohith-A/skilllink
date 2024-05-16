import React from 'react';

const ServerError = () => {
    return (
        <div className="flex flex-col items-center justify-center h-60">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">500</h1>
            <p className="text-lg text-gray-600">Internal Server Error</p>
        </div>
    );
}

export default ServerError;
