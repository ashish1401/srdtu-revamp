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

export default AboutCard