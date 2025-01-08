import  Button  from '../../components/Button';
import { useState, useEffect } from 'react';

const HomeBoarding = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [vaccinationCertificate, setVaccinationCertificate] = useState(null);
    const [pickupAddress, setPickupAddress] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [dropAddress, setDropAddress] = useState('');
    const [dropTime, setDropTime] = useState('');
    const [sameAsPickup, setSameAsPickup] = useState(false);
    const [withPickupDrop, setWithPickupDrop] = useState(false);

    useEffect(() => {
        // Ensure the page scrolls to the top on navigation
        window.scrollTo(0, 0);
    }, []);

    const calculatePrice = (start, end) => {
        const startTime = new Date(start);
        const endTime = new Date(end);

        const totalHours = (endTime - startTime) / (1000 * 60 * 60);
        const days = Math.ceil(totalHours / 24);
        const price = days * 800;
        setTotalPrice(price);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVaccinationCertificate(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!vaccinationCertificate) {
            alert("Please upload the vaccination certificate.");
            return;
        }

        if (withPickupDrop) {
            if (!pickupAddress || !pickupTime || !dropAddress || !dropTime) {
                alert("Please provide pickup and drop-off details.");
                return;
            }
        }

        calculatePrice(startDate, endDate);
    };

    const handleSameAsPickupChange = (e) => {
        setSameAsPickup(e.target.checked);
        if (e.target.checked) {
            setDropAddress(pickupAddress);
        } else {
            setDropAddress('');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen  py-16 px-4">
            <div className="max-w-3xl w-full bg-lime-100 shadow-lg rounded-lg p-6">
                <h2 className="text-4xl font-bold mb-6 text-center text-black">Home Boarding</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="start-date" className="block text-lg font-medium text-gray-700">Start Date & Time</label>
                        <input
                            type="datetime-local"
                            id="start-date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="end-date" className="block text-lg font-medium text-gray-700">End Date & Time</label>
                        <input
                            type="datetime-local"
                            id="end-date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="vaccination-certificate" className="block text-lg font-medium text-gray-700">Upload Vaccination Certificate</label>
                        <input
                            type="file"
                            id="vaccination-certificate"
                            onChange={handleFileChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="pickup-drop-option"
                            checked={withPickupDrop}
                            onChange={(e) => setWithPickupDrop(e.target.checked)}
                            className="h-5 w-5 text-black focus:ring focus:ring-orange-300"
                        />
                        <label htmlFor="pickup-drop-option" className="text-lg text-gray-700">Add Pickup & Drop-off Option</label>
                    </div>

                    {withPickupDrop && (
                        <div className="space-y-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <div>
                                <label htmlFor="pickup-address" className="block text-lg font-medium text-gray-700">Pickup Address</label>
                                <input
                                    type="text"
                                    id="pickup-address"
                                    value={pickupAddress}
                                    onChange={(e) => setPickupAddress(e.target.value)}
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="pickup-time" className="block text-lg font-medium text-gray-700">Pickup Time</label>
                                <input
                                    type="datetime-local"
                                    id="pickup-time"
                                    value={pickupTime}
                                    onChange={(e) => setPickupTime(e.target.value)}
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
                                    required
                                />
                            </div>

                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    id="same-as-pickup"
                                    checked={sameAsPickup}
                                    onChange={handleSameAsPickupChange}
                                    className="h-5 w-5 text-black focus:ring focus:ring-orange-300"
                                />
                                <label htmlFor="same-as-pickup" className="text-lg text-gray-700">Same as Pickup Address</label>
                            </div>

                            <div>
                                <label htmlFor="drop-address" className="block text-lg font-medium text-gray-700">Drop-off Address</label>
                                <input
                                    type="text"
                                    id="drop-address"
                                    value={dropAddress}
                                    onChange={(e) => setDropAddress(e.target.value)}
                                    className={`mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300 ${
                                        sameAsPickup ? 'bg-gray-100 cursor-not-allowed' : ''
                                    }`}
                                    required
                                    disabled={sameAsPickup}
                                />
                            </div>

                            <div>
                                <label htmlFor="drop-time" className="block text-lg font-medium text-gray-700">Drop-off Time</label>
                                <input
                                    type="datetime-local"
                                    id="drop-time"
                                    value={dropTime}
                                    onChange={(e) => setDropTime(e.target.value)}
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <Button type="submit" children={"Calculate Charges"} className=' bg-orange-400 hover:bg-orange-200 hover:text-gray-600 w-full px-6 py-3 '/>
                        
                    
                </form>

                {totalPrice > 0 && (
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-green-400">Total Boarding Fee: ₹{totalPrice}</h3>
                    </div>
                )}

                <div className="mt-6 text-center">
                    <Button  children={"Proceed to Payment"} type='submit' className='bg-sangGreen hover:bg-[#a5d2c1] hover:text-gray-600'/>
                        
                    
                </div>
            </div>
        </div>
    );
};

export default HomeBoarding;
