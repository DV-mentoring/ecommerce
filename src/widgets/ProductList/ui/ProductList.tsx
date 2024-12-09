import React, {useEffect, useRef, useState} from "react";
import ProductCard from "../../../entities/Product/ui/ProductCard.tsx";
import { fetchProducts, fetchInitialProducts } from "../../../entities/Product/model/api.ts";
import styles from "./productList.module.scss";
import Button from "../../../shared/ui/Button/Button.tsx";


interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
}

export const ProductList:React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const productIds = useRef<Set<number>>(new Set<number>());
    const [hasMore, setHasMore] = useState(true);

    const loadInitialProducts = async () => {
        setLoading(true);
        try {
            const initialProducts = await fetchInitialProducts();
            const uniqueProducts = initialProducts.filter((product:Product) => !productIds.current.has(product.id)
            );

            uniqueProducts.forEach((product:Product) => {
                productIds.current.add(product.id);
            })
            console.log("first pack of products", uniqueProducts);
            setProducts(initialProducts);
            setPage((prev) => prev + 1);
        } catch (error) {
            console.error("Error loading initial products --->", error);
        } finally {
            setLoading(false);
        }
    };

    const loadMoreProducts = async() => {
        if (loading) return;
        setLoading(true);

        try{
            const newProducts = await fetchProducts(page, 8);
            const uniqueProducts = newProducts.filter((product:Product) => !productIds.current.has(product.id)
            );

            console.log("Current unique product ids --->", productIds.current);

            uniqueProducts.forEach((product:Product) => {
                productIds.current.add(product.id);
            })

            console.log("Unique products --->",uniqueProducts);
            if (uniqueProducts.length < 8){
                setHasMore(false);
            }

            setProducts((prev) => [...prev, ...uniqueProducts]);
            setPage((prev) => prev + 1);
            console.log("Load more:", {uniqueProducts});
        } catch(error){
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadInitialProducts();
    }, []);

    return (
        <section className={styles.container}>
            <h1>
                OUR PRODUCTS
            </h1>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <ProductCard
                        key={`product_${index}`}
                        title={product.name}
                        price={product.price}
                        rating={product.rating}
                        imageSrc={product.image}
                    />
                ))
            ) : (
                <p>Загрузка...</p>
            )}
            {hasMore && (
                <Button
                    onClick={loadMoreProducts}
                    disabled={loading}
                    label="Load more"
                    className={styles.load}
                >
                    {loading ? "Loading..." : "Load More"}
                </Button>
            )}

        </section>
    );
};
