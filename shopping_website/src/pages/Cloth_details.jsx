import React, { useState } from 'react';

const product = {
    name: "Lounge Track Hoodie - Unisex",
    price: "LKR 3,950.00",
    colors: ['Brown', 'Red', 'Blue'], // Example colors
    images: [
        'https://i.pinimg.com/564x/74/f3/36/74f33680ed7c5f8cabc5ad22ae55c7ce.jpg',
        'https://i.pinimg.com/474x/2d/81/17/2d811721aa3ff1858b460249e227d849.jpg'
    ]
};



function Cloth_details() {
    // State to store the selected color
    const [selectedColor, setSelectedColor] = useState(null);

    // Function to handle color selection
    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className='detail-page'>

            <div className='data-image'>
                <img src='https://i.pinimg.com/564x/74/f3/36/74f33680ed7c5f8cabc5ad22ae55c7ce.jpg' />
            </div>


            <div className="data-description">
                <div className="dress-title">
                    Ivory Blossom Embroidered Frock
                </div>

                <div className="dress-price">LKR 3750.00</div>

                <div className="dress-detail-topic">
                    DESCRIPTION
                </div>

                <hr className='line' />
                <div className="dress-history">
                    The Ivory Blossom Embroidered Frock is perfect for a variety of occasions, including garden parties, weddings, christenings, and other special events where a touch of elegance is desired. Its timeless design makes it a versatile addition to any wardrobe, suitable for both young girls and women seeking a classic and refined look.

                </div>


                <ul className='dress-selections'>

                    <li className='dress-main-dropdowns'>
                        <label htmlFor="size">SIZE</label>
                        <select id="size" className="dress-selection-dropdown">
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </li>

                    <li className='dress-main-dropdowns'>
                        <label htmlFor="price">QTY</label>
                        <select id="price" className="dress-selection-dropdown">
                            <option value="under-20">1</option>
                            <option value="20-50">2</option>
                            <option value="50-100">3</option>
                            <option value="over-100">4</option>
                        </select>
                    </li>

                    <div className="dress-colors">
                        <label className='colors'>COLOR</label>
                        <div className="color-types">
                          {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className={`color-square ${selectedColor === color ? 'selected' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorClick(color)}
                        />
                    ))}
                        </div>
                    </div>
                </ul>

                {/* <label className='colors'>COLOR</label>
                <div className="color-rings">
                    {product.colors.map((color, index) => (
                        <div
                            key={index}
                            className={`color-ring ${selectedColor === color ? 'selected' : ''}`}
                            style={{ borderColor: color }}
                            onClick={() => handleColorClick(color)}
                        />
                    ))}
                </div> */}



               <button className='add-cart'>ADD TO CART</button>


               <div className="image-types">
                   <img src='https://i.pinimg.com/474x/2d/81/17/2d811721aa3ff1858b460249e227d849.jpg'/>
               </div>



            </div>


        </div>
    )
}

export default Cloth_details
