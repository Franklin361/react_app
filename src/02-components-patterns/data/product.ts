
import coffe from "../assets/coffee-mug.png";
import coffe2 from "../assets/coffee-mug2.png";
import { Product } from '../interfaces/interfaces';

const product = {
    id: '123',
    title: 'Producto 1',
    image: coffe
}

const product2 = {
    id: '123456',
    title: 'Producto 02',
    image: coffe2
}

export const products: Product[] = [product, product2];