import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../image/slide1.jpg'
import slide2 from '../../../image/slide2.jpg'
import slide3 from '../../../image/slide3.jpg'
import slide4 from '../../../image/slide4.jpg'
import slide5 from '../../../image/slide5.jpg'
import SectionTitle from '../../../../compoments/SectionTitle/SectionTitle';




const Category = () => {
    return (
      <section>
        <SectionTitle
          subheading={"From 11.00 AM to 10.00 PM"}
          heading={"Order Now"}
        ></SectionTitle>
            <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3  className='text-4x1 uppercase text-center -mt-12 text-white' >Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3  className='text-4x1 uppercase text-center -mt-12 text-white' >pizza</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3  className='text-4x1 uppercase text-center -mt-12 text-white' >mushroom</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3  className='text-4x1 uppercase text-center -mt-12 text-white' >cake cup</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3  className='text-4x1 uppercase text-center -mt-12 text-white' >cherry salad</h3>
          </SwiperSlide>
       
      </Swiper>
    
            
        </section>
    );
};

export default Category;