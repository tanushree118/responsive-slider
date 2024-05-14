import styles from "./App.module.scss"
import ProductListWithDetails from "./Components/ProductListWithDetails";

export default function App() {
    return (
        <div className={styles.appContainer}>
            <h1>Product Page</h1>
            <h2>List of Products with details</h2>
            <ProductListWithDetails />
        </div>
    );
}