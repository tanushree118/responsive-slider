import fullStar from "../Assets/full-star-icon.png";
import halfStar from "../Assets/half-star-icon.png";
import star from "../Assets/star-icon.png";
import styles from "./ProductDetails.module.scss";

export default function ProductDetails({ product, isActive }) {

    /**
     * Generates a list of star images based on the count and star type.
     * @param {number} count - The number of stars to generate.
     * @param {string} starType - The source URL of the star image.
     * @returns {[]} An array of elements representing the star images.
     */
    const getStarsList = (count, starType) => {
        let stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(
                <img
                    key={`star_${i}`}
                    src={starType}
                    alt={'Star'}
                    className={styles.starRating}
                />
            );
        }
        return stars;
    };

    /**
     * Calculates and generates the star rating display based on the product's rating.
     * @returns {JSX.Element} JSX elements representing the star rating display.
     */
    const getStarRating = () => {
        let rating = product.rating.rate;
        let fullStarCount = Math.floor(rating);
        let isHalfStar = rating - Math.floor(rating) !== 0;
        let emptyStarCount = Math.floor(5 - Math.ceil(rating));
        return (
            <>
                {fullStarCount > 0 && getStarsList(fullStarCount, fullStar)}
                {isHalfStar && getStarsList(1, halfStar)}
                {emptyStarCount > 0 && getStarsList(emptyStarCount, star)}
            </>
        );
    };

    return (
        <div
            className={`${styles.productDetailsContainer} ${
                !isActive && styles.hide
            }`}
        >
            <span className={styles.productPrice}>${product.price}</span>
            <span className={styles.productDescription}>{product.description}</span>
            <div className={styles.ratingContainer}>
                <span className={styles.productRate}>{product.rating.rate}</span>
                {getStarRating()}
                <span className={styles.productRatingCount}>
                    ({product.rating.count})
                </span>
            </div>
        </div>
    );
}
