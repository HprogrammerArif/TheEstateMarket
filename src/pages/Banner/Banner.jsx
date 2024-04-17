import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {
  return (
    <>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><img  src="https://i.ibb.co/34FqjF4/photo-1560448204-e02f11c3d0e2-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/VQqv67j/amsterdam-4167026-1280.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/s9GpKNf/houses-1719055-1280.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0GtnK4h/photo-1486406146926-c627a92ad1ab-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/mchT4Z3/train-8517089-1280.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/pPjg3Kr/photo-1469565686301-a0cf06bacf92-q-80-w-1473-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/CJyY90W/photo-1555396273-367ea4eb4db5-q-80-w-1374-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
    
  );
};

export default Banner;
