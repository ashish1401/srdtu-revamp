import Image from 'next/image'
import React from 'react'
const AboutCard = (props) => {
    return (
        <div className='md:w-[75%] w-[95%] mx-auto gradient-2 rounded-xl h-auto bg-black p-4 text-tertiary'>
            <h3 className='text-center text-5xl mb-4'>{props.heading}</h3>
            <div>
                <Image src={`${props.link}`} width="240" height="240" className='mx-auto' />
            </div>
            <p className='my-12'>
                {props.content}
            </p>
        </div>
    )
}

const Card = () => {
    return (
        <section className='pt-5 bg-gradient-to-l from-gray-700 via-gray-900 to-black font-sora'>
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
    )
}

export default Card