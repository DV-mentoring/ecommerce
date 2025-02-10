import axios from "axios";

export const fetchCategory = async (id: number) => {
    try {
        const response = await axios.get(
            `http://localhost:5555/categories/${id}`,
        );
        return {
            data: response.data,
        };
    } catch (error) {
        console.error("Error while fetching categories data", error);
        throw error;
    }
};
