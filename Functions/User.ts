import { FileState } from "@/components/others/Modal";
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


export const editUser = async (id: string, formData: StringObject, files: File: FileState) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
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