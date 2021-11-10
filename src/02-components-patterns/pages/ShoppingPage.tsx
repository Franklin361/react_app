import coffe from "../assets/coffee-mug.png";
import { ProductImage, ProductButtons, ProductTitle, ProductCard } from '../components/';


const product = {
    id:'123',
    title: 'Producto 1',
    image: coffe
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Taza de desarrollo'} />
                    <ProductCard.Buttons />
                </ProductCard>

            </div>

        </div>
    )
}
