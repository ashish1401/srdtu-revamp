import Head from 'next/head';
import styles from '../styles/Events.module.css';
import Heading from '../components/Heading';
import EventCollage from '../components/events/EventCollage';
import UpcomingEvents from '../components/events/UpcomingEvents';

const Events = () => {

    return (
        <>
            <Head>
                <title>Events - SR DTU</title>
            </Head>
            <div className='bg-primary sm:mt-20 text-white font-sora'>
                <Heading heading="Events" />
                <div>
                    <UpcomingEvents flex="def" />
                    <UpcomingEvents flex="reverse" />
                </div>
                <h3 className='font-pop w-[90%] text-xl mx-auto  md:text-4xl  text-center  my-10 drop-shadow-sm'>Represented <br /> <span className='text-secondary font-extrabold'>Delhi Technological University</span> in</h3>
                <div>
                    <EventCollage />
                </div>
            </div>
        </>
    )
}

export default Events;