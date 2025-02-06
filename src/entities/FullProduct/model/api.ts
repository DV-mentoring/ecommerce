import axios from "axios";

export const fetchFullProduct = async id => {
    try {
        const response = await axios.get(
            `http://localhost:7777/products/${id}`,
        );
        return {
            data: response.data,
        };
    } catch (error) {
        console.error("Error while fetching products data", error);
        throw error;
    }
};
