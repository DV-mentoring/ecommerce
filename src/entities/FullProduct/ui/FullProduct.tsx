import { StarsRender } from "../../../shared/ui/Rating/StarsRender.tsx";
import styles from "./FullProduct.module.scss";
import { useState } from "react";

interface FullProductProps {
    id: number;
    name: string;
    description: string;
    color: string;
    size: number;
    rating: number;
    price: number;
    imageSrc: string;
    imageSrc2?: string;
    imageSrc3?: string;
}

export const FullProduct: React.FC<FullProductProps> = ({
    name,
    description,
    rating,
    price,
    imageSrc,
}) => {
    const images: JSX.Element[] = [];
    const [currentPic, setCurrentPic] = useState<number>(0);
    for (let i = 0; i < 3; i++) {
        images.push(
            <div
                className={`${styles.container} ${styles[`image${i}`]}`}
                key={`container-${i}`}
                onClick={() => {
                    setCurrentPic(i);
                }}
            >
                <img
                    key={i}
                    src={imageSrc}
                    alt={`${name} image ${i + 1}`}
                    className={styles.image}
                />
            </div>,
        );
    }
    return (
        <>
            <main className={styles.section}>
                <div className={styles.image_container}>
                    <div className={styles.images}>{images}</div>
                    <div
                        className={`${styles.currentpic} ${styles[`image${currentPic}`]}`}
                    >
                        <img src={imageSrc} alt="current pic" />
                    </div>
                </div>
                <div className={styles.info_container}>
                    <h1 className={styles.title}>{name}</h1>
                    <div className={styles.rating}>
                        <StarsRender rating={rating} />
                        <p>
                            {rating}
                            <span className={styles.outoffive}>/5</span>
                        </p>
                    </div>
                    <p className={styles.price}>${price}</p>
                    <p>{description}</p>
                </div>
            </main>
        </>
    );
};
