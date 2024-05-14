import arrowIcon from '../Assets/arrow-icon.png';
import styles from "./Product.module.scss";

export default function Product({ product, onClick, activeProductId }) {
    return (
        <div className={styles.productContainer}>
            <img 
                src={product.image} 
                alt={product.title}
                className={styles.productImg}
                onClick={() => onClick(product.id)}
            />
            <span 
                onClick={() => onClick(product.id)} 
                className={styles.productTitle}
            >
                {product.title}
            </span>
            <img 
                src={arrowIcon} 
                alt={product.id === activeProductId ? 'Right Arrow Icon' : 'Left Arrow Icon'}
                className={product.id === activeProductId ? styles.rightArrowIcon : styles.leftArrowIcon} 
                onClick={() => onClick(product.id)}
            />
        </div>
    )
}