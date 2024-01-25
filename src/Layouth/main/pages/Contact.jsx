import React from 'react'
import { Link } from 'react-router-dom'
import './scss/Contact.scss'
import {motion} from "framer-motion"

function Contact() {
  return (
    <motion.div className='mt-32' initial = {{opacity:0}} animate={{opacity:1}}>
      <div className='bg-gray-300 p-10 mb-20'>
        <Link className='italic' to={"/home"}>Back</Link>
        <p className='text-gray-400'>Contact</p>
      </div>
      <div className='title text-center'>
        <p>SIMPLY OR WHITE</p>
        <h1 className='text-5xl'>Clever & Unique Ideas</h1>
      </div>
      <div className='flex  justify-evenly mt-16'>
        <div className='contact'>
          <h4 className='mb-10'>ADDRESS</h4>
          <p className='text-gray-400'>1800 Abbot Kinney Blvd. <br />
            Unit D & E Venice</p>
        </div>
        <div className='contact'>
          <h4 className='mb-10'>CONTACT</h4>
          <p className='text-gray-400'>Mobile: (+88) – 1990 – 6886 <br />
            Mail: contact@examplestore.com</p>
        </div>
        <div className='contact'>
          <h4 className='mb-10'>HOUR OF OPERATION</h4>
          <p className='text-gray-400'>Monday – Friday : 09:00 – 20:00 <br />
            Sunday & Saturday: 10:30 – 22:00 
          </p>
        </div>
      </div>
      <iframe
      title="Google Maps"
      className='mt-24 mb-24'
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97219.7988858087!2d49.8991104!3d40.4062208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1702671462538!5m2!1saz!2saz"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    <section className='Getintouch text-center mt-10 mb-10 border-b  '>
     <div className='title text-5xl'>
     Get in touch
     </div>
     <form className="w-[70%] mx-auto mt-8 p-8 ">
      <div className="mb-4 flex">
        <div className="mr-2 w-1/2">
          <label htmlFor="name" className="text-gray-600 block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ContactInputRefresh"
            placeholder='Name'
          />
        </div>
        <div className="ml-2 w-1/2">
          <label htmlFor="email" className="text-gray-600 block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ContactInputRefresh"
            placeholder='Email'

          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="text-gray-600 block mb-2">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ContactInputRefresh"
          placeholder='Subject'

        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="text-gray-600 block mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ContactInputRefresh"
          placeholder='Message'
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-36 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        Submit
      </button>
    </form>

    </section>
    </motion.div>
  )
}

export default Contact
