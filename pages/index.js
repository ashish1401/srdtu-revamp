import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion'
import Hero from '../components/home/Hero';
import Enroll from '../components/home/Enroll';
import About from './about-us';
import AboutCard from '../components/home/AboutCard';
import Heading from '../components/Heading';
import EventsCarousel from '../components/home/EventsCarousel';
import FreqQuestions from '../components/home/FreqQuestions';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - SR DTU</title>
      </Head>

      <div className='w-full bg-black drop-shadow-xl shadow-black overflow-hidden'>
        <Enroll className="" />
      </div>

      <section style={{ backgroundImage: "url('bg/6.png')", backgroundSize: '100%' }}>
        <Heading heading="About Us" />
        <div className='grid  p-4 md:flex md:flex-wrap lg:grid lg:grid-cols-3 md:gap-4 gap-y-10'>
          <div className=''>
            <AboutCard heading="Community" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, provident? Non alias quis quos, omnis error in voluptate veritatis impedit saepe aliquam corrupti optio eaque tempora aspernatur dolorum cumque dolor necessitatibus dolore." link="/images/home/Mission.svg" />
          </div>
          <div className=''>
            <AboutCard heading="Principles" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, provident? Non alias quis quos, omnis error in voluptate veritatis impedit saepe aliquam corrupti optio eaque tempora aspernatur dolorum cumque dolor necessitatibus dolore.  " link="/images/home/Mission.svg" />
          </div>
          <div className=''>
            <AboutCard heading="Goals" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, provident? Non alias quis quos, omnis error in voluptate veritatis impedit saepe aliquam corrupti optio eaque tempora aspernatur dolorum cumque dolor necessitatibus dolore.  " link="/images/home/Mission.svg" />
          </div>
        </div>
      </section>
      <section className=' pt-4' style={{ backgroundImage: "url('bg/9.png')", backgroundSize: '100% 100%' }}>
        <Heading heading="Past Events" />
        <div className='lg:grid-cols-2 lg:grid bg-[url(/images/robot.svg)] bg-no-repeat bg-cover bg-left-bottom md:bg-contain md:bg-right-bottom' style={{ backgroundSize: "" }}>
          <div className='flex justify-center items-center h-[700px] md:h-[800px] opacity-90 '>
            <EventsCarousel className="" />
          </div>
          <div>

          </div>


          {/* <div className='h-[400px] mb-10 bg-secondary rounded-xl w-[75%] mx-auto'> */}

          {/* </div> */}
        </div>
      </section >

      <section className='bg-black bg-des-1 bg-no-repeat bg-bottom bg-contain md:bg-cover  text-white  py-20'>
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2'>
          <div className=''>
            <Image src="/images/home/FAQ.svg" className='drop-shadow-2xl' width={1000} height={1000} />
          </div>
          <div className=''>
            <Heading heading="FAQs!" />
            <p className='font-pop mx-auto text-center text-2xl'>
              Questions regarding our Society?? We got them covered
            </p>
            <div className='mx-auto w-[90%] md:w-[75%] '>
              <FreqQuestions />
            </div>
          </div>
        </div>
      </section>


      <section className='bg-secondary drop-shadow pb-10'>
        <Heading heading="Collaborators" />
        <div className='flex flex-col md:flex-row md:justify-around'>
          <div>
            <h3 className='md:text-4xl text-2xl  text-center text-tertiary font-pop py-16' >
              Other Collaborators
            </h3>

          </div>
          <div className='md:w-1/2 '>
            <h3 className='md:text-4xl text-2xl  text-center text-tertiary font-pop py-16' >
              Prime Sponsors
            </h3>
            <div className='grid grid-cols-3 grid-rows-2 bg-black bg-opacity-10 mx-4 md:w-full h-96 gap-4 rounded-xl '>

              <div className=" m-2 rounded-xl">  </div>
              <div className=" m-2 rounded-xl">  </div>
              <div className=" m-2 rounded-xl">  </div>
              <div className=" m-2 rounded-xl">  </div>
              <div className=" m-2 rounded-xl">  </div>
              <div className=" m-2 rounded-xl">  </div>


            </div>
          </div>

        </div>

      </section>



    </>
  )
}
