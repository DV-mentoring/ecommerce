import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "../../../entities/Product/ui/ProductCard.tsx";
import { fetchProducts } from "../model/api.ts";
import styles from "./productList.module.scss";
import { Button } from "../../../shared/ui/Button/Button.tsx";

interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
}

export const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const productIds = useRef<Set<number>>(new Set<number>());
    const [hasMore, setHasMore] = useState(true);
    const isFetching = useRef(false);
    const [error, setError] = useState<string | null>(null);

    const loadProducts = async () => {
        if (isFetching.current) return;
        isFetching.current = true;

        try {
            const newProducts = await fetchProducts(page, 8);
            const uniqueProducts = newProducts.filter(
                (product: Product) => !productIds.current.has(product.id),
            );
            uniqueProducts.forEach((product: Product) => {
                productIds.current.add(product.id);
            });
            if (uniqueProducts.length < 8) {
                setHasMore(false);
            }
            setProducts(prev => [...prev, ...uniqueProducts]);
            setPage(prev => prev + 1);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setError(
                "Unable to load products. Please refresh the page or try again later.",
            );
        } finally {
            isFetching.current = false;
        }
    };

    useEffect(() => {
        loadProducts();
    });

    return (
        <section className={styles.container}>
            <h1>OUR PRODUCTS</h1>
            {!isFetching.current ? (
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
                <p>Loading...</p>
            )}
            {error && <p>{error}</p>}
            {hasMore && (
                <Button
                    onClick={loadProducts}
                    disabled={isFetching.current}
                    label="Load more"
                    className={styles.load}
                >
                    {isFetching.current ? "Loading..." : "Load More"}
                </Button>
            )}
        </section>
    );
};
