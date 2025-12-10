import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/Slider1.jpg'
import slide2 from '../../assets/Slider2.jpg'
import slide3 from '../../assets/Slider3.jpg'
import slide4 from '../../assets/Slider4.jpg'
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
                <SwiperSlide className="flex items-center justify-center w-full h-full">
                    <img
                        src={slide1}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center w-full h-full">
                    <img
                        src={slide2}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center w-full h-full">
                    <img
                        src={slide3}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center w-full h-full">
                    <img
                        src={slide4}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center w-full h-full">
                    <img
                        src={slide5}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                    />
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default SwiperSlider;

{/* 
    <img src={bannerImg} alt="" className="object-contain h-72 2xl:rounded-2xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
     */}