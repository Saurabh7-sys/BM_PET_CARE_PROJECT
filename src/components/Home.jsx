import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useNavigate } from 'react-router-dom';
import HomeDogImage from '../assets/images/bg-img2.png'
import HomePhoneImg from '../assets/images/appointmentDog.png'

const Home = () => {
    const navigate = useNavigate();
    const handleAppoint = () => {
        navigate('/appointment');
    };

    return (
        <div className="relative h-screen flex items-center">
            <img
                className="absolute right-0 top-[-20px] z-[-10] w-[270px] h-72 md:h-[640px] md:w-[700px] md:block hidden"
                src="/src/assets/images/BlobShape.png"
                alt="Blob Shape"
            />

            <img
                className="absolute right-0 top-[98px] z-[-10] hidden md:block h-[20rem] w-60 md:w-[550px] md:h-[40rem]"
                src={HomeDogImage}
                alt="Dog Image Desktop"
            />

            <img
                className="absolute right-[110px] top-[-180px] z-[-10] block md:hidden h-[30rem] mt-9 "
                src={HomePhoneImg}
                alt="Dog Image Mobile"
            />

            <div className="content flex items-center justify-start w-full h-full px-5 md:px-10 relative bottom-10 md:mt-0 mt-28">
                <div className="tagline w-full md:w-[600px] text-left ">
                    <motion.h1
                        variants={fadeIn('up', 0.2, 80)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl md:w-full md:mt-12 md:text-3xl"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-sangGreen to-[#FF7F50] font-bold text-[60px] md:text-[80px] leading-[30px] md:leading-[90px]">
                            Where dogs find their second family
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeIn('up', 0.3, 80)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="mt-5 text-sm md:text-xl"
                    >
                        "Our facility is designed to be a home away from home for your beloved pet. We offer top-notch day care, overnight boarding, professional dog walking, and bathing services—all under one roof."
                    </motion.p>

                    <motion.div
                        variants={fadeIn('up', 0.4, 80)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <Button children="Book Appointment" className="py-3 mt-5" onClick={handleAppoint} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
