import React, { useState } from 'react';
import { FaAlignRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';  
import Button from './Button';
import Socials from './Socials';

const LandingNavbar = () => {
    const navList = [
        { id: 1, link: "Home", target: "home" },
        { id: 2, link: "Services", target: "services" },
        { id: 3, link: "Contact", target: "contact" },
        { id: 4, link: "About us", target: "about" }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();  

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); 
    };

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <nav className="sticky top-0 z-10 max-w-full flex justify-between items-center bg-sangGreen h-20 rounded-bl-3xl rounded-br-3xl">
            <div className="logo flex justify-between items-center w-full md:w-auto">
                <img className="h-24 w-24 ml-5 mb-2" src="src/assets/images/LogoBm.png" alt="logo" />
                {isOpen ? 
                    <ImCross onClick={toggle} className="md:hidden text-white text-2xl mr-7" /> :
                    <FaAlignRight onClick={toggle} className="md:hidden text-white text-3xl mr-7" />
                }
            </div>

            <ul className="hidden md:flex md:items-center md:justify-center md:gap-20 text-sand text-lg">
                {navList.map((list) => (
                    <li key={list.id} className="font-bold text-xl cursor-pointer transition-all duration-[400ms] hover:text-yellow-100 hover:scale-90 hover:skew-x-3">
                        <button onClick={() => handleScrollToSection(list.target)}>{list.link}</button>
                    </li>
                ))}
            </ul>

            <div className="authButtons hidden md:flex md:items-center md:gap-2 text-sand text-lg mr-2">
                <Button className="px-7" children={"Sign In"} onClick={handleSignIn} />  {/* Updated to use onClick */}
            </div>

            {isOpen && (
                <div className={`z-10 fixed inset-0 top-20 bg-sangGreen md:hidden transition-transform duration-1000 ease-in-out rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <ul className="flex flex-col justify-center items-center w-full gap-10 text-2xl mt-10 text-sand font-bold">
                        {navList.map((responsiveList) => (
                            <li key={responsiveList.id} className="font-bold text-xl cursor-pointer transition-all duration-[400ms] hover:text-yellow-100 hover:scale-90 hover:skew-x-3">
                                <button onClick={() => handleScrollToSection(responsiveList.target)}>{responsiveList.link}</button>
                            </li>
                        ))}
                        <Button className="px-7" children={"Sign In"} onClick={handleSignIn} />  
                    </ul>

                    <Socials />
                </div>
            )}
        </nav>
    );
};

export default LandingNavbar;
