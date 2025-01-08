import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const DogWalker = () => {
  const [dogName, setDogName] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [age, setAge] = useState('');
  const [behavior, setBehavior] = useState('');
  const [number, setNumber] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [temporaryWalker, setTemporaryWalker] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [frequency, setFrequency] = useState('1');
  const [timePreference, setTimePreference] = useState('morning');

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
    if (temporaryWalker) {
      if (!startDate) {
        newErrors.startDate = 'Start date is required for temporary walking';
        formIsValid = false;
      }
      if (!startTime) {
        newErrors.startTime = 'Start time is required for temporary walking';
        formIsValid = false;
      }
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
    <div className="min-h-screen bg-[#FF7F50] flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Book A Walker</h2>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Pet's Name:
              <input
                type="text"
                value={dogName}
                onChange={(e) => setDogName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.dogName && <p className="text-red-500 text-xs mt-1">{errors.dogName}</p>}
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Pet's Breed:
              <select
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

            <label className="block text-sm font-medium text-gray-700">
              Pet's Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Dog's Behavior:
              <select
                value={behavior}
                onChange={(e) => setBehavior(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select behavior</option>
                <option value="Aggressive">Aggressive</option>
                <option value="Calm">Calm</option>
                <option value="Playful">Playful</option>
              </select>
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Parent Number:
              <PhoneInput
                international
                defaultCountry="IN"
                value={number}
                onChange={(value) => setNumber(value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
              {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Starting Date and Time:
              <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              {errors.dateTime && <p className="text-red-500 text-xs mt-1">{errors.dateTime}</p>}
            </label>

            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={temporaryWalker}
                onChange={(e) => setTemporaryWalker(e.target.checked)}
                className="rounded border-gray-300 text-sangGreen focus:ring-2 focus:ring-sangGreen"
              />
              <span>Temporary Walker</span>
            </label>

            {temporaryWalker && (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Start Date:
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>
                  )}
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Start Time:
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.startTime && (
                    <p className="text-red-500 text-xs mt-1">{errors.startTime}</p>
                  )}
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Frequency:
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="1">1 time a day</option>
                    <option value="2">2 times a day</option>
                  </select>
                </label>

                {frequency === '1' && (
                  <label className="block text-sm font-medium text-gray-700">
                    Time Preference:
                    <select
                      value={timePreference}
                      onChange={(e) => setTimePreference(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="morning">Morning</option>
                      <option value="evening">Evening</option>
                    </select>
                  </label>
                )}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-sangGreen text-white py-2 px-4 rounded-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
          >
            Schedule It
          </button>
        </form>

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
                <h3 className="text-xl font-semibold text-green-600">
                  Appointment Scheduled!
                </h3>
                <p className="text-gray-600 mt-2">
                  Your appointment has been successfully booked.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DogWalker;
