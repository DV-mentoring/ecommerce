import styles from "./productCard.module.scss";
import React from "react";
import { StarsRender } from "../../../shared/ui/Rating/StarsRender";

interface ProductCardProps {
    key: string;
    title: string;
    rating: number;
    price: number;
    imageSrc: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    title,
    rating,
    price,
    imageSrc,
    onClick,
}) => {
    return (
        <article className={styles.card} onClick={onClick}>
            <div>
                <img src={imageSrc} alt={title} />
            </div>
            <h2 className={styles.username}>{title}</h2>
            <div className={styles.rating}>
                <StarsRender rating={rating} />
                <span>{rating}</span>
            </div>
            <h2>${price}</h2>
        </article>
    );
};
