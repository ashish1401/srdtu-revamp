import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosCloseCircleOutline } from 'react-icons/io';

const QuestionDropdown = (props) => {
    const [clicked, setClick] = useState(false);
    return (
        <div>
            <div className='rounded-xl shadow-md border-3 p-4  border-black shadow-white  bg-white text-black'>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-sora text-2xl'>{props.question}</p>
                    </div>
                    <div className='my-auto'>
                        <button onClick={() => {

                            setClick(!clicked)

                        }}>
                            {clicked ? <IoIosCloseCircleOutline /> : <IoIosArrowDropdown />}
                        </button>
                    </div>
                </div>
                <div>
                    {clicked ? <p className='font-pop'>{props.answer}</p> : null}
                </div>
            </div>
        </div>
    )
}

export default QuestionDropdown