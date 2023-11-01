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
const i = [{
    description:`Dive into the thrilling world of 'Quidditch the Drone Race.' Experience the
    perfect fusion of wizardry and cutting-edge technology as drones take flight in a
    breathtaking race, combining the magic of Quidditch with modern innovation.`,
    eventName: "Quidditch",
    eventDate: "12-08-2023",
    eventTime: "16:00",
    eventLocation: "OAT, Delhi Technological University",
    img: "/images/events/Quidditch.jpeg",

},
{
    description:`Step into the exciting realm of 'Robo Soccer,' where advanced robots showcase
    their skills on the pitch. It's the perfect blend of technology and sports, bringing
    you a world of electrifying matches and impressive robotic performances.`,
    eventName: "Robo Soccer",
    eventDate: "12-08-2023",
    eventTime: "16:00",
    eventLocation: "Department of Electronics and Communication Engineering, Delhi Technological University",
    img: "/images/events/Roborace.jpeg",

},{
    description:`Recalling the Questival 3.0 Workshop on AR/VR/MR, We delved into the world of immersive
    technologies with expert insights and hands-on experiences, unlocking new dimensions in    the past.`,
    eventName: "AR/VR/MR Workshop",
    eventDate: "24-04-2021",
    eventTime: "16:00",
    eventLocation: "Delhi Technological University",
    img:"/images/events/Workshop.jpg "

},
{
    description:`Questival 3.0's 'Code Wars' was an exciting battle of wits and skills. Participants
    engaged in challenging coding competitions, creating memorable moments and
    fostering a spirit of camaraderie.`,
    eventName: "Code Wars",
    eventDate: "24-04-2021 to 226-04-2023",
    eventTime: "16:00",
    eventLocation: "Delhi Technological University",
    img:"/images/events/Codewars.jpg"

},
{
    description:`Questival 3.0's 'Treasure Hunt' was an exhilarating adventure that led
    participants on a thrilling quest for hidden treasures, creating unforgettable
    memories along the way.`,
    eventName: "Treasure Hunt",
    eventDate: "21-04-2021",
    eventTime: "16:00",
    eventLocation: "Delhi Technological University",
    img:"/images/events/Treasure Hunt.jpg"

},
]
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
                className="bg-stone-900 border-2 mySwiper rounded-xl w-[90%] my-20 md:w-[70%]  mx-auto"

            >



                {i.map(el=>{
                    return <SwiperSlide>
                    <div className="w-full text-white p-2 font-pop">
                        <div className=" overflow-hidden rounded-lg">
                            <img
                                src={el.img}
                                alt="image"
                                className="w-full aspect-square"
                            />
                            <div className="p-8  sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <Link
                                        href=""
                                        className="text-white  mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        {el.eventName}
                                    </Link>
                                </h3>
                                <p className=" mb-7 text-base leading-relaxed">
                                   {el.description}
                                </p>

                                <div className='flex justify-between'>
                                    <div className='flex gap-2 '>
                                        <MdOutlineCalendarToday className='mt-1' />
                                        <Link
                                            href="">
                                            {el.eventDate}
                                        </Link>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <MdAccessTime className='mt-1' />
                                        <Link
                                            href="">
                                            {el.eventTime}
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex gap-2 my-2 '>
                                    <MdOutlineLocationOn className='text-lg mt-1' />
                                    <Link
                                        href="" className=''>
                                        {el.eventLocation}
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                })}
                
                

            </Swiper>
        </>
    );
}