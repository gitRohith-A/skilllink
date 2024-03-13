import { FileState } from '@/components/dashboard/profile/Profile';
import { StringObject } from "@/components/others/data/inputListsTypes";

export const getUserByEmail = async (email: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/getUser/${email}`);
        const json = await response.json();
        const user = json.user;
        return user;
    } catch (error: any) {
        console.error(error);
    }
};


export const editUser = async (id: string, formData: StringObject, files: FileState) => {
    try {
        const formDataToSend = new FormData();

        // Append form data fields to FormData object
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        formDataToSend.append('file', files);

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id}`, {
            method: 'PUT',
            body: formDataToSend,
        });

        if (!response.ok) {
            throw new Error('Failed to edit user');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error editing user:', error);
        throw error;
    }
}
