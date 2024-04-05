import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import axios, { AxiosError } from "axios";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    try {
        // Validate input fields
        const validatedFields = RegisterSchema.safeParse(values);

        if (!validatedFields.success) {
            const errorMessage = validatedFields.error.errors.map(err => err.message).join(", ");
            return { error: "Invalid fields: " + errorMessage };
        }

        // Destructure validated fields
        const { email, password, name } = validatedFields.data;

        // Make API call to register user
        const response = await axios.post('http://localhost:5000/auth/register', { email, password, name });

        if (response.status === 200) {
            // Registration successful
            return { success: "User registered successfully." };
        } else {
            // Unexpected response status code
            return { error: "Failed to register user. Unexpected status code: " + response.status };
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            // Axios error handling
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                // Server responded with an error status code
                const statusCode = axiosError.response.status;
                let errorMessage = "Request failed with status code " + statusCode;

                if (statusCode === 400) {
                    errorMessage = "User Already Exists";
                } else if (statusCode === 401) {
                    errorMessage = "Unauthorized. Please authenticate to proceed.";
                } else if (statusCode === 404) {
                    errorMessage = "Internal Server Error";
                }

                return { error: errorMessage };
            } else if (axiosError.request) {
                // No response received from the server
                return { error: "No response received from the server. Please try again later." };
            } else {
                // Error setting up the request
                return { error: "Error setting up the request: " + axiosError.message };
            }
        } else {
            // Non-Axios error handling
            return { error: "An unexpected error occurred: " + error.message };
        }
    }
};
