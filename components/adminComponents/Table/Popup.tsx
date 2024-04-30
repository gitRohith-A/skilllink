import { EnterpriseData } from "@/app/admin/users/notifications/page";
import { useState } from "react";

interface PopupProps {
    data: EnterpriseData;
    closePopup: () => void;

}

function Popup({ data, closePopup }: PopupProps) {

    const [newAdminNote, setNewAdminNote] = useState('');

    const handleChangeAdminNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewAdminNote(event.target.value);
    };

    async function handleSubmit(id: string) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/move/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ adminnote: newAdminNote }), // Include adminNote in the request body
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const responseData = await response.json();
            console.log(responseData)
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
                                    <tbody className="bg-white divide-y divide-gray-200 ">
                                        {Object.entries(data).map(([key, value]) => {
                                            if (['_id', 'createdAt', 'updatedAt', '__v', 'user_id'].includes(key)) {
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
                                            } else if (key === 'approved') {
                                                return (
                                                    <tr key={key}>
                                                        <td className="px-6 py-4 whitespace-nowrap capitalizecd">{key}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{value.toString()}</td>

                                                    </tr>
                                                );
                                            } else if (key === 'adminnote') {
                                                return (
                                                    <tr key={key}>
                                                        <td className="px-6 py-4 whitespace-nowrap capitalizecd">{key}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <textarea
                                                                id="adminNote"
                                                                name="adminNote"
                                                                rows={3}
                                                                value={newAdminNote}
                                                                onChange={handleChangeAdminNote}
                                                                className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                                            ></textarea>
                                                        </td>
                                                    </tr>
                                                );
                                            } else {
                                                if (value)
                                                    return (
                                                        <tr key={key}>
                                                            <td className="px-6 py-4 whitespace-nowrap capitalizecd">{key}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap">{value}</td>
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
                                handleSubmit(data._id);
                                closePopup();
                            }}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 disabled:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm "
                            disabled={newAdminNote === '' ? true : false}
                        >
                            Reject
                        </button>
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => closePopup()}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
