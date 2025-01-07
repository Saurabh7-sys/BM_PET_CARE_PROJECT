import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";



 
const Socials = () => {
  const socialLinks = [
    { id: 1, platform: <a href='https://wa.me/+918369101021'> <BsWhatsapp  className='  h-auto w-9'/></a>},
    { id: 2, platform: <a href='https://www.instagram.com/bm_pet_care/'><FaInstagram className=' h-64 w-9' /></a>},
    { id: 3, platform: <a href='https://g.co/kgs/841Pbi'><FaGoogle className=' h-64 w-9' /> </a>},
    { id: 4, platform: <a href="https://maps.app.goo.gl/M8xiVMX6nPrFd3TC7"><SiGooglemaps className=' h-64 w-9' /> </a> },
    { id: 4, platform: <a href="https://jsdl.in/RSL-LEC1725205379"><img src="src/assets/images/Justdiel.png" className=' h-12 w-12' /> </a> }
  ];

  return (
    <div className='Socials'>

        <ul className='flex justify-center items-center gap-12 text-white'>
            {socialLinks.map((social) => {
                return <li key={social.id} className='transition-all duration-[400ms] hover:text-yellow-100 hover:scale-90 hover:skew-x-3'>
                    {social.platform}
                </li>
            })}
        </ul>
     
    </div> 
  );
};

export default Socials;
