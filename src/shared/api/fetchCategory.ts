import axios from "axios";

export const fetchCategory = async (id: number) => {
    try {
        const response = await axios.get(
            `http://localhost:7777/categories/${id}`,
        );
        return {
            data: response.data,
        };
    } catch (error) {
        console.error("Error while fetching products data", error);
        throw error;
    }
};
