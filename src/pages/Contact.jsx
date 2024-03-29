import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet,HelmetProvider } from 'react-helmet-async';
import {toast} from 'react-toastify'
///emailjs.com

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0k68lpm', 'template_7yki53q', form.current, '937jjERW1MqB7DitB')
      .then((result) => {
          console.log(result.text);
          toast.success('Your message has been sent successfully. I will contact you soon. Thank you!')
      }, (error) => {
          console.log(error.text);
          toast.error('Your message has not been sent. Please try again!')
      });
  };
  return (
      <>
      <HelmetProvider>
      <Helmet>
        <title>Contact | NMK</title>
      </Helmet>
      </HelmetProvider>
      <section>
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className='heading text-white text-center'>
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text__para">
          </p>
          <form ref={form} onSubmit={sendEmail} className='space-y-8'>
          <div>
              <label htmlFor="subject" className='form__label'>Full Name</label>
              <input type="text" name='user_name' id="subject" placeholder='Full Name' className='form__input mt-1' />
            </div>
            <div>
              <label htmlFor="email" className='form__label'>Your Email</label>
              <input type="email" name='user_email' id="email" placeholder='example@gmail.com' className='form__input mt-1' />
            </div>
            <div>
              <label htmlFor="subject" className='form__label'>Subject</label>
              <input type="text" name='subject' id="subject" placeholder='Let us know how we can help you' className='form__input mt-1' />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor="message" className='form__label'>Your Message</label>
              <textarea name='message' rows='6' type="text" id="message" placeholder='Leave a comment...' className='form__input mt-1' />
            </div>
            <button className="btn rounded sm:w-fit">Submit</button>
          </form>
        </div>
    </section>
      </>
  )
}

export default Contact