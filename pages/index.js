import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion'
import Enroll from '../components/Enroll';
import AboutCard from '../components/home/AboutCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - SR DTU</title>
      </Head>
      <div className='relative bg-black w-full h-full py-30'>
        <Enroll />
        <AboutCard />
      </div>

    </>
  )
}
