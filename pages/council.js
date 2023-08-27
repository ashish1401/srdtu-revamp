import Head from 'next/head';
import styles from '../styles/Council.module.css';
import Link from 'next/link';
import React, {useState} from 'react';
import { SeniorcouncilMembers, JuniorcouncilMembers } from '../constants';
import { LinkedinShareButton, LinkedinIcon,} from 'next-share';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'


function InstagramButton({ url }) {
    const instagramUrl = url;
  
    return (
      <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={26} style={{ color: '#fff', border: 'none', background: 'transparent' }}/>
      </Link>
    );
}

function LinkedInButton({ url }) {
    const linkedInUrl = url;
  
    return (
      <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={26} style={{ color: '#fff', border: 'none', background: 'transparent' }}/>
      </Link>
    );
  }

  function GitHubButton({ url }) {
    const githubUrl = url;
  
    return (
      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub size={26} style={{ color: '#fff', border: 'none', background: 'transparent' }}/>
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
            <div className="min-h-screen bg-white flex flex-col justify-center items-center">
                <h1 className={`text-[52px] mt-[80px] mb-[20px] font-black bg-clip-text text-transparent bg-gradient-to-t from-indigo-900 via-slate-800 to-indigo-900 lg:text-[72px] sm:text-[60px] xs:text-[50px] lg:leading-[98px]`}>COUNCIL 2022-2023</h1>
                <div className="flex gap-12 items-center">
                    <button
                        className={`bg-gradient-to-t from-sky-200 to-sky-200 border-2 font-semibold hover:font-normal rounded-full px-3 md:px-6 py-4 md:text-xl shadow ${activeButton === 'senior' ? 'border-4 border-blue-700' : 'border-stone-600'}`}
                        onClick={() => handleButtonClick('senior')}
                    >
                        SENIOR COUNCIL
                    </button>
                    <button
                        className={`bg-gradient-to-t from-sky-200 to-sky-200 border-2 font-semibold hover:font-normal rounded-full px-3 md:px-6 py-4 md:text-xl shadow ${activeButton === 'junior' ? 'border-4 border-blue-700' : 'border-stone-600'}`}
                        onClick={() => handleButtonClick('junior')}
                    >
                        JUNIOR COUNCIL
                    </button>
                </div>
                {/* Cards Content for members */}
                <div className="mt-10 mb-20">
                {activeButton === 'senior' && (
                    <div className="">
                        <div className={styles.container}>
                            {/* Cards - Senior Council */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pl-[10px] pr-[10px] justify-between`}>
                                {SeniorcouncilMembers.map((member, index) => (
                                    <div className={`${styles.cardContainer} bg-stone-800 outline outline-indigo-700 `}>
                                        <div className='relative'>
                                            <img
                                                src={`images/Council/SeniorCouncilMember${index + 1}.jpg`}
                                                alt="Profile"
                                                className={`w-[300px] h-[280px] rounded-t-xl`}
                                            />
                                            <div class="p-5">
                                                <h5 class="mb-2 text-3xl font-bold tracking-tight text-amber-500">{member.name}</h5>
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-300">{member.position}</h5>
                                            </div> 
                                        </div>
                                        <div className={`${styles.cardContent} h-full backdrop-filter backdrop-blur-2xl`}>
                                            <p className='text-[17px] text-white font-semibold mb-10'>{member.info}</p>
                                            <div className='flex flex-row gap-6 justify-start items-start'>
                                                <InstagramButton url={member.insta} />
                                                <LinkedInButton url={member.linkedin} />
                                                <GitHubButton url={member.github} />
                                            </div>
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
                            <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-[20px] pr-[10px] justify-between`}>
                                {JuniorcouncilMembers.map((member, index) => (   
                                    <div className={`${styles.cardContainer} bg-stone-800 outline outline-indigo-700 `}>
                                        <div className=''>
                                            <img
                                                src={`images/Council/JuniorCouncilMember${index + 1}.jpg`}
                                                alt="Profile"
                                                className={`w-[300px] h-[280px] rounded-t-xl`}
                                            />
                                            <div class="p-5">
                                                <h5 class="mb-2 text-3xl font-bold tracking-tight text-amber-500">{member.name}</h5>
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-300">{member.position}</h5>
                                            </div> 
                                        </div>
                                        <div className={`${styles.cardContent} h-[120px] backdrop-filter backdrop-blur-xl`}>
                                            <p className='text-white font-semibold mb-5'>{member.info}</p>
                                            <div className='flex flex-row gap-6 justify-start items-start'>
                                                <InstagramButton url={member.insta} />
                                                <LinkedInButton url={member.linkedin} />
                                                <GitHubButton url={member.github} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            
        </>
    )
}

export default Council;