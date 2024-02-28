import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const Alert: React.FC = () => {
    const { active, message } = useSelector((state: RootState) => state.error.error);

    return (
        <div className={`fixed top-0 left-0 w-full ${active ? 'block' : 'hidden'}`}>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md my-2 mx-4" role="alert">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline"> {message}</span>
            </div>
        </div>
    );
};

export default Alert;
