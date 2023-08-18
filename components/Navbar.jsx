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

        <nav className=" md:fixed z-20 w-full  top-0 left-0 border-b text-white font-sora   bg-gradient-to-r from-black to-blue-500">
            <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">

                {/* <div className="flex md:order-2">
            </div> */}
                <div className="justify-between items-center m-auto w-full md:flex md:w-auto md:order-1">
                    <ul className='flex text-sm  md:p-0 mt-4 items-center font-medium  border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 gap-10'>
                        <Li params="" style={style} />
                        <Li params="events" />
                        <a href="" className="flex items-center">
                            <Image src="/images/Logo.png" width={100} height={100} alt="SR DTU logo" />

                        </a>
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

    return (<div>
        <li className='rounded-full block py-2 pl-3 pr-4'



            style={style}>
            <Link href={`/${props.params}`}>{props.params ? (props.params[0].toUpperCase() + props.params.slice(1)) : "Home"}</Link>
        </li>
    </div >
    )
}



export default Navbar