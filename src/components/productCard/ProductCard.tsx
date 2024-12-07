import styles from "./productCard.module.scss"
import FullStar from "../vector/FullStar.tsx"
import HalfStar from "../vector/HalfStar.tsx"
import React from "react";

interface ProductCardProps {
    title: string,
    rating: number,
    price: number
}

const ReviewCard:React.FC<ProductCardProps> = ({
    title,
    rating,
    price,
    img

                                              }) => {
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
            <div className={styles.rating}>
                {renderStars(roundedRating)}
                <span>
                    {rating}
                </span>
            </div>
            <div>
                •••
            </div>
            <h2 className={styles.username}>
                {title}
            </h2>
            <h2>
                {price}
            </h2>
        </article>
    )
}

export default ReviewCard;