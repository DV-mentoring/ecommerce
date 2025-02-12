import { StarsRender } from "../../../shared/ui/Rating/StarsRender.tsx";
import styles from "./FullProduct.module.scss";
import { useEffect, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { CheckMark } from "../../../../public/assets/svgs/checkmark.tsx";

interface FullProductProps {
    id: number;
    name: string;
    description: string;
    variants: object[];
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
    variants,
}) => {
    const images: JSX.Element[] = [];
    const [selection, setSelection] = useState<{
        variantIndex?: number;
        sizeIndex?: number;
    }>({});
    const [choice, setChoice] = useState<boolean>(true);
    const [noLess, setNoLess] = useState<boolean>(false);
    const [noMore, setNoMore] = useState<boolean>(false);
    const [currentPic, setCurrentPic] = useState<number>(0);
    const [amount, setAmount] = useState(0);
    const [sizes, setSizes] = useState([
        {
            attribute: "Small",
            quantity: 0,
        },
        {
            attribute: "Medium",
            quantity: 0,
        },
        {
            attribute: "Large",
            quantity: 0,
        },
        {
            attribute: "X-Large",
            quantity: 0,
        },
    ]);

    const updateSelection = (updates: Partial<typeof selection>) => {
        setSelection(prev => ({ ...prev, ...updates }));
        const updateStock = () => {
            if (selection.variantIndex && selection.sizeIndex) {
                const variant = variants[selection.variantIndex];
                const stock = variant.stock;
                setSizes(stock);
            } else return;
        };
        updateStock();
    };

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

    useEffect(() => {
        setChoice(
            !(
                selection.variantIndex !== undefined &&
                selection.sizeIndex !== undefined
            ),
        );
    }, [selection]);

    useEffect(() => {
        if (amount <= 0) {
            setNoLess(true);
            setAmount(0);
        } else {
            setNoLess(false);
        }

        if (
            selection.sizeIndex !== undefined &&
            amount >= sizes[selection.sizeIndex].quantity
        ) {
            setNoMore(true);
            setAmount(sizes[selection.sizeIndex].quantity);
        } else {
            setNoMore(false);
        }
    }, [amount, selection.sizeIndex, sizes]);

    useEffect(() => {}, [selection.sizeIndex, selection.variantIndex]);

    return (
        <>
            <section className={styles.section}>
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
                    <div className={styles.container}>
                        <p className={styles.price}>${price}</p>
                        <p className={styles.text}>{description}</p>
                    </div>
                    <div className={styles.btn_container}>
                        <div className={styles.container}>
                            <p className={styles.text}>Select Colors</p>
                            {variants.map((variant, i) => (
                                <Button
                                    key={`variant-${i}`}
                                    style={{ background: variant.hex }}
                                    className={`${styles.color_btn} ${selection.variantIndex === i ? styles.active : ""}`}
                                    onClick={() => {
                                        updateSelection({ variantIndex: i });
                                    }}
                                >
                                    {selection.variantIndex === i && (
                                        <CheckMark />
                                    )}
                                </Button>
                            ))}
                        </div>
                        <div
                            className={`${styles.container} ${styles.sizes_container}`}
                        >
                            <p className={styles.text}>Choose Size</p>
                            {sizes.map((variant, i) => (
                                <Button
                                    className={`${selection.sizeIndex === i ? styles.active_size : ""}`}
                                    key={`variant-${i}`}
                                    onClick={() => {
                                        updateSelection({ sizeIndex: i });
                                    }}
                                >
                                    {variant.attribute}
                                </Button>
                            ))}
                        </div>

                        <div className={styles.container}>
                            <span>
                                <Button
                                    disabled={choice || noLess}
                                    onClick={() => {
                                        setAmount(prevState => prevState - 1);
                                    }}
                                >
                                    -
                                </Button>
                                <span className={styles.amount}>{amount}</span>
                                <Button
                                    disabled={choice || noMore}
                                    onClick={() => {
                                        setAmount(prevState => prevState + 1);
                                    }}
                                >
                                    +
                                </Button>
                            </span>

                            <Button
                                label="Add to Cart"
                                onClick={() => {
                                    console.log("navigate me later ---->");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
