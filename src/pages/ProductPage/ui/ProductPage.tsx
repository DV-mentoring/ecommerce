import { FullProduct } from "../../../entities/FullProduct/ui/FullProduct.tsx";
import { fetchFullProduct } from "../../../entities/FullProduct/model/api.ts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

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
    const productId = useParams();
    const [product, setProduct] = useState<FullProduct>([]);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const response = await fetchFullProduct(Number(productId.id));
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                console.log("end of the loading");
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
        <div>
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
        </div>
    );
}
