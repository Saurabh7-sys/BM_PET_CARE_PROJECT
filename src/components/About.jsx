import React from 'react';
import missionPng from '../assets/images/mission.png'
import foundPng from '../assets/images/foundingStory.png'
import foundPng2 from '../assets/images/found2.png'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  return (
    <div className="  px-8 py-12 flex items-center justify-center flex-col bg-[#FF7F50]">
                    <h2 className=" md:mt-10 text-3xl font-bold text-center mb-6 text-black">About us</h2>

      <section className="text-center md:flex items-center gap-8 mb-16">
        <div className="flex justify-center mb-8 md:mb-0">
          <motion.img
            variants={fadeIn('right', 0.2, 60)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}


            src={missionPng}
            alt="Mission Illustration"
            className="w-96 h-auto bg-white bg-opacity-70 rounded-lg shadow-2xl mt-11"
          />
        </div>
        <div>
          <motion.h2
            variants={fadeIn('down', 0.2, 50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-bold mb-4">Mission</motion.h2>
          <motion.p
            variants={fadeIn('down', 0.3, 50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }} 
          
          className="text-gray-100 text-lg  md:w-[700px] mt-11">

            "Our mission is to provide loving, cage-free pet care services that prioritize comfort, health, and happiness, ensuring pets feel like family while their owners are away."
          </motion.p>
        </div>
      </section>

      <section className="text-center flex ">
        <div>
          <motion.h2 
          variants={fadeIn('up', 0.2, 50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          
          className="text-4xl font-bold mb-4">Founding Story</motion.h2>

          <motion.p 
            variants={fadeIn('up', 0.3, 50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          
          className="text-gray-100 text-lg max-w-4xl mx-auto mb-8 mr-7 mt-11">
            "Our journey began with a simple idea: to create a pet care service that goes beyond just providing basic needs. As pet lovers ourselves, we noticed how hard it was to find trustworthy care that truly treated pets like family. With this in mind, we decided to offer a warm, home-based environment where pets could stay in a family setting, free from cages, and receive the attention and care they deserve. Our passion for animals and dedication to their well-being have driven us to expand our services, including dog bathing, walking, and homemade meals, all designed to ensure pets are happy, healthy, and comfortable."
          </motion.p>
        </div>
        <div className="flex justify-center gap-8 flex-col md:flex-wrap">
          <motion.img
            variants={fadeIn('left', 0.2, 50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src={foundPng}
            alt="Overdraft Illustration"
            className="w-80 h-auto hidden md:block bg-white bg-opacity-70 rounded-lg shadow-2xl "
          />
          {/* <img
            src={foundPng2}
            alt="Team Illustration"
            className="w-80 h-auto"
          /> */}
        </div>
      </section>
    </div>
  );
};

export default About;
