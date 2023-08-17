import React, { useRef, useState } from 'react';
import Link from 'next/link';

import { MdOutlineCalendarToday } from "react-icons/md";
import { MdAccessTime } from "react-icons/md"
import { MdOutlineLocationOn } from "react-icons/md"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const i = {
    eventName: "Quidditch",
    eventDate: "12-08-2023",
    eventTime: "16:00",
    eventLocation: "BR-Audi , Delhi Technological University"

}
export default function App() {
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
                    size: 30,
                    color: "white"
                }}


                modules={[Autoplay, Pagination]}
                style={{}}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="bg-blue-900 border-2 mySwiper rounded-xl w-[90%] md:w-[70%]  mx-auto  "

            >



                <SwiperSlide>
                    <div className="w-full text-white p-2 font-pop">
                        <div className=" overflow-hidden rounded-lg">
                            <img
                                src="/images/events/Quidditch.jpeg"
                                alt="image"
                                className="w-full"
                            />
                            <div className="p-8  sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <Link
                                        href=""
                                        className="text-white  mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        {i.eventName}
                                    </Link>
                                </h3>
                                <p className=" mb-7 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                    Lorem consectetur adipiscing elit.
                                </p>

                                <div className='flex justify-between'>
                                    <div className='flex gap-2 '>
                                        <MdOutlineCalendarToday className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventDate}
                                        </Link>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <MdAccessTime className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventTime}
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex gap-2 my-2 '>
                                    <MdOutlineLocationOn className='text-lg mt-1' />
                                    <Link
                                        href="" className=''>
                                        {i.eventLocation}
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full text-white p-2 font-pop">
                        <div className=" overflow-hidden rounded-lg">
                            <img
                                src="/images/events/Quidditch.jpeg"
                                alt="image"
                                className="w-full"
                            />
                            <div className="p-8  sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <Link
                                        href=""
                                        className="text-white  mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        {i.eventName}
                                    </Link>
                                </h3>
                                <p className=" mb-7 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                    Lorem consectetur adipiscing elit.
                                </p>

                                <div className='flex justify-between'>
                                    <div className='flex gap-2 '>
                                        <MdOutlineCalendarToday className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventDate}
                                        </Link>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <MdAccessTime className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventTime}
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex gap-2 my-2 '>
                                    <MdOutlineLocationOn className='text-lg mt-1' />
                                    <Link
                                        href="" className=''>
                                        {i.eventLocation}
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full text-white p-2 font-pop">
                        <div className=" overflow-hidden rounded-lg">
                            <img
                                src="/images/events/Quidditch.jpeg"
                                alt="image"
                                className="w-full"
                            />
                            <div className="p-8  sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <Link
                                        href=""
                                        className="text-white  mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        {i.eventName}
                                    </Link>
                                </h3>
                                <p className=" mb-7 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                    Lorem consectetur adipiscing elit.
                                </p>

                                <div className='flex justify-between'>
                                    <div className='flex gap-2 '>
                                        <MdOutlineCalendarToday className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventDate}
                                        </Link>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <MdAccessTime className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventTime}
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex gap-2 my-2 '>
                                    <MdOutlineLocationOn className='text-lg mt-1' />
                                    <Link
                                        href="" className=''>
                                        {i.eventLocation}
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full text-white p-2 font-pop">
                        <div className=" overflow-hidden rounded-lg">
                            <img
                                src="/images/events/Quidditch.jpeg"
                                alt="image"
                                className="w-full"
                            />
                            <div className="p-8  sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <Link
                                        href=""
                                        className="text-white  mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        {i.eventName}
                                    </Link>
                                </h3>
                                <p className=" mb-7 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                    Lorem consectetur adipiscing elit.
                                </p>

                                <div className='flex justify-between'>
                                    <div className='flex gap-2 '>
                                        <MdOutlineCalendarToday className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventDate}
                                        </Link>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <MdAccessTime className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventTime}
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex gap-2 my-2 '>
                                    <MdOutlineLocationOn className='text-lg mt-1' />
                                    <Link
                                        href="" className=''>
                                        {i.eventLocation}
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full text-white p-2 font-pop">
                        <div className=" overflow-hidden rounded-lg">
                            <img
                                src="/images/events/Quidditch.jpeg"
                                alt="image"
                                className="w-full"
                            />
                            <div className="p-8  sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <Link
                                        href=""
                                        className="text-white  mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        {i.eventName}
                                    </Link>
                                </h3>
                                <p className=" mb-7 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                    Lorem consectetur adipiscing elit.
                                </p>

                                <div className='flex justify-between'>
                                    <div className='flex gap-2 '>
                                        <MdOutlineCalendarToday className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventDate}
                                        </Link>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <MdAccessTime className='mt-1' />
                                        <Link
                                            href="">
                                            {i.eventTime}
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex gap-2 my-2 '>
                                    <MdOutlineLocationOn className='text-lg mt-1' />
                                    <Link
                                        href="" className=''>
                                        {i.eventLocation}
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>









            </Swiper>
        </>
    );
}