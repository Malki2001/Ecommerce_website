import React from 'react';
import Slider from 'react-slick';

const images = [
 'https://i.pinimg.com/564x/df/7f/51/df7f51baf5d6c7e5ec3d83afcca89e7f.jpg',
 'https://i.pinimg.com/564x/b5/bf/ac/b5bfac4ceae0b171e7b9dff7a71786b5.jpg',
 'https://i.pinimg.com/564x/56/22/29/562229e7dc5efd43fd8528c3a458ac17.jpg',
//   'https://i.pinimg.com/474x/c8/8a/01/c88a01fb2a76ad17e5691e5fc229c109.jpg',
  'https://i.pinimg.com/474x/69/b6/e2/69b6e2fad02d27892fbf48063980c8ed.jpg',
  'https://i.pinimg.com/736x/19/39/ea/1939ea1f09d78b1202c2976037fc2375.jpg',
  'https://i.pinimg.com/474x/5d/1a/7f/5d1a7fcebb1aad3c6681776b0dc0f71d.jpg'
  


];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='image-slider'>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={process.env.PUBLIC_URL + img} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}

       
      </Slider>
    </div>
  );
}

export default ImageSlider;
