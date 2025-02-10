import { FullProduct } from "../../../entities/FullProduct/ui/FullProduct.tsx";
import { fetchFullProduct } from "../../../shared/api/fetchFullProduct.ts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { BreadCrumbs } from "../../../features/BreadCrumbs/ui/BreadCrumbs.tsx";
import Header from "../../../widgets/Header/ui/Header.tsx";

interface FullProduct {
    id: number;
    name: string;
    description: string;
    color: string;
    size: number;
    imageSrc: string;
    price: number;
    rating: number;
}

export function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState<FullProduct>([]);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const response = await fetchFullProduct(Number(productId));
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (productId) {
            loadProduct();
        }
    }, [productId]);

    const {
        id,
        name,
        description,
        color,
        size,
        rating,
        price,
        image: imageSrc,
    } = product;

    return (
        <main>
            <Header />
            <BreadCrumbs />
            <FullProduct
                id={id}
                name={name}
                description={description}
                color={color}
                size={size}
                rating={rating}
                price={price}
                imageSrc={imageSrc}
            />
        </main>
    );
}
