import axios from "axios";

export const getUserByEmail = async (email: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/getUser/${email}`);
        return response.data.user;
    } catch (error: any) {
        console.log(error)
    }
}