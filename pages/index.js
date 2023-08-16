import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion'
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
      <section className='pt-10 bg-black'>
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
      <section className='bg-black pt-4'>
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


      <section className='bg-secondary drop-shadow-sm pb-10'>
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
