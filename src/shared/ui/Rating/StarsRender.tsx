import { FullStar, HalfStar } from "./StarIcons/Stars.tsx";
interface StarsRenderProps {
    rating: number;
}

export const StarsRender: React.FC<StarsRenderProps> = ({ rating }) => {
    const roundedRating = Math.floor(rating * 2) / 2;
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (roundedRating > i && roundedRating - 0.5 > i) {
            stars.push(<FullStar key={i} />);
        } else if (roundedRating > i && roundedRating - 0.5 === i) {
            stars.push(<HalfStar key={i} />);
            break;
        } else {
            break;
        }
    }

    return <div>{stars}</div>;
};
