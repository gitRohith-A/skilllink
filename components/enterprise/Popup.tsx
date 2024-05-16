import { useState } from "react";
import { EnterpriseData } from "./PostList";

interface PopupProps {
    data: EnterpriseData;
    closePopup: () => void;
    updateData: () => void;
}

function Popup({ data, closePopup, updateData }: PopupProps) {
    const [editedData, setEditedData] = useState<Partial<EnterpriseData>>({});

    const handleInputChange = (key: keyof EnterpriseData, value: string | string[]) => {
        setEditedData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    async function handleSubmit() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/posts/${data._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedData),
            });

            updateData();
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const responseData = await response.json();
            // Optionally, handle response data
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto mt-[100px]">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                    <div className="bg-white px-8 py-6">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-xl leading-6 font-medium text-gray-900">{data.enterpriseName}</h3>
                            <div className="mt-4">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {Object.entries(data).map(([key, value]) => {
                                            if (['_id', 'createdAt', 'updatedAt', '__v', 'user_id','category','review'].includes(key)) {
                                                return null;
                                            } else if (key === 'icon') {
                                                return (
                                                    <tr key={key}>
                                                        <td className="px-6 py-4 whitespace-nowrap capitalizecd">{key}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <img src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${value}`} alt="Icon" className="w-10 h-10" />
                                                        </td>
                                                    </tr>
                                                );
                                            } else if (Array.isArray(value)) {
                                                return (
                                                    <tr key={key}>
                                                        <td className="px-6 py-4 whitespace-nowrap capitalizecd">{key}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <textarea
                                                                value={(editedData[key] as string[])?.join('\n') || (value as string[]).join('\n')}
                                                                onChange={(e) => handleInputChange(key as keyof EnterpriseData, e.target.value.split('\n'))}
                                                            />
                                                        </td>
                                                    </tr>
                                                );
                                            } else {
                                                if (value)
                                                    return (
                                                        <tr key={key}>
                                                            <td className="px-6 py-4 whitespace-nowrap capitalizecd">{key}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <input
                                                                    type="text"
                                                                    value={editedData[key] || value}
                                                                    onChange={(e) => handleInputChange(key as keyof EnterpriseData, e.target.value)}
                                                                />
                                                            </td>
                                                        </tr>
                                                    );
                                            }
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            onClick={() => {
                                handleSubmit();
                                closePopup();
                            }}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 disabled:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm "
                        >
                            Edit
                        </button>
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => closePopup()}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
