import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const ContactUs = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: [value] })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    // public_key = 
    // template_id = 
    // service_id = 

    emailjs.send(
      'service_kq70697',
      'template_rpnzssk',
      {
        from_name: form.name,
        to_name: 'SR-DTU',
        from_email: form.email,
        to_email: 'srdtu@mail.com',
        message: form.message
      },
      't6OF0VOA9-wrjVQdx'
    )
      .then(() => {
        setloading(false);
        alert('Thank you. We will get back to you as soon as possible.');
        setform({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setloading(false)
        console.log(Error);
        alert('Something went wrong.')
      })
  }

  return (
    <div className='p-2 md:p-10 md:mt-20 bg-gradient-to-br from-secondary to-primary flex xl:flex-row flex-col-reverse justify-center'>
      <motion.div
        className='md:w-2/4 border-2 border-black shadow-lg shadow-primary  bg-primary bg-opacity-50 p-8 rounded-2xl'
      >
        <div className='relative flex justify-center'>
          <h3 className={` font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-300 via-blue-500 to-white inline-block text-transparent bg-clip-text`}>CONTACT US</h3>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-2 flex flex-col gap-2 md:gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white md:text-[24px] font-bold mb-2 md:mb-4'>Your Name</span>
            <input required type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="What's your name?"
              className='bg-[#151030] py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white md:text-[24px] font-bold mb-2 md:mb-4'>Email</span>
            <input required type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="What's your email?"
              className='bg-[#151030] py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white md:text-[24px] font-bold mb-2 md:mb-4'>Your Query</span>
            <textarea required rows="7" name="message" value={form.message} onChange={handleChange}
              placeholder="What would you like to ask?"
              className='bg-[#151030] py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type="submit"
            className=' bg-[#413766ae] py-3 px-8 text-white outline-none w-fit font-bold shadow-md shadow-[#050816] rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactUs;