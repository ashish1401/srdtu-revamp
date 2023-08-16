import React, { useState } from 'react'
import { IoIosArrowDropdown, IoIosCloseCircleOutline } from 'react-icons/io'
import QuestionDropdown from './QuestionDropdown';
const FreqQuestions = () => {
    return (
        <div className='my-8 flex flex-col gap-y-4'>
            <QuestionDropdown question="How are you doing?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur temporibus repellat corrupti optio facere doloribus vero sequi ipsa mollitia est id unde molestias, similique autem eaque aliquam quidem nisi repellendus facilis cumque." />
            <QuestionDropdown question="How are you doing?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur temporibus repellat corrupti optio facere doloribus vero sequi ipsa mollitia est id unde molestias, similique autem eaque aliquam quidem nisi repellendus facilis cumque." />
            <QuestionDropdown question="How are you doing?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur temporibus repellat corrupti optio facere doloribus vero sequi ipsa mollitia est id unde molestias, similique autem eaque aliquam quidem nisi repellendus facilis cumque." />
            <QuestionDropdown question="How are you doing?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur temporibus repellat corrupti optio facere doloribus vero sequi ipsa mollitia est id unde molestias, similique autem eaque aliquam quidem nisi repellendus facilis cumque." />
            <QuestionDropdown question="How are you doing?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur temporibus repellat corrupti optio facere doloribus vero sequi ipsa mollitia est id unde molestias, similique autem eaque aliquam quidem nisi repellendus facilis cumque." />


        </div>
    )
}

export default FreqQuestions
