import axios from "axios";

export const fetchFullProduct = async (id: number) => {
    try {
        const response = await axios.get(
            `http://localhost:5555/products/${id}`,
        );
        return {
            data: response.data,
        };
    } catch (error) {
        console.error("Error while fetching products data", error);
        throw error;
    }
};
