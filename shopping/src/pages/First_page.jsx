import React from 'react'
import ImageSlider from '../components/ImageSlider'
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const latestReleases = [
    {
        images: 
        [
            'https://i.pinimg.com/564x/7d/4c/68/7d4c688e2440ac8445830cea9e5752ec.jpg',
            'https://i.pinimg.com/564x/57/67/81/576781fb11728219aaa2c88b19bd8d5b.jpg',
        ],
        name:'Lounge Track Hoodie - Unisex ',
        price: 'LKR 3,950.00',
        colors: ['Brown']
    },
    {
        images: 
        [
            'https://i.pinimg.com/564x/0d/63/f1/0d63f1551988edc0599b1dbcb12ad1c4.jpg',
            'https://i.pinimg.com/474x/93/4e/ab/934eab1ae2bb8fb7f82a3516ea194bd5.jpg'
          
        ],
       
        name: 'Varsity Hoodie - Unisex',
        price: 'LKR 3,750.00',
        colors: ['Navy Blue']
    },


    {
        images: 
        [
            'https://i.pinimg.com/564x/5e/52/a1/5e52a1f343ffeed2762bd1b4877df309.jpg',
            'https://i.pinimg.com/564x/14/0c/72/140c7272d6414aa641717d75f9138f71.jpg',
        ],
      
        name: 'Lounge Hoodie - Unisex',
        price: 'LKR 3,950.00',
        colors: ['Black','White']
    },

    {
        images: 
        [
            'https://i.pinimg.com/564x/08/63/5c/08635c0c3061585e8bb5b06be562ef7d.jpg',
            'https://i.pinimg.com/564x/21/6b/f0/216bf092e6656649aa36d0ce56965460.jpg'
           
        ],
    
        name: 'Varsity Sweatkit - Unisex',
        price: 'LKR 5,250.00',
        colors: ['Grey','Black']
    },
    // {
    //     images: 
    //     [
    //         ' https://i.pinimg.com/564x/b5/10/55/b51055eb6e2bc3d659f0787b50117f4d.jpg',
    //         'https://i.pinimg.com/474x/49/ee/46/49ee465fbcef39e9e8d37cfbd873cfa9.jpg'      
    //     ],
    
    //     name: 'Varsity Sweatkit - Unisex',
    //     price: 'LKR 5,250.00',
    //     colors: ['Grey','Black']
    // },
    // {
    //     images: 
    //     [
    //         'https://i.pinimg.com/564x/af/ff/27/afff2774b9c9dc54731d3eae3a3e6e0c.jpg',
    //        'https://i.pinimg.com/564x/40/d0/f3/40d0f37a2324f7e19b0348d3612ef684.jpg'

    //     ],
    
    //     name: 'Varsity Sweatkit - Unisex',
    //     price: 'LKR 5,250.00',
    //     colors: ['Grey','Black']
    // },
   
    

   
];

const categoryItems=[
    {
        image:'https://i.pinimg.com/474x/66/dc/f8/66dcf8614afd8ee95ac4059d9b181cc2.jpg',
        type:"Men's",
        path: '/mens'
    },

    {
        image:'https://i.pinimg.com/474x/76/a5/6e/76a56e078b5e0348be8304b6da0225b3.jpg',
        type:"Women's",
        path:'/womens'
    },
    // {
    //     image:'https://i.pinimg.com/564x/2b/fa/4e/2bfa4eb578decefaba44700da2f9e041.jpg'
    // },

    {
        image:'https://i.pinimg.com/564x/9a/09/ee/9a09ee9c473d72d067e0231ac53151e1.jpg',
        type:"Kids's",
        path:'/kids'
    },
  

];

export default function First_page() {
    return (
        <div>
            <div className="main-part">
                <div className="slider-overlay">
                    <div className="main-page-topic">
                        Where style speaks, trends resonate, fashion flourishes
                    </div>
                    <div className="main-page-subtopic">
                        Unveiling a fashion destination where trends blend seamlessly with your individual style aspirations. Discover Today!
                    </div>
                    <TrackVisibility>
                    <div className="animate__animated animate__fadeIn">
                     <div className="collection-button">
                        <button>
                            Shop Now
                        </button>
                     </div>
                    </div>
                    </TrackVisibility>
                </div>
                <ImageSlider />
            </div>

            <div className="second-part">
                <div className="second-part-topic">
                    LATEST RELEASE

                </div>

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

            <div className="third-part">
                <div className="third-part-topic">
                    CATEGORIES
                </div>
                
                <div className="categories">

                    {categoryItems.map((item, index) => (
                        <div key={index} className="category-container">
                            <div className="category-image">
                                <img src={item.image} alt='cloth-item' />
                                <div className="white-overlay">
                                    <div className="category-details">
                                       <div className="category-type">{item.type}</div>
                                       <div className="category-subtype">Fashion</div>
                                       <div className="category-path">

                                        <Link to={item.path}><button >SHOP NOW</button></Link>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                           
                        </div>
                    ))}
                </div>

            </div>

            <Footer/>

          


        </div>
    )
}
