import React from 'react'

const Heading = (props) => {
    return (
        <h1 className='md:text-7xl text-5xl text-center text-tertiary font-sora py-16'>{props.heading}</h1>

    )
}

export default Heading