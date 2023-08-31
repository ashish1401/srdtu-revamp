import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import 'swiper/css';
import Image from 'next/image';

const Slider = () => {
    return (
        <Swiper

            autoplay={{
                "delay": 5000,
                "disableOnInteraction": false,
                "reverseDirection": true
            }}
            spaceBetween={10}
            slidesPerView={3}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className=" shadow-md shadow-black rounded-md"><Image className='rounded-md ' src={"/images/events/Quidditch.jpeg"} width={500} height={500} /></SwiperSlide>
            <SwiperSlide className=" shadow-md shadow-black rounded-md"><Image className='rounded-md ' src={"/images/events/Roborace.jpeg"} width={500} height={500} /></SwiperSlide>
            <SwiperSlide className=" shadow-md shadow-black rounded-md"><Image className='rounded-md ' src={"/images/events/Quidditch.jpeg"} width={500} height={500} /></SwiperSlide>
            <SwiperSlide className=" shadow-md shadow-black rounded-md"><Image className='rounded-md ' src={"/images/events/Roborace.jpeg"} width={500} height={500} /></SwiperSlide>
            <SwiperSlide className=" shadow-md shadow-black rounded-md"><Image className='rounded-md ' src={"/images/events/Quidditch.jpeg"} width={500} height={500} /></SwiperSlide>


        </Swiper>
    );
};
const EventCollage = () => {
    return (
        <div className='md:w-3/4 pb-10 mx-auto'>
            <Slider />
        </div>
    )
}

export default EventCollage