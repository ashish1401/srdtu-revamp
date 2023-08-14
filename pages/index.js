import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - SR DTU</title>
      </Head>

      <div className='py-10 bg-black'>

        <section style={{ "backgroundImage": "linear-gradient(to bottom, #0e3b8a, #0e387f, #0e3475, #0f316a, #102d60, #112c5c, #112a59, #122955, #122a57, #132b59, #132d5b, #132e5d)" }} className='lg:blur-sm shadow-none hover:blur-none transition-all rounded-xl w-[85%] mx-auto p-4 md:p-10 text-black'>
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='blur-[0.5px]'>
              <Image className='shadow-2xl rounded-2xl' width={700} height={700} src="/images/HERO.png">
              </Image>
            </div>
            <div className='my-auto text-tertiary tracking-[-2px] font-extrabold'>
              <Image src="/images/Logo.png" width={100} height={100} className='absolute right-[10] z-[1]' />
              <p className='text-7xl font-sora mb-4'>SR DTU</p>
              <p className='text-2xl md:text-5xl font-sora whitespace-nowrap'>Join the Bot Revolution</p>
              <div>
                <button className=' bg-tertiary opacity-20 hover:text-secondary rounded-3xl p-4 font-sora text-2xl md:text-3xl mt-4 hover:opacity-100 transition-all'>Enroll Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className='my-10'>
          <h1 className='text-7xl text-center text-tertiary font-sora my-20'>About Us</h1>

        </section>
      </div>


    </>
  )
}
