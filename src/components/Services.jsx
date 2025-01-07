import React, { memo } from 'react';
import HomeBoardingImage from '../assets/images/HomeBoarding.jpg';
import DogWalkImage from '../assets/images/DogWalk.jpg';
import DogBathImage from '../assets/images/DogBath.jpg';
import DogFoodImage from '../assets/images/DogFood.jpg';
import PickupAndDrop from '../assets/images/PickupAndDrop.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../index.css';
import Button from './Button';

const cardData = [
    {
        id: 1,
        image: HomeBoardingImage,
        title: "Home Boarding",
        description: "Your dog becomes part of our family, staying in a comfortable, cage-free environment with all the love and care of a real home."
    },
    {
        id: 2,
        image: DogWalkImage,
        title: "Daily Dog Walker",
        description: "Need a regular walker? We offer reliable daily walks to keep your dog active and happy, tailored to fit your schedule."
    },
    {
        id: 3,
        image: PickupAndDrop,
        title: "Pick-Up & Drop-Off",
        description: "Simplify your pet's stay with our pick-up and drop-off service, ensuring a smooth and easy transition to and from our boarding facility."
    },
    {
        id: 4,
        image: DogFoodImage,
        title: "Homemade Dog Food",
        description: "Treat your pet to nutritious, homemade meals prepared with love. We provide wholesome, tailored meals to keep your dog healthy and happy."
    },
    {
        id: 5,
        image: DogBathImage,
        title: "PawSpa",
        description: "PawSpa offers a luxurious bath experience for dogs, ensuring they leave clean, refreshed, and pampered with a tail wag."
    }
];

const Card = memo(({ card }) => (
    <div key={card.id} className="p-4">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col" style={{ height: '450px', width: '100%' }}>
            <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
            />
            <div className="flex flex-col flex-grow p-4">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{card.description}</p>
                <Button className="bg-orange-500 text-white hover:bg-orange-600 transition duration-300 mt-auto py-2 px-4" children={"Book Now"} />
            </div>
        </div>
    </div>
));

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className=" h-screen p-6 flex justify-center items-center bg-[#FF7F50]">
            <div className="w-full max-w-[1200px]">
            <h2 className="text-3xl font-bold text-center mb-6 text-black">Services</h2>

                <Slider {...settings}>
                    {cardData.map(card => (
                        <Card card={card} key={card.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Services;
