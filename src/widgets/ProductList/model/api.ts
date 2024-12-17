import axios from "axios";
import {data} from "react-router-dom";


export const fetchProducts = async (page = 1, per_page = 8) => {
    try{
        const response = await axios.get("http://localhost:5006/products", {
            params: {_page: page, _per_page: per_page}
        });
        return {
            data: response.data.data,
            items: response.data.items
        };
    }
    catch(error){
        console.error("Error while fetching products data", error);
        throw error;
    }
}