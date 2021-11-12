import { ProductImage, ProductButtons, ProductTitle, ProductCard } from '../components/';
import { products } from '../data/product';
import '../styles/custom-styles.css'
import { ProductCardHandlers } from '../interfaces/interfaces';

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 9
                }}
            >
                {
                    ({
                        reset,
                        increaseBy,
                        maxCount,
                        count,
                        isMaxCountReached
                    }: ProductCardHandlers) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle />
                            <ProductButtons className="custom-btns" />
                            <button onClick={reset} >Reset</button>
                            
                            <button onClick={() => increaseBy(-2)} > -2 </button>

                            {
                                (!isMaxCountReached && count + 2 <= maxCount!)
                                && <button onClick={() => increaseBy(+2)} > +2 </button>
                            }
                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>

        </div>
    )
}
