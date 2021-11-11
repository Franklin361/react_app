import coffe from "../assets/coffee-mug.png";
import { ProductImage, ProductButtons, ProductTitle, ProductCard } from '../components/';

import '../styles/custom-styles.css'

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

                <ProductCard product={product} className="bg-dark text-white" >
                    <ProductImage className="custom-image" />
                    <ProductTitle />
                    <ProductButtons className="custom-btns" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark text-white" >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={'Taza de desarrollo'} />
                    <ProductCard.Buttons className="custom-btns" />
                </ProductCard>

                <ProductCard product={product} style={{background:'#3cdbc6cc', color:'black'}} >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={'Taza de desarrollo'} style={{fontWeight:'bold'}} />
                    <ProductCard.Buttons style={{justifyContent:'center'}} />
                </ProductCard>

            </div>

        </div>
    )
}
