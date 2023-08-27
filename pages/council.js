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
            <div className="min-h-screen bg-black md:pt-10 font-sora flex flex-col justify-center items-center">
                <h1 className={`text-[32px] mt-[80px] mb-[20px] font-black bg-clip-text font-sora text-transparent lg:text-[72px] sm:text-[60px] xs:text-[50px] lg:leading-[98px] bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500`}>COUNCIL 2022-2023</h1>
                <div className="flex gap-12 p-4 md:p-0 items-center font-sora">
                    <button
                        className={`text-white bg-gradient-to-t from-black to-blue-500 border-2 font-semibold hover:font-normal rounded-full px-3 md:px-6 py-4 text-lg  md:text-xl shadow ${activeButton === 'senior' ? 'border-2 border-tertiary ' : 'border-stone-600'}`}
                        onClick={() => handleButtonClick('senior')}
                    >
                        SENIOR COUNCIL
                    </button>
                    <button
                        className={`text-white bg-gradient-to-t from-black to-blue-500 border-2 font-semibold hover:font-normal rounded-full px-3 md:px-6 py-4 text-lg md:text-xl shadow ${activeButton === 'junior' ? 'border-2 border-tertiary' : 'border-stone-600'}`}
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
                                {/* cards - senior council */}
                                <div className={`grid grid-cols-1 bg-opacity-5 md:grid-cols-2 lg:grid-cols-3 gap-20 pl-[10px] pr-[10px] justify-between`}>
                                    {SeniorcouncilMembers.map((member, index) => (
                                        <div className={`${styles.cardContainer} rounded-xl shadow bg-gray-800 border-gray-700`}>
                                         <div className='relative'>
                                             <img
                                                 src={`images/Council/SeniorCouncilMember${index + 1}.jpg`}
                                                 alt="Profile"
                                                 className={`w-[300px] h-[280px] rounded-t-xl`}
                                             />
                                             <div class="p-5">
                                                 <h5 class="mb-2 text-3xl font-bold tracking-tight text-secondary">{member.name}</h5>
                                                 <h5 class="mb-2 text-2xl font-bold tracking-tight my-auto text-slate-300">{member.position}</h5>
                                                 <div className='flex flex-row gap-6 justify-start items-start'>
                                                    <InstagramButton url={member.insta} />
                                                    <LinkedInButton url={member.linkedin} />
                                                    <GitHubButton url={member.github} />
                                             </div>
                                             </div> 
                                         </div>
                                         <div className={`${styles.cardContent} h-full backdrop-filter backdrop-blur-2xl`}>
                                             <p className='text-[18px] text-white font-semibold font-["Calibri"] mb-10 '>{member.info}</p>
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
                                <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-[20px] pr-[10px] justify-between`}>
                                    {JuniorcouncilMembers.map((member, index) => (
                                        <div class="relative w-[300px] rounded-xl shadow bg-gray-800 border-gray-700">
                                            {/* Profile image */}
                                            <img src={`images/Council/JuniorCouncilMember${index + 1}.jpg`} alt="Profile" className={`w-[300px] h-[300px] rounded-t-xl`} />
                                            {/* Info */}
                                            <div class="p-3">
                                                <h5 class="mb-2 text-3xl font-bold tracking-tight text-secondary">{member.name}</h5>
                                                <div className='my-auto flex flex-row justify-between'>
                                                    <h5 class="text-lg font-bold tracking-tight text-slate-300">{member.position}</h5>
                                                    <div className='flex flex-row gap-4 my-auto '>
                                                        <InstagramButton url={member.insta} />
                                                        <LinkedInButton url={member.linkedin} />
                                                        <GitHubButton url={member.github}/>
                                                    </div>
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