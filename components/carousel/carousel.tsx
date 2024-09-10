'use client';
import { Carousel } from 'antd';
import './style.css';

const CustomCarousel = () => {
  return(<Carousel autoplay={true} className='w-full carousel-style' adaptiveHeight={true}>
    <div>
      <img src='/images/carousel/1.jpeg' alt='14 Bis Escoteiros' />
    </div>
    <div>
      <img src='/images/carousel/2.jpeg' alt='14 Bis Escoteiros' />
    </div>
    <div>
      <img src='/images/carousel/3.jpg' alt='14 Bis Escoteiros' />
    </div>
  </Carousel>
  );
};
export default CustomCarousel;
