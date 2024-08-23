import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import TrackVisibility from 'react-on-screen';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const latestReleases = [
    {
        images: 
        [
            'https://i.pinimg.com/474x/ad/e2/b5/ade2b53e00096008c03635a2fe72beb6.jpg',
            'https://i.pinimg.com/474x/db/1d/e2/db1de23b31c03ea5feae0679a2ba1302.jpg',
        ],
        name:'Lounge Track Hoodie - Unisex ',
        price: 'LKR 3,950.00',
        colors: ['Brown']
    },
    {
        images: 
        [
            'https://i.pinimg.com/564x/5e/9f/9a/5e9f9a23b5fe753ac8896b60797fd864.jpg',
            'https://i.pinimg.com/474x/39/de/0b/39de0bd424ee2fdd2d497796efc2f58e.jpg'
          
        ],
       
        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },

    {
        images: 
        [
            'https://i.pinimg.com/736x/79/43/00/7943003c00c5315cefb2866a3c37c104.jpg',
            'https://i.pinimg.com/474x/fe/b6/9a/feb69ae210dd8f32fbb1eedd5a3d37b6.jpg'
          
        ],
       
        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },

    {
        images: 
        [
            'https://i.pinimg.com/564x/f8/97/b6/f897b690e31dacc9d0634d83c8831a62.jpg',
            'https://i.pinimg.com/474x/32/6d/16/326d1675f064cb89d924ad16bde92975.jpg'
          
        ],
       
        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },

    

    
    {
        images: 
        [
           
            'https://i.pinimg.com/474x/a7/90/20/a790200c9543df7d5b99363c52b64629.jpg',
            'https://i.pinimg.com/564x/ef/4c/84/ef4c846ffd1958e50d081c1b4926f4be.jpg',
        ],
      
        name: 'Lounge Hoodie - Unisex',
        price: 'LKR 3,950.00',
        colors: ['Black','White']
    },

    {
        images: 
        [
            'https://i.pinimg.com/474x/cc/bb/68/ccbb681ccdcfe3eccc04a03d26a3df14.jpg',
            'https://i.pinimg.com/564x/f0/5a/4a/f05a4abe0cd5d1acfec9da644cef2775.jpg'
           
        ],
    
        name: 'Varsity Sweatkit - Unisex',
        price: 'LKR 5,250.00',
        colors: ['Grey','Black']
    },
    {
        images: 
        [
           
            'https://i.pinimg.com/474x/af/b7/0e/afb70ed917c7057c38f98da5d9ffcc04.jpg' ,
            ' https://i.pinimg.com/564x/61/ad/cd/61adcda32adace43a75948dcfd84bc3b.jpg',     
        ],
    
        name: 'Varsity Sweatkit - Unisex',
        price: 'LKR 5,250.00',
        colors: ['Grey','Black']
    },
    {
        images: 
        [
           
           'https://i.pinimg.com/474x/1c/f5/f4/1cf5f47a6bb41924600e3ababe474d9f.jpg',
           'https://i.pinimg.com/564x/f2/dd/45/f2dd4565809fd4f749ed00a78573c869.jpg',

        ],
    
        name: 'Varsity Sweatkit - Unisex',
        price: 'LKR 5,250.00',
        colors: ['Grey','Black']
    },
   
    

   
];
function Men_wear() {
    return (
        <div>

        
        <div className='sections'>
            <div className="section-title">
                MEN'S WEAR
            </div>

            <div className="section-subtitle">
               Explore the epitome of masculine elegance,discover a carefully curated selection of outfits that blend sophistication , tailored to suit every occasion and personal style. 
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
                                   
                                   <Link to={'/details'}>
                                    <TrackVisibility>
                                        {({ isVisible }) => (
                                            <div className={`add-to-cart-button animate__animated ${isVisible ? 'animate__fadeInUp' : ''}`}>
                                                Add to Cart
                                            </div>
                                        )}
                                    </TrackVisibility>
                                    </Link>

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

export default Men_wear
