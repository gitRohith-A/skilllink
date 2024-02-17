import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps {
    message?: string;
};

export const FormError = ({
    message,
}: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="border-2 border-red-500 text-red-500 my-3 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <BsExclamationTriangle className="h-4 w-4" fill="red" />
            <p>{message}</p>
        </div>
    );
};