import React from 'react';

const PawSpa = () => {
    const packages = [
        { name: 'Just Spa', price: ' ₹1200' },
        { name: 'Spa + Hair Cut', price: ' ₹1500' },
        { name: 'Spa + Hair Cut + Nails Cut', price: ' ₹2000' }
    ];

    return (
        <div className="p-8 bg-sage min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Paw Spa Packages</h1>
            <div className="grid gap-6 md:grid-cols-3">
                {packages.map((pkg, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
                        <p className="text-lg font-medium text-gray-700">Price: {pkg.price}</p>
                        <button className="mt-4 w-full bg-sangGreen text-white font-bold py-2 px-4 rounded hover:bg-lime-900 transition duration-300">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PawSpa;
