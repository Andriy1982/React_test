import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ url, name, price }) => {
  return (
    <div
      style={{
        outline: '1px solid red',
      }}
    >
      <img src={url} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

Product.defaultProp = {
  url:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
