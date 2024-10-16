import React from 'react'
import TrackVisibility from 'react-on-screen';
import Footer from '../components/Footer';


const latestReleases = [
  
    {
      images: 
      [
          'https://i.pinimg.com/474x/e8/ef/b1/e8efb1f7ca2c7d1f27592d201ac06da5.jpg',
          'https://i.pinimg.com/474x/81/34/08/813408ea2f2fb6a1b20fa78b100bc133.jpg',
      ],
      name:'Lounge Track Hoodie - Unisex ',
      price: 'LKR 3,950.00',
      colors: ['Brown']
  },

    {
        images: 
        [
            'https://i.pinimg.com/564x/03/f4/e1/03f4e171ab7eb53fdbb5975cf9fac18c.jpg',
  
            'https://i.pinimg.com/474x/1e/7a/29/1e7a297ab60f8d6485f9a3b39b9c61bd.jpg'
          
        ],
       
        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },

    
    

    
   
    {
        images: 
        [
           
           'https://i.pinimg.com/474x/ea/55/4a/ea554a301528073562f1f2b08352b9cc.jpg',
           'https://i.pinimg.com/474x/4e/65/2d/4e652d6bcfe5c32694986a71b2e70b68.jpg',

        ],
    
        name: 'Varsity Sweatkit - Unisex',
        price: 'LKR 5,250.00',
        colors: ['Grey','Black']
    },
   
    {
      images: 
      [
        'https://i.pinimg.com/474x/40/64/8f/40648f86e55c1491999dec1f7086c532.jpg',
        'https://i.pinimg.com/474x/df/0f/8e/df0f8ed090601ded508efe2d2236a14b.jpg'
        
      ],
     
      name: 'Varsity Hoodie - Unisex',
      price: 'LKR 3,750.00',
      colors: ['Navy Blue']
  },

  {
    images: 
    [
       
        'https://i.pinimg.com/474x/9a/97/67/9a97670134c2d44bb94cfcd4f89b976a.jpg',
        'https://i.pinimg.com/474x/ad/7b/f3/ad7bf3921bd7014ef091c1367989c292.jpg',
    ],
  
    name: 'Lounge Hoodie - Unisex',
    price: 'LKR 3,950.00',
    colors: ['Black','White']
},

{
    images: 
    [
        'https://i.pinimg.com/474x/80/ad/a8/80ada83d6772910d8dc5c77b7d410e86.jpg',
        'https://i.pinimg.com/474x/8d/d5/83/8dd583b80c24b6e8a14bff6ef7b41450.jpg'
       
    ],

    name: 'Varsity Sweatkit - Unisex',
    price: 'LKR 5,250.00',
    colors: ['Grey','Black']
},
{
    images: 
    [
       
        'https://i.pinimg.com/474x/68/9f/58/689f58276f8146e7da6f4ddc82ea6da8.jpg' ,
        'https://i.pinimg.com/564x/4b/c5/9b/4bc59b5b7635be0f79449ebebe7076ce.jpg',     
    ],

    name: 'Varsity Sweatkit - Unisex',
    price: 'LKR 5,250.00',
    colors: ['Grey','Black']
},
   
    {
        images: 
        [
            'https://i.pinimg.com/564x/d3/88/18/d38818f96d0df953d14e82789966814c.jpg',
            'https://i.pinimg.com/474x/6b/b5/98/6bb59858bc0890aa817e114201a94996.jpg'
          
        ],
       
        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },

   
];


function Kids_wear() {
  return (
    <div>
         
     <div className='sections'>
            <div className="section-title">
                KIDS'S WEAR
            </div>

            <div className="section-subtitle">
              Welcome to the Kids' Section, where fashion meets fun! Discover an enchanting collection of outfits designed to celebrate the joy and energy of childhood.
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
                                    <TrackVisibility>
                                        {({ isVisible }) => (
                                            <div className={`add-to-cart-button animate__animated ${isVisible ? 'animate__fadeInUp' : ''}`}>
                                                Add to Cart
                                            </div>
                                        )}
                                    </TrackVisibility>

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

                <Footer/>
   
    </div>
  )
}

export default Kids_wear
