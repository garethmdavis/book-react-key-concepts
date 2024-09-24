const NotFound = ({ productRequest }) => {
  return (
    <>
      <h3>We're really sorry!</h3>
      <p>We could not find this {productRequest ? 'product' : 'page'}.</p>
    </>
  );
};

export default NotFound;
