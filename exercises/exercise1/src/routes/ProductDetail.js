import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import products from '../data/products';
import NotFound from './NotFound';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;
  const product = products.find((product) => product.id === productId);
  // if (!product) {
  //   return <NotFound productRequest={true} />;
  // }
  return (
    <>
      <Details product={product} />
    </>
  );
};

export default ProductDetail;
