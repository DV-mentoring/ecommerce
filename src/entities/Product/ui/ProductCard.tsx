import styles from "./productCard.module.scss"
import FullStar from "../../../shared/ui/StarIcon/FullStar.tsx"
import HalfStar from "../../../shared/ui/StarIcon/HalfStar.tsx"
import React from "react";

interface ProductCardProps {
    key: string,
    title: string,
    rating: number,
    price: number,
    imageSrc: string,
}

export const ProductCard:React.FC<ProductCardProps> =
    ({
         title,
         rating,
         price,
         imageSrc,}) => {
    const roundedRating = Math.floor(rating * 2) / 2;
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (rating > i && rating - 0.5 > i) {
                stars.push(<FullStar key={i} />)
            } else if (rating > i && rating - 0.5 === i) {
                stars.push(<HalfStar key={i} />);
                break;
            } else {
                break;
            }
        }
        return stars;
    }

    return(
        <article className={styles.card}>
            <div>
                <img src={imageSrc} alt={title}/>
            </div>
            <h2 className={styles.username}>
                {title}
            </h2>
            <div className={styles.rating}>
                {renderStars(roundedRating)}
                <span>
                    {rating}
                </span>
            </div>
            <h2>
                ${price}
            </h2>
        </article>
    )
}