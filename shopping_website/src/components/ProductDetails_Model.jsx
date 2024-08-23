import React from 'react';
import Modal from 'react-modal';
import Product_Details from '../pages/Product_Details';

Modal.setAppElement('#root');

function ProductDetails_Model({ isOpen, onRequestClose, product }) {
  console.log('Modal Open:', isOpen);
  console.log('Selected Product:', product);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} className="close-button">Close</button>
      {product && <Product_Details product={product} />}
    </Modal>
  );
}

export default ProductDetails_Model;
