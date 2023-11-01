import React, { useState } from 'react'
import { IoIosArrowDropdown, IoIosCloseCircleOutline } from 'react-icons/io'
import QuestionDropdown from './QuestionDropdown';
const questionAnswers = [
    { 
        id:1,
        question:"What is the Society of Robotics - Delhi Technological University (SRDTU)?",
        answer:"SRDTU is a student-led organization at Delhi Technological University dedicated to promoting robotics and developing innovative solutions for societal challenges.",
    },
    { 
        id:2,
        question:"What is the main goal of SRDTU?",
        answer:"The main goal of SRDTU is to create a tech-friendly world by providing technical knowledge, bridging the gap between industry and students, and delivering cutting-edge solutions to industrial and societal challenges.",
    },{ 
        id:3,
        question:"What fields does SRDTU focus on besides robotics?",
        answer:"SRDTU works in various fields including web development, android applications, cloud computing, vision-based applications, and core electronics, fostering innovation and interdisciplinary projects.",
    },
    { 
        id:4,
        question:"How does SRDTU engage in research activities?",
        answer:"SRDTU aims to harness the potential of technlogical advancements by building a research mindset among our members. This is credited to our honorable faculty advisors as well as diffferent Industrial organizations backing our cause.",
    },{ 
        id:5,
        question:"How can I reach out to you?",
        answer:"Head to the Contact page and directly reach out to our members by submitting your query, we'd me more than happy to assist you!",
    },
]
const FreqQuestions = () => {
    return (
        <div className='my-8 flex flex-col gap-y-4'>
            {questionAnswers.map(el=>{
            return <QuestionDropdown question={el.question} answer={el.answer} key={el.id} />
            })}
        </div>
    )
}

export default FreqQuestions





