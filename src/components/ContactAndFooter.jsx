import React from 'react';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactAndFooter = () => {
  return (
    <section id='contact' className='flex items-center justify-center flex-col w-full text-[14px] py-20 bg-[#e3e3e3] px-4'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='heading'>Contact Us</h1>
        <img src="images/qr.jpeg" alt="qr code" className='w-40 h-40 ' />
        <p className='w-30 text-md py-3 text-center font-sans'>Scan to connect with our team.</p>
      </div>

      {/* Contact Info Grid: Stacks on mobile, side-by-side on large screens */}
      <div className='flex flex-col md:flex-row  items-center md:justify-between w-full md:w-[80%] lg:w-[60%] gap-6 my-8'>

        <div className='flex justify-center items-center gap-2'>
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-700" />
          <p>team@hitha.farm</p>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <FontAwesomeIcon icon={faPhone} className="text-gray-700" />
          <p>+91 7533903123</p>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <a
            href="https://www.linkedin.com/company/hithaagrifintech/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-700 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <span className=" sm:inline">LinkedIn</span>
            {/* Shortened text for mobile to prevent overflow */}
          </a>
        </div>
      </div>

      {/* Divider line for better visual separation on mobile */}
      <div className="w-full md:w-[80%] lg:w-[60%] border-t border-gray-400 mb-6"></div>

      {/* Footer Links: Stacks on mobile */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-[80%] lg:w-[60%] gap-4 text-center'>
        <p className="order-2 md:order-1 text-gray-500">© 2024 Hitha AgriFintech. All rights reserved.</p>

        <div className='flex gap-6 md:gap-10 order-1 md:order-2'>
          <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900 font-medium">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-gray-600 hover:text-gray-900 font-medium">
            Terms of Service
          </a>
        </div>
      </div>

    </section>
  );
}

export default ContactAndFooter;