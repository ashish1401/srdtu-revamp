import React from 'react'
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdAccessTime } from "react-icons/md"
import { MdOutlineLocationOn } from "react-icons/md"
import Link from 'next/link';
import Image from 'next/image';

const PastEvents = (props) => {
    const i = {
        eventName: "Quidditch",
        eventDate: "12-08-2023",
        eventTime: "16:00",
        eventLocation: "BR-Audi , Delhi Technological University"

    }
    return (
        <div className='md:w-3/4 my-4 mx-auto w-[90%] rounded-lg gradient'>
            <div className=" text-white p-2 gradient-1  font-pop">
                <div className={`overflow-hidden md:flex flex-row-${props.flex} rounded-lg`}>
                    <Image
                        src="/images/events/Quidditch.jpeg"
                        alt="image"
                        width={500}
                        height={500}
                    />
                    <div className="p-3  my-auto  sm:p-9 md:p-7 xl:p-9">
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
                        <div className=' mt-6'>
                            <button className=' bg-tertiary bg-opacity-20 hover:text-secondary rounded-3xl p-3 font-sora hover:bg-opacity-100 transition-all'>Register Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastEvents