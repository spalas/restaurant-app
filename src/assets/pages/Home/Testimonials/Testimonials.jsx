import SectionTitle from "../../../../compoments/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data=> setReviews(data))
    },  [])
    return (
        <section className="my-20">
            <SectionTitle
                subheading="What our client Say"
                heading="Testimonials"
            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}

                    >


            <div className="m-24 flex flex-col items-center">
                        <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                         />
                        <p className="py-4">{ review.details}</p>
                        <h3  className="text-2xl text-yellow-600">{ review.name}</h3>
            </div>
                    </SwiperSlide>)
             }
         </Swiper>
            
            


        </section>
    );
};

export default Testimonials;