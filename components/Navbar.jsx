import { useLocation, useParams } from 'react-router-dom'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [style, setStyle] = useState({});

    const css = {
        "border": "white solid 2px"
    }
    return (
        <nav className='font-pop shadow-2xl  bg-gradient-to-r from-black to-blue-500  text-white font-extrabold text-sm md:gap-2 md:text-xl'>
            <ul className='flex p-4 md:justify-around gap-5 items-center h-28'>

                <Li params="" style={style} />
                <Li params="events" />
                <li className='mx-auto md:absolute bg-transparent w-20 h-20 md:h-32 md:w-32  flex justify-center rounded-full'>
                    <Image className="m-auto " src={'/images/Logo.png'} width={120} height={120}></Image>
                </li>
                <Li params="gallery" />
                <Li params="council" />



            </ul>
        </nav >
    )
}

const Li = (props) => {
    const [style, setStyle] = useState({});
    const css = {
        "transition": "all 0.1s",
        "borderBottom": "2px solid white",
        "right": "0",
    }
    return (<div>
        <li className=''
            onMouseOver={() => {
                setStyle(css)
            }}

            onMouseLeave={() => {
                setStyle({})
            }}
            style={style}>
            <Link href={`/${props.params}`}>{props.params ? (props.params[0].toUpperCase() + props.params.slice(1)) : "Home"}</Link>
        </li>
    </div >
    )
}



export default Navbar