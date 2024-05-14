import { useEffect, useState } from "react";
import Product from "./Product.js";
import ProductDetails from "./ProductDetails.js";
import styles from "./ProductListWithDetails.module.scss";

export default function ProductListWithDetails() {
	const [productList, setProductList] = useState([]);
	const [activeProductId, setActiveProductId] = useState(null);

	/**
	 * Function to fetch a list of products from an API endpoint and update the productList state with the fetched data.
	 * @returns {Promise<void>} A promise that resolves after updating the state with the fetched data.
	 */
	const fetchProductListFromApi = async () => {
		try {
			let response = await fetch('https://fakestoreapi.com/products?limit=5');
			let data = await response.json();
			setProductList(data);
		} catch (err) {
			console.log(`Error thrown: ${err}`)
		}
	};

	/**
	 * Handles the click event of the arrow button associated with a product.
	 * Toggles the button from active to inactive state and vice-versa
	 * @param {number} id - The ID of the product associated with the arrow button.
	 */
	const handleArrowBtnClick = (id) => {
		if (id === activeProductId) {
			setActiveProductId(null);
		} else {
			setActiveProductId(id);
		}
	};

	useEffect(() => {
		fetchProductListFromApi();
	}, []);

	return (
		<div className={styles.productListWithDetailsContainer}>
			<div className={styles.productList}>
				{productList.length > 0 && productList.map((product) => {
					return (
						<Product
							key={product.id}
							product={product}
							onClick={handleArrowBtnClick}
							activeProductId={activeProductId}
						/>
					);
				})}
			</div>
			<div className={`${styles.productDetailsWithBtn} ${activeProductId !== null ? styles.whiteBackground : styles.hide} `}>
				<div className={styles.productDetails}>
					{productList.length > 0 && productList.map((product) => {
						return (
							<ProductDetails 
								key={`productDetails_${product.id}`}
								product={product}
								isActive={product.id === activeProductId}
							/>
						)
					})}
				</div>
				<div>
					<button className={styles.addToCartBtn}>Add To Cart</button>
				</div>
			</div>
		</div>
	);
}
