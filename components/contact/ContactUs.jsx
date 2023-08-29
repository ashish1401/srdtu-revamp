import {useState, useRef} from 'react'
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
    const {name, value} = e.target;
    setform({...form, [name]: [value]})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'SR-DTU',
        from_email: form.email,
        to_email: 'info.srdtu@gmail.com',
        message: form.message
      },
      process.env.NEXT_PUBLIC_KEY
    )
    .then(()=>{
      setloading(false);
      alert('Thank you. We will get back to you as soon as possible.');
      setform({
        name: '',
        email: '',
        message: '',
      })
    }, (error)=>{
      setloading(false)
      console.log(Error);
      alert('Something went wrong.')
    })
  }

  return (
    <div
      className='bg-center p-10 mt-20 grid grid-cols-2 flex-row gap-10 justify-center'
      style={{ backgroundImage: "url('/bg/ContactUs.png')", backgroundSize: '100% 100%', gridTemplateColumns: '1.5fr 1fr' }}
    >
      <motion.div
        className='flex-[0.75] w-[100%] bg-[#1c1734] p-8 rounded-2xl'
      >
        <div className='relative flex justify-center'>
          <h3 className={` font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-300 via-blue-500 to-white inline-block text-transparent bg-clip-text`}>CONTACT US</h3>
        </div>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white text-[24px] font-bold mb-4'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} 
              placeholder="What's your name?"
              className='bg-[#151030] py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white text-[24px] font-bold mb-4'>Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} 
              placeholder="What's your email?"
              className='bg-[#151030] py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white text-[24px] font-bold mb-4'>Your Query</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} 
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