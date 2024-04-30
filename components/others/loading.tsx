import { ScaleLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-50 z-50">
            <div className="flex flex-col items-center">
                <ScaleLoader color="#36d7b7" />
            </div>
        </div>
    );
};

export default Loading;
