import { StringObject } from "@/components/others/data/inputListsTypes";

export const getUserByEmail = async (email: string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/users?email=${email}`);
        const json = await response.json();
        const user = json.user;
        return user;
    } catch (error: any) {
        console.error(error);
    }
};


export const editUser = async (id: string, formData: StringObject) => {
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
        return data.user;
    } catch (error) {
        console.error('Error editing user:', error);
        throw error;
    }
}