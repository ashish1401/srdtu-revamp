import Image from 'next/image'
import React from 'react'
const AboutCard = (props) => {
    return (
        <div className=' w-[95%] mx-auto gradient-2 rounded-xl h-auto bg-black p-4 text-tertiary'>
            <h3 className='text-center  mx-auto pb-2 font-pop text-3xl md:text-5xl mb-4'>{props.heading}</h3>
            <div>
                <Image src={`${props.link}`} width="300" height="300" className='mx-auto' />
            </div>
            <p className='font-pop my-12'>
                {props.content}
            </p>
        </div>
    )
}

export default AboutCard