import axios from "axios";
const API_REGISTER_URL = import.meta.env.VITE_API_REGISTER;

export const registerUser = async (data: {
    username: string;
    email: string;
    password: string;
}): Promise<void> => {

    const response = await axios.post(API_REGISTER_URL, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}