import React, { useState } from 'react';
import TrackVisibility from 'react-on-screen';
import Footer from '../components/Footer';
import ProductDetails_Model from '../components/ProductDetails_Model';

 
const latestReleases = [
    {
        images:
            [
                'https://i.pinimg.com/564x/74/f3/36/74f33680ed7c5f8cabc5ad22ae55c7ce.jpg',
                'https://i.pinimg.com/474x/2d/81/17/2d811721aa3ff1858b460249e227d849.jpg',
            ],
        name: 'Lounge Track Hoodie - Unisex ',
        price: 'LKR 3,950.00',
        colors: ['Brown']
    },
    {
        images:
            [
                'https://i.pinimg.com/564x/2c/f0/c3/2cf0c3cbfa5c907de2a0b8c6a06e6c4f.jpg',
                'https://i.pinimg.com/474x/fb/16/64/fb1664e8d63748c3b12703c4a566354e.jpg'

            ],

        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },

    {
        images:
            [
                'https://i.pinimg.com/474x/51/a5/f2/51a5f2a9f6ceede98ae7fd908301c6c5.jpg',

                'https://i.pinimg.com/564x/80/5e/a1/805ea15200319248b969d6687ceb61e6.jpg'

            ],

        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },

    {
        images:
            [
                'https://i.pinimg.com/474x/04/3c/6e/043c6e3f7061b6ee0237b6d92ba7d32b.jpg',
                'https://i.pinimg.com/474x/b2/47/9c/b2479ccc670d516a99a9aebb9b692c36.jpg'

            ],

        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },




    {
        images:
            [

                'https://i.pinimg.com/474x/04/5f/98/045f98ace8a2dee0a80075e79f790ea5.jpg',
                'https://i.pinimg.com/474x/14/74/dd/1474dd36b292569f99ca5c4151db6c48.jpg',
            ],

        name: 'Lounge Hoodie - Unisex',
        price: 'LKR 3,950.00',
        colors: ['Black', 'White']
    },

    {
        images:
            [
                'https://i.pinimg.com/474x/c3/33/b4/c333b4b2bb736c9ba9883be3fc53184e.jpg',
                'https://i.pinimg.com/474x/1a/1b/96/1a1b960ec7acba853727453711eabe15.jpg'

            ],

        name: 'Varsity Sweatkit - Unisex',
        price: 'LKR 5,250.00',
        colors: ['Grey', 'Black']
    },
    {
        images:
            [

                'https://i.pinimg.com/564x/99/f0/15/99f015cfdf35f83d16e10921910cec7c.jpg',
                ' https://i.pinimg.com/474x/fe/3d/04/fe3d044cbc7e49fc59cbbe5f352ec06a.jpg',
            ],

        name: 'Varsity Sweatkit - Unisex',
        price: 'LKR 5,250.00',
        colors: ['Grey', 'Black']
    },
    {
        images:
            [

                'https://i.pinimg.com/474x/2e/87/fb/2e87fb81b24a7fb4d9d678948bd5d695.jpg',
                'https://i.pinimg.com/564x/52/29/e3/5229e3d5477be21cc1ce5e96e5aa6990.jpg',

            ],

        name: 'Varsity Sweatkit - Unisex',
        price: 'LKR 5,250.00',
        colors: ['Grey', 'Black']
    },




];


function Women_wear() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className='sections'>
        <div className="section-title">WOMEN'S WEAR</div>
        <div className="section-subtitle">
          Explore an array of outfits carefully selected to celebrate the diversity of women's style – from timeless classics to bold statement pieces
        </div>

        <div className="choose-quality">
          <ul className='selections'>
            <li className='main-dropdowns'>
              <label htmlFor="sort-by">SORT BY </label>
              <select id="sort-by" className="selection-dropdown">
                <option value="best-selling">Best selling</option>
                <option value="a-z">Alphabetically, A-Z</option>
                <option value="z-a">Alphabetically, Z-A</option>
                <option value="low-high">Price, low to high</option>
                <option value="high-low">Price, high to low</option>
                <option value="new-old">Date, new to old</option>
                <option value="old-new">Date, old to new</option>
              </select>
            </li>
            <li className='main-dropdowns'>
              <label htmlFor="size">SIZE</label>
              <select id="size" className="selection-dropdown">
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </li>
            <li className='main-dropdowns'>
              <label htmlFor="price">PRICE</label>
              <select id="price" className="selection-dropdown">
                <option value="under-20">Under $20</option>
                <option value="20-50">$20 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="over-100">Over $100</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="choose-items">
          <div className="latest-releases">
            {latestReleases.map((item, index) => (
              <div key={index} className="release-container">
                <div className="release-image">
                  <img src={item.images[0]} alt={item.name} className="primary-image" />
                  <img src={item.images[1]} alt={item.name} className="secondary-image" />
                  <div onClick={() => openModal(item)}>
                    <TrackVisibility>
                      {({ isVisible }) => (
                        <div className={`add-to-cart-button animate__animated ${isVisible ? 'animate__fadeInUp' : ''}`}>
                          Add to Cart
                        </div>
                      )}
                    </TrackVisibility>
                  </div>
                </div>
                <div className="release-details">
                  <div className="release-name">{item.name}</div>
                  <div className="release-price">{item.price}</div>
                  <div className="release-colors">
                    Colors: {item.colors.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {selectedProduct && (
        <ProductDetails_Model isOpen={modalIsOpen} onRequestClose={closeModal} product={selectedProduct} />
      )}
    </div>
  );
}

export default Women_wear;
