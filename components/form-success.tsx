import { FaCheckCircle } from "react-icons/fa";

interface FormSuccessProps {
    message?: string;
};

export const FormSuccess = ({
    message,
}: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="border-2 border-green-500 my-3 p-3 text-green-800 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <FaCheckCircle className="h-4 w-4" fill="green"  />
            <p>{message}</p>
        </div>
    );
};