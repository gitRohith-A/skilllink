import { EnterpriseData } from "@/app/admin/users/notifications/page";

function Popup({ data, closePopup }: { data: EnterpriseData, closePopup: () => void }) {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{data.enterpriseName}</h3>
                                <div className="mt-2">
                                    {Object.entries(data).map(([key, value]) => {
                                        if (['_id', 'createdAt', 'updatedAt', '__v', 'user_id'].includes(key)) {
                                            return null; 
                                        } else if (key === 'icon') {
                                            return <img key={key} src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${value}`} alt="Icon" className="w-10 h-10" />; // Render icon as an image
                                        } else if (key === 'adminnote') {
                                            return <textarea />
                                        } else {
                                            return <p key={key} className="text-lg text-gray-500">{`${key}: ${value}`}</p>;
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
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
