import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide5 from '../../assets/Slider5.jpg'
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Carosel/SwiperSlider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const SwiperSlider = () => {
    return (
        <>
            <Swiper pagination={{ type: 'progressbar' }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide className='w-full h-full'>
                    <img src={slide5} alt="" className="object-contain 2xl:rounded-2xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperSlider;

{/* 
    <img src={bannerImg} alt="" className="object-contain h-72 2xl:rounded-2xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
     */}