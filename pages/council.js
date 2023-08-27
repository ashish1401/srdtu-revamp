import Head from 'next/head';
import styles from '../styles/Council.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { SeniorcouncilMembers, JuniorcouncilMembers } from '../constants';
import { LinkedinShareButton, LinkedinIcon, } from 'next-share';
import { FaInstagram, FaInstagramSquare } from 'react-icons/fa'


function InstagramButton({ url }) {
    const instagramUrl = `${encodeURIComponent(url)}`;

    return (
        <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} style={{ color: '#ff69b4', borderRadius: '0%', background: 'transparent' }} />
        </Link>
    );
}


const Council = () => {
    const [activeButton, setActiveButton] = useState('senior');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };
    return (
        <>
            <Head>
                <title>Council - SR DTU</title>
            </Head>
            {/* Buttons for navigation */}
            <div className="min-h-screen bg-black flex flex-col justify-center font-sora items-center">
                <h1 className={` mt-[80px]  drop-shadow-sm shadow-white md:pt-10 mb-[20px] font-black bg-clip-text text-transparent bg-gradient-to-t from-indigo-900 via-slate-800 to-indigo-900 text-[30px] lg:text-[72px] sm:text-[60px] xs:text-[50px] lg:leading-[98px]`}>COUNCIL 2022-2023</h1>
                <div className="flex gap-12 items-center">
                    <button
                        className={`bg-gradient-to-t from-sky-200 to-sky-200 font-pop border-2 font-semibold hover:font-normal rounded-full px-2 md:px-6 py-4 text-sm md:text-xl shadow ${activeButton === 'senior' ? 'border-4 border-blue-700' : 'border-stone-600'}`}
                        onClick={() => handleButtonClick('senior')}
                    >
                        SENIOR COUNCIL
                    </button>
                    <button
                        className={`bg-gradient-to-t from-sky-200 to-sky-200 font-pop border-2 font-semibold hover:font-normal rounded-full px-2 md:px-6 py-4 text-sm md:text-xl shadow ${activeButton === 'junior' ? 'border-4 border-blue-700' : 'border-stone-600'}`}
                        onClick={() => handleButtonClick('junior')}
                    >
                        JUNIOR COUNCIL
                    </button>
                </div>
                {/* Cards Content for members */}
                <div className="mt-10 mb-20 font-sora">
                    {activeButton === 'senior' && (
                        <div className="">
                            <div className="">
                                {/* cards - senior council */}
                                <div className={`grid grid-cols-1 w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-20 pl-[10px] pr-[10px] justify-between`}>
                                    {SeniorcouncilMembers.map((member, index) => (
                                        <div class="relative  rounded-xl drop-shadow-lg shadow-sm shadow-white bg-gray-800 bg-opacity-25 border-gray-700">

                                            {/* Profile image */}
                                            <div className='h-96 w-3/4 mx-auto my-4'>
                                                <img src={`images/Council/SeniorCouncilMember${index + 1}.jpg`} alt="Profile" className={`rounded-xl h-full w-full`} />
                                            </div>

                                            {/* Info */}
                                            <div class="p-5">
                                                <h5 class=" mb-2 text-3xl font-extrabold  tracking-tight text-primary">{member.name}</h5>

                                                <div className='flex my-auto justify-between items-center'>
                                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-slate-300">{member.position}</h5>
                                                    <div className='flex flex-row gap-4 my-auto'>
                                                        <InstagramButton url={member.insta} />
                                                        <LinkedinShareButton
                                                            url={member.linkedin} >
                                                            <LinkedinIcon size={32} round />
                                                        </LinkedinShareButton>
                                                    </div>
                                                </div>


                                                <p class="my-3 font-normal  text-gray-400">{member.info}</p>



                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeButton === 'junior' && (
                        <div className="">
                            <div className={styles.container}>
                                {/* cards - junior council */}
                                <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-[20px] pr-[10px] justify-between`}>
                                    {JuniorcouncilMembers.map((member, index) => (
                                        <div class="relative w-[280px] rounded-xl shadow bg-gray-800 border-gray-700">
                                            {/* Profile image */}
                                            <img src={`images/Council/JuniorCouncilMember${index + 1}.jpg`} alt="Profile" className={`w-[300px] h-[300px] rounded-t-xl`} />
                                            {/* Info */}
                                            <div class="p-5">
                                                <h5 class="mb-2 text-3xl font-bold tracking-tight text-amber-500">{member.name}</h5>
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-300">{member.position}</h5>

                                                <div className='flex flex-row gap-4  pt-3'>
                                                    <InstagramButton url={member.insta} />
                                                    <LinkedinShareButton
                                                        url={member.linkedin} >
                                                        <LinkedinIcon size={32} round />
                                                    </LinkedinShareButton>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div >

        </>
    )
}

export default Council;