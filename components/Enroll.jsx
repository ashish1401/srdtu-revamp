import { motion } from 'framer-motion';
import Bot from './Bot';
import Hero from './home/Hero';
import Image from 'next/image';

const Enroll = () => {
  return (
    <div className='grid-cols-2 flex mt-[70px] pt-10 bg-gradient-to-r shadow from-black to-blue-700 h-[600px]'>
      <motion.section
        animate={{ x: 50 }}
        transition={{ ease: "easeOut", duration: 2 }}
        // style={{ "backgroundImage": "linear-gradient(to bottom, #0e3b8a, #0e387f, #0e3475, #0f316a, #102d60, #112c5c, #112a59, #122955, #122a57, #132b59, #132d5b, #132e5d)" }} 
        className=' w-[50%] mx-auto p-4 md:p-10 text-black'
      >
        <div className='grid-rows-2 flex flex-col gap-10'>
          <div className='relative w-full'>
            {/* <Image className='shadow-2xl rounded-2xl' width={700} height={700} src="/images/HERO.png">
              </Image> */}
            <Bot />
          </div>
          <div className='my-auto text-tertiary tracking-[-2px] font-extrabold'>
            <motion.div
              className='px-12 py-1'
              initial={{ opacity: 0 }}
              animate={{ opacity: 100, x: 200 }}
              transition={{ delay: 0.2, type: 'tween', duration: 2 }}
            >
              {/* <Image src="/images/Logo.png" width={100} height={100} className='absolute  mt-2 ' /> */}
            </motion.div>
            <p className='text-7xl font-sora mb-4 bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent'>SR DTU</p>
            <p className='text-2xl md:text-5xl font-sora whitespace-nowrap'>Join the Bot Revolution</p>
            <div className='mt-12'>
              <button className=' bg-tertiary bg-opacity-20 hover:text-secondary rounded-3xl p-4 font-sora text-2xl md:text-3xl  hover:bg-opacity-100 transition-all'>Enroll Now</button>
            </div>
          </div>
        </div>
      </motion.section >

      <motion.div className='w-[50%]'
        animate={{ x: -50 }}
        transition={{ ease: "easeIn", duration: 2 }}
      >
        <Hero />
      </motion.div>
    </div >
  )
}

export default Enroll