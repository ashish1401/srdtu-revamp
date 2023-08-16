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
        
    <nav className=" fixed w-full z-20 top-0 left-0 border-b backdrop-filter backdrop-blur-2xl bg-gradient-to-l from-gray-700 via-gray-900 to-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center">
                <img src="/images/Logo.png" className="h-8 mr-3" alt="SR DTU logo"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SOCIETY OF ROBOTICS</span>
            </a>
            {/* <div className="flex md:order-2">
            </div> */}
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 '>
                    <Li params="" style={style} />
                    <Li params="events" />
                    <Li params="gallery" />
                    <Li params="council" />
                </ul>
            </div>
        </div>
    </nav>

    )
}

const Li = (props) => {
    const [style, setStyle] = useState({});
    const css = {
        "transition": "all 0.1s",
        "border": "2px solid white",
        "right": '0',
    }
    return (<div>
        <li className='rounded-full block py-2 pl-3 pr-4 font-bold text-white hover:text-blue-500'
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