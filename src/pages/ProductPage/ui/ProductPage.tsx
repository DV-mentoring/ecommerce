import { FullProduct } from "../../../entities/FullProduct/ui/FullProduct.tsx";
import { fetchFullProduct } from "../../../shared/api/fetchFullProduct.ts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { BreadCrumbs } from "../../../features/BreadCrumbs/ui/BreadCrumbs.tsx";
import Header from "../../../widgets/Header/ui/Header.tsx";

interface Variant {
    attribute: string;
    hex: string;
    stock: {
        attribute: string;
        quantity: number;
    }[];
}

interface FullProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    variants: Variant[];
}

export function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState<FullProduct | undefined>(undefined);

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

    if (product) {
        const {
            id,
            name,
            description,
            variants,
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
                    rating={rating}
                    price={price}
                    imageSrc={imageSrc}
                    variants={variants}
                />
            </main>
        );
    } else;
    return (
        <main>
            <div>loading...</div>
        </main>
    );
}
