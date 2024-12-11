import React, {useEffect, useRef, useState} from "react";
import {ProductCard} from "../../../entities/Product/ui/ProductCard.tsx";
import { fetchProducts } from "../model/api.ts";
import styles from "./productList.module.scss";
import {Button} from "../../../shared/ui/Button/Button.tsx";


interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
}

export const ProductList:React.FC = () =>  {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const productIds = useRef<Set<number>>(new Set<number>());
    const [hasMore, setHasMore] = useState(true);
    const isFetching = useRef(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);
    const [isInitialLoading, setIsInitialLoading] = useState(true);


    const loadProducts = async() => {
        if (isFetching.current) return;
        setLoading(true);
        isFetching.current = true;

        try{
            const newProducts = await fetchProducts(page, 8);
            const uniqueProducts = newProducts.filter((product:Product) => !productIds.current.has(product.id)
            );
            uniqueProducts.forEach((product:Product) => {
                productIds.current.add(product.id);
            })
            if (uniqueProducts.length < 8) {
                setHasMore(false);
            }
            setProducts((prev) => [...prev, ...uniqueProducts]);
            setPage((prev) => prev + 1);
        } catch (error) {
            setError("Unable to load products. Please refresh the page or try again later.");
        } finally {
            if (isInitialLoading) setIsInitialLoading(false);
            isFetching.current = false;
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <section className={styles.container}>
            <h1>
                OUR PRODUCTS
            </h1>
            {isInitialLoading ? (
                <p>Loading...</p>
            ) : (
                products.map((product) => (
                    <ProductCard
                        key={`product-${product.id}`}
                        title={product.name}
                        price={product.price}
                        rating={product.rating}
                        imageSrc={product.image}
                    />
                ))
            )}
            {error && <p>{error}</p>}
            {hasMore && (
                <Button
                    onClick={loadProducts}
                    disabled={loading || isInitialLoading}
                    label="Load more"
                    className={styles.load}
                >
                    {loading ? "Loading..." : "Load More"}
                </Button>
            )}
        </section>
    );
};
