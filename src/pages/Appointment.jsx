import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import formIMG from '../assets/images/formIMG.png'

const Appointment = () => {
  const [dogName, setDogName] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleNameChange = (e) => {
    setDogName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleNumberChange = (value) => {
    setNumber(value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        const data = await response.json();
        setBreeds(data.map((breed) => breed.name));
      } catch (error) {
        console.error('Error fetching breeds', error);
      }
    };
    fetchBreeds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    if (!dogName) {
      newErrors.dogName = "Pet's name is required";
      formIsValid = false;
    }

    if (!age) {
      newErrors.age = "Pet's age is required";
      formIsValid = false;
    }

    if (!number) {
      newErrors.number = 'Parent number is required';
      formIsValid = false;
    }

    if (!dateTime) {
      newErrors.dateTime = 'Date and time are required';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className=" md:h-screen bg-[#FF7F50] flex justify-center items-center px-4 ">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-sand p-6 rounded-lg shadow-lg md:mb-14 m-4">
        <div className="lg:w-1/2 w-full flex justify-center items-center mb-6 lg:mb-0">
          <img
            src={formIMG}
            alt="Pet Appointment"
            className="rounded-lg mr-6 w-full h-full object-cover"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 w-full space-y-6 flex flex-col justify-center items-start"
        >
          <h2 className="text-2xl font-bold text-center">Schedule Your Appointment</h2>

          <label htmlFor="petName" className="block text-sm font-medium text-gray-700">
            Pet's Name:
            <input
              id="petName"
              type="text"
              onChange={handleNameChange}
              value={dogName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.dogName && <p className="text-red-500 text-xs mt-1">{errors.dogName}</p>}
          </label>

          <label htmlFor="breed" className="block text-sm font-medium text-gray-700">
            Pet's Breed:
            <select
              id="breed"
              name="breed"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a breed</option>
              {breeds.map((breed, index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Pet's Age:
            <input
              id="age"
              type="number"
              onChange={handleAgeChange}
              value={age}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
          </label>

          <label htmlFor="parentNumber" className="block text-sm font-medium text-gray-700">
            Parent Number:
            <PhoneInput
              id="parentNumber"
              international
              defaultCountry="IN"
              value={number}
              onChange={handleNumberChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
            />
            {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
          </label>

          <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">
  Date and Time:
  <input
    id="dateTime"
    type="datetime-local"
    onChange={handleDateTimeChange}
    value={dateTime}
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sangGreen focus:outline-none transition duration-200 ease-in-out"
  />
  {errors.dateTime && <p className="text-red-500 text-xs mt-1">{errors.dateTime}</p>}
</label>


          <button
            type="submit"
            className="mt-6 w-full bg-sangGreen text-white py-2 px-4 rounded-md hover:opacity-90 hover:shadow-lg hover:scale-95 transition-all duration-300 focus:outline-none"
          >
            Schedule It
          </button>
        </form>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-12 h-12 mx-auto text-green-500 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.293 4.293a1 1 0 010 1.414L8 13.414l-4-4a1 1 0 111.414-1.414L8 10.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-semibold text-green-600">Appointment Scheduled!</h3>
              <p className="text-gray-600 mt-2">Your appointment has been successfully booked.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Appointment;
