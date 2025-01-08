import React from 'react';
import { useParams } from 'react-router-dom';
import {cardData} from '../../components/Services'; 

const ServiceDetail = () => {
    const { id } = useParams();
    const service = cardData.find(item => item.id === parseInt(id));

    if (!service) {
        return <div>Service not found!</div>;
    }

    return (
        <div className="p-6 bg-[#FF7F50] min-h-screen flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                <p className="text-gray-700">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;
