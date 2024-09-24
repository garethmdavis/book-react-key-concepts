import NotFound from '../routes/NotFound';

const Details = ({ product }) => {
  if (!product) {
    return <NotFound productRequest={true} />;
  }
  return (
    <>
      <h2>{product.title}</h2>
      <h1>£{product.price}</h1>
      <p>{product.description}</p>
    </>
  );
};
export default Details;
