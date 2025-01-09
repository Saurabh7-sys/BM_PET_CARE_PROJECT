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
  const [regularWalker, setRegularWalker] = useState(false);
  const [temporaryWalker, setTemporaryWalker] = useState(false);
  const [frequency, setFrequency] = useState('1');
  const [timePreference, setTimePreference] = useState('morning');
  const [days, setDays] = useState(1);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

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
      if (!days) {
        newErrors.days = 'Number of days is required for temporary walking';
        formIsValid = false;
      }
    }

    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
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

  const handleRegularWalkerChange = (e) => {
    if (e.target.checked) {
      setRegularWalker(true);
      setTemporaryWalker(false);
    } else {
      setRegularWalker(false);
    }
  };

  const handleTemporaryWalkerChange = (e) => {
    if (e.target.checked) {
      setTemporaryWalker(true);
      setRegularWalker(false);
    } else {
      setTemporaryWalker(false);
    }
  };

  const closeModal = () => {
    setShowTermsModal(false);
  };

  const openModal = () => {
    setShowTermsModal(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

            <div className="flex items-center space-x-4">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={regularWalker}
                  onChange={handleRegularWalkerChange}
                  className="mr-2"
                />
                Regular Walker
              </label>

              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={temporaryWalker}
                  onChange={handleTemporaryWalkerChange}
                  className="mr-2"
                />
                Temporary Walker
              </label>
            </div>

            {temporaryWalker && (
              <label className="block text-sm font-medium text-gray-700">
                Number of Days:
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.days && <p className="text-red-500 text-xs mt-1">{errors.days}</p>}
              </label>
            )}

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="rounded border-gray-300 text-sangGreen focus:ring-2 focus:ring-sangGreen"
              />
              <span className="text-sm">
                I agree to the{' '}
                <a
                  href="#terms"
                  className="text-blue-600 underline"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                >
                  Terms and Conditions
                </a>
              </span>
            </div>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-sangGreen text-white py-2 px-4 rounded-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
            disabled={!agreeTerms}
          >
            Confirm Walker
          </button>
        </form>

        {showTermsModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full">
              <h3 className="text-xl font-semibold text-gray-800">Terms and Conditions</h3>
              <p className="mt-2 text-sm text-gray-600">
                {`Terms and Conditions for Dog Walking Services
For Regular Walkers
Regular dog walking services are provided with the following terms:

Schedule:

Walks are scheduled six days a week (Monday to Saturday).
Sundays are excluded by default. However, if you wish to include Sunday walks, additional charges will apply.
Payment Terms:

Payment for regular walking services is to be made on a monthly basis at the start of the service period.
Changes to Timing or Frequency:

You may request changes to walking timings or frequency.
While we will try our best to accommodate these requests, immediate adjustments cannot be guaranteed and depend on the availability of walkers.
Cancellation or Service Disruption:

Once the service begins, it cannot be delayed, paused, or canceled without prior notice.
In the event of failure to adhere to payment terms or abrupt cancellations, we may be required to take legal action to resolve the matter.
Pet’s Health and Behavior:

It is essential that pet owners disclose any health conditions or behavioral issues their pet may have before the service begins. This information helps ensure the pet's safety and a smooth walking experience.
Weather Policy:

In case of extreme weather conditions (such as heavy rain or intense heat), walks may be rescheduled, shortened, or canceled for the safety of your pet.
Owner’s Responsibilities:

Pet owners must provide the necessary accessories for walks, including a leash, harness, and waste bags, unless agreed otherwise beforehand.
For Temporary Walkers
Temporary dog walking services are designed for short-term needs with the following conditions:

Payment Terms:

Payment for temporary walks must be made in advance, prior to the start of the service.
Flexibility in Scheduling:

You can request changes to the walking schedule, frequency, or days.
While we will do our best to accommodate these requests, adjustments are subject to walker availability and cannot be guaranteed on short notice.
We request at least 24-48 hours' notice for any schedule changes to minimize confusion.
Cancellation Policy:

Once two walks have been completed, the service cannot be canceled, and no refunds will be issued for those walks.
If you decide not to continue after the first two walks, the cost of those walks will be deducted from your payment, and the remaining amount will be refunded.
Pet’s Health and Behavior:

Pet owners are required to disclose any health conditions or behavioral concerns prior to the service to ensure the safety of both the walker and the pet.
Emergency Contact Information:

Owners must provide emergency contact details and the pet’s veterinarian information to handle any unexpected situations during the walks.
Weather Policy:

For your pet’s safety, walks may be rescheduled, shortened, or canceled in extreme weather conditions such as storms or high heat.
General Policies and Liability
Safety and Well-Being:

The safety, comfort, and well-being of your pet are our top priorities.
Liability Limitations:

While every precaution is taken to ensure a safe experience for your pet, we are not responsible for unforeseen incidents that are beyond our control.
Feedback and Communication:

We value your feedback and encourage you to share any concerns or suggestions. Open communication helps us improve our services and provide the best possible care for your pet.`}
                Terms and Conditions for Dog Walking Services...
              </p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

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
                  Confirmed Walker!
                </h3>
                <p className="text-gray-600 mt-2">
                  Your Walker has been successfully booked.
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
