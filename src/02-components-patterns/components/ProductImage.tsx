import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noimage from "../assets/no-image.jpg";

import styles from "../styles/styles.module.css";


export const ProductImage = ({ image = '' }) => {
    
    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if(image){ imgToShow = image }
    else if(product.image) {imgToShow = product.image}
    else {imgToShow = noimage}

    return (
        <img src={imgToShow} alt="Coffe Mug" className={styles.productImg} />
    )
}
