import { ScaleLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className=" flex items-center justify-cente">
            <div className="flex flex-col items-center">
                <ScaleLoader color="#36d7b7" />
            </div>
        </div>
    );
};

export default Loading;
