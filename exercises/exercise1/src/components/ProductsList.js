import products from '../data/products';
import { Link } from 'react-router-dom';
// import ProductDetail from '../routes/ProductDetail';

const ProductsList = () => {
  return (
    <>
      <ul id='products-list'>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title} £{product.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
