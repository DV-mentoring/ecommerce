import styles from "./reviewCard.module.scss"
import FullStar from "../vector/FullStar.tsx"
import HalfStar from "../vector/HalfStar.tsx"
import React from "react";

interface ReviewCardProps {
    username: string,
    description: string,
    rating: number,
    month: string,
    day: number,
    year: number
}

const ReviewCard:React.FC<ReviewCardProps> = ({
    username,
    description,
    rating,
    month,
    day,
    year
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
            {/*Need to add logic to 3 dots*/}
            <div>
                •••
            </div>
            <h2 className={styles.username}>
                {username}
            </h2>
            <p className={styles.review}>
                {description}
            </p>
            <span className={styles.date}>
                Posted on {month} {day}, {year}
            </span>
        </article>
    )
}

export default ReviewCard;