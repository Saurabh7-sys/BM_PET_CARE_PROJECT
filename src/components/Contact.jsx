import React from 'react';
import Button from './Button';
import contactUsImg from '../assets/images/contactUs.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <div className="md:h-screen h-[1300px] bg-cover bg-center flex items-center justify-center px-4">
      <div className="main w-full max-w-[1200px] md:h-auto h-[1150px] bg-white bg-opacity-40 rounded-lg shadow-2xl p-6 md:p-8 flex flex-col gap-8 items-center md:items-start md:mt-12">
        <h1 className="text-3xl font-bold text-gray-900 text-center md:text-left">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-2/3">
            <div className="flex-shrink-0">
              <img
                src={contactUsImg}
                alt="Man looking at laptop"
                className="w-80 h-auto"
              />
            </div>

            <div className="flex flex-col gap-6 text-center md:text-left w-full">
              <motion.div 
              variants={fadeIn('right', 0.2, 50)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              
              className="card flex flex-col items-center md:items-start gap-4">
                <h2 className="text-xl font-medium">Get In Touch</h2>
                 <Button
                  bgColor="bg-gray-800"
                  children="Talk to Our Team"
                  className="text-white hover:bg-gray-900"
                />
                
              </motion.div>
              <motion.div 
              variants={fadeIn('left', 0.2, 50)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              
               className="card flex flex-col items-center md:items-start gap-4">
                <h2 className="text-xl font-medium">Need Help with Your Dog?</h2>
                <Button
                  bgColor="bg-gray-800"
                  children="See How We Can Help"
                  className="text-white hover:bg-gray-900"
                />
              </motion.div>
            </div>
          </div>

          <div className=" w-full md:w-1/3 bg-gray-50 bg-opacity-90 rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              FAQs
            </h2>
            <div className="flex flex-col gap-4">
              <motion.div
                variants={fadeIn('up', 0.2, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}

                className="faq-item p-4 rounded-md bg-white shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out">
                <h3 className="font-medium text-lg text-gray-800">
                  What services do you offer?
                </h3>
                <p className="text-gray-600">
                  We provide expert consultation, training services, and support for pet owners.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.3, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}

                className="faq-item p-4 rounded-md bg-white shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out">
                <h3 className="font-medium text-lg text-gray-800">
                  How can I contact your team?
                </h3>
                <p className="text-gray-600">
                  You can use the "Talk to Our Team" button above or email us at
                  support@example.com.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.4, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}

                className="faq-item p-4 rounded-md bg-white shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out">
                <h3 className="font-medium text-lg text-gray-800">
                  Do you offer free consultations?
                </h3>
                <p className="text-gray-600">
                  Yes, our first consultation is free to help understand your needs better.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
