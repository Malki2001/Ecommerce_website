import React from 'react';

function Product_Details({ product }) {
  if (!product) return <div>No product selected</div>;

  console.log('Product Details:', product);


  return (
    <div className='detail-page'>
      <div className='image-container'>
        <img src={product.images[0]} alt={product.name} />
       
      </div>

      <div className="data-description">
        <div className="dress-title">{product.name}</div>
        <div className="dress-price">{product.price}</div>
        <div className="dress-colors">Available colors: {product.colors.join(', ')}</div>
        {/* Add other descriptions here */}
      </div>
    </div>
  );
}

export default Product_Details;
