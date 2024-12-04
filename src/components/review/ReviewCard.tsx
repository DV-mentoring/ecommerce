import styles from "./review.module.scss.css"


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
    return(
        <article className={styles.card}>
            <div>
                {rating}
            </div>
            <h2>
                {username}
            </h2>
            <p>
                {description}
            </p>
            <span>
                Posted on {month} {day}, {year}
            </span>
        </article>
    )
}

export default ReviewCard;