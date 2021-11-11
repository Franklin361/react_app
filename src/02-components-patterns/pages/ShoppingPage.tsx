import { ProductImage, ProductButtons, ProductTitle, ProductCard } from '../components/';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/product';
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange} =useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle />
                            <ProductButtons className="custom-btns" />
                        </ProductCard>
                    ))
                }


                {/* <ProductCard product={product} className="bg-dark text-white" >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={'Taza de desarrollo'} />
                    <ProductCard.Buttons className="custom-btns" />
                </ProductCard> */}

            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map( ([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            style={{ width: '150px', border: '1px solid black' }}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="custom_title_cart" />
                            <ProductButtons className=" custom-btns_cart" />
                        </ProductCard>
                    ))
                }
            </div>

        </div>
    )
}
