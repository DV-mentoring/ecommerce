import { fetchFullProduct } from "./fetchFullProduct.ts";
import { fetchCategory } from "./fetchCategory.ts";

export const generateUri = async (id: number) => {
    let uri = "";
    try {
        const fullProductData = await fetchFullProduct(id);
        const categoryId = fullProductData.data.categoryId;
        let categoryData = await fetchCategory(categoryId);
        uri = `/${categoryData.data.slug}`;
        while (categoryData.data.parentId !== null) {
            categoryData = await fetchCategory(categoryData.data.parentId);
            uri = `/${categoryData.data.slug}${uri}`;
        }
        return uri;
    } catch (e) {
        console.error(e);
    }
};
