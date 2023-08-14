import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion'
import AboutCard from '../components/home/AboutCard';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - SR DTU</title>
      </Head>

      <div className='pt-10 bg-black overflow-x-hidden'>

        <motion.section style={{ "backgroundImage": "linear-gradient(to bottom, #0e3b8a, #0e387f, #0e3475, #0f316a, #102d60, #112c5c, #112a59, #122955, #122a57, #132b59, #132d5b, #132e5d)" }} className=' rounded-xl w-[85%] mx-auto p-4 md:p-10 text-black'>
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='blur-[0.5px]'>
              <Image className='shadow-2xl rounded-2xl' width={700} height={700} src="/images/HERO.png">
              </Image>
            </div>
            <div className='my-auto text-tertiary tracking-[-2px] font-extrabold'>
              <motion.div
                className=''
                initial={{ opacity: 0 }}
                animate={{ opacity: 100, x: 200 }}
                transition={{ delay: 0.2, type: 'tween', duration: 2 }}
              >
                <Image src="/images/Logo.png" width={100} height={100} className='absolute right-[10] mt-2 ' />
              </motion.div>
              <p className='text-7xl font-sora mb-4'>SR DTU</p>
              <p className='text-2xl md:text-5xl font-sora whitespace-nowrap'>Join the Bot Revolution</p>
              <div className='mt-12'>
                <button className=' bg-tertiary bg-opacity-20 hover:text-secondary rounded-3xl p-4 font-sora text-2xl md:text-3xl  hover:bg-opacity-100 transition-all'>Enroll Now</button>
              </div>
            </div>
          </div>
        </motion.section >
      </div >
      <section className='pt-5 bg-black font-sora'>
        <h1 className='text-7xl text-center text-tertiary font-sora my-20'>About Us</h1>
        <div className='grid grid-rows-2  md:grid-cols-2 gap-4'>
          <div className=''>

            <AboutCard heading="Vision" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, provident? Non alias quis quos, omnis error in voluptate veritatis impedit saepe aliquam corrupti optio eaque tempora aspernatur dolorum cumque dolor necessitatibus dolore." link="/images/Mission.svg" />
          </div>
          <div className=''>
            <AboutCard heading="Mission" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, provident? Non alias quis quos, omnis error in voluptate veritatis impedit saepe aliquam corrupti optio eaque tempora aspernatur dolorum cumque dolor necessitatibus dolore.  " link="/images/Mission.svg" />
          </div>


        </div>
      </section>


    </>
  )
}
