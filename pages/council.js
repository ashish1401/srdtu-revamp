import Head from 'next/head';
import styles from '../styles/Council.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import AboutCard from '../components/home/AboutCard';
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';

const SeniorcouncilMembers = [
    { name: "Yash Jangra", position: "President" },
    { name: "Rishabh Jain", position: "Vice President" },
    { name: "Nakshatra Jain", position: "Vice President" },
    { name: "Rachit Mimrot", position: "Treasurer" },
    { name: "Kunal Bansal", position: "Advisor" },
];

const JuniorcouncilMembers = [
    { name: "Harsh Pandey", position: "General Secretary" },
    { name: "Devansh Wassista", position: "Joint Secretary" },
    { name: "Himanshu Singh", position: "Joint Secretary" },
    { name: "Kartik Kasana", position: "Joint Treasurer" },
    { name: "Kartik Upadhyay", position: "PR and Corpo Head" },
    { name: "Manav Aggarwal", position: "PR and Corpo Head" },
    { name: "Ashish Chotani", position: "Technical Head" },
    { name: "Dhruv Upreti", position: "Technical Head" },
    { name: "Manav Singh", position: "Technical Head" },
    { name: "Shubhojit Gosh", position: "Design and Content Head" },
    { name: "Vaibhav Sharma", position: "Design and Content Head" },
    { name: "Pritthish", position: "Logistics and Hospitality Head" },
    { name: "Ayush", position: "Logistics and Hospitality Head" },
    { name: "Prithvi", position: "Logistics and Hospitality Head" },
    { name: "Shikhar Rajput", position: "Logistics and Hospitality Head" },
];

// const Council = () => {
//     return (
//         <>
//             <Head>
//                 <title>Council - SR DTU</title>
//             </Head>
                    
//             <div>
//                 Council
//             </div>
//             <div className={styles.container}>
//             <h1 className={styles.heading}>Council 2022-2023</h1>
//             <div className={styles.cardContainer}>
//                 <div className={styles.cardWrapper}>
//                 <div className={styles.card}>
//                     <div className={styles.cardInner}>
//                     <div className={styles.cardFront}>
//                         <div className={styles.cardContent}>
//                         <img src="images/Council/Member1.jpg" alt="Error aa gaya kya?" className={styles.profileImage} />
//                         <h2 className={styles.position}>President </h2>
//                         <h1 className={styles.name}>Yash Jangra</h1>
//                         </div>
//                     </div>
//                     <div className={styles.cardBack}>
//                         <div className={styles.cardContent}>
//                         <p>One-liner description about the person 1.</p>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 <div className={styles.cardWrapper}>
//                 <div className={styles.card}>
//                     <div className={styles.cardInner}>
//                     <div className={styles.cardFront}>
//                         <div className={styles.cardContent}>
//                         <img src="images/Council/Member2.jpg" alt="Profile" className={styles.profileImage} />
//                         <h2 className={styles.position}>Vice President</h2>
//                         <h1 className={styles.name}>Rishabh Jain</h1>
//                         </div>
//                     </div>
//                     <div className={styles.cardBack}>
//                         <div className={styles.cardContent}>
//                         <p>One-liner description about the person 1.</p>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 <div className={styles.cardWrapper}>
//                 <div className={styles.card}>
//                     <div className={styles.cardInner}>
//                     <div className={styles.cardFront}>
//                         <div className={styles.cardContent}>
//                         <img src="images/Council/Member3.jpg" alt="Profile" className={styles.profileImage} />
//                         <h2 className={styles.position}>Vice President </h2>
//                         <h1 className={styles.name}>Nakshatra Jain</h1>
//                         </div>
//                     </div>
//                     <div className={styles.cardBack}>
//                         <div className={styles.cardContent}>
//                         <p>One-liner description about the person 1.</p>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 <div className={styles.cardWrapper}>
//                 <div className={styles.card}>
//                     <div className={styles.cardInner}>
//                     <div className={styles.cardFront}>
//                         <div className={styles.cardContent}>
//                         <img src="images/Council/Member4.jpg" alt="Profile" className={styles.profileImage} />
//                         <h2 className={styles.position}>Treasurer </h2>
//                         <h1 className={styles.name}>Rachit Mimrot</h1>
//                         </div>
//                     </div>
//                     <div className={styles.cardBack}>
//                         <div className={styles.cardContent}>
//                         <p>One-liner description about the person 1.</p>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 <div className={styles.cardWrapper}>
//                 <div className={styles.card}>
//                     <div className={styles.cardInner}>
//                     <div className={styles.cardFront}>
//                         <div className={styles.cardContent}>
//                         <img src="images/Council/Member6.jpg" alt="Profile" className={styles.profileImage} />
//                         <h2 className={styles.position}>Advisor</h2>
//                         <h1 className={styles.name}>Kunal Bansal</h1>
//                         </div>
//                     </div>
//                     <div className={styles.cardBack}>
//                         <div className={styles.cardContent}>
//                         <p>One-liner description about the person 1.</p>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>

//             </>

//     )
// }

// const Council = () => {
//     return (
//         <>
//             <Head>
//                 <title>Council - SR DTU</title>
//             </Head>
                    
//             <div>
//                 Council
//             </div>
            

//             </>

//     )
// }

const Council = () => {
    return (
        <>
            <Head>
                <title>Council - SR DTU</title>
            </Head>
            <div>
                Council
            </div>
            <div className={styles.container}>
                <h1 className={styles.heading}>Senior Council 2022-2023</h1>
                <div className={styles.cardContainer}>
                    {SeniorcouncilMembers.map((member, index) => (
                        <div className={styles.cardWrapper} key={index}>
                            <div className={styles.card}>
                                <div className={styles.cardInner}>
                                    <div className={styles.cardFront}>
                                        <div className={styles.cardContent}>
                                            <Image src={`/images/Council/SeniorCouncilMember${index + 1}.jpg`} alt="Profile" width = {300} height = {450} className={styles.profileImage} />
                                            <h2 className={styles.position}>{member.position}</h2>
                                            <h1 className={styles.name}>{member.name}</h1>
                                        </div>
                                    </div>
                                    <div className={styles.cardBack}>
                                        <div className={styles.cardContent}>
                                            <p>One-liner description about {member.name}.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <h1 className={styles.heading}>Junior Council 2022-2023</h1>
                <div className={styles.cardContainer}>
                    {JuniorcouncilMembers.map((member, index) => (
                        <div className={styles.cardWrapper} key={index}>
                            <div className={styles.card}>
                                <div className={styles.cardInner}>
                                    <div className={styles.cardFront}>
                                        <div className={styles.cardContent}>
                                            <Image src={`/images/Council/JuniorCouncilMember${index + 1}.jpg`} alt="Profile" width = {300} height = {450} className={styles.profileImage} />
                                            <h2 className={styles.position}>{member.position}</h2>
                                            <h1 className={styles.name}>{member.name}</h1>
                                        </div>
                                    </div>
                                    <div className={styles.cardBack}>
                                        <div className={styles.cardContent}>
                                            <p>One-liner description about {member.name}.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Council;