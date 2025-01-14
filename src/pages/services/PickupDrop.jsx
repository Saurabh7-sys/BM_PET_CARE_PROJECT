import React, { useState } from 'react';

const PickupDrop = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropAddress, setDropAddress] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [sameAsPickup, setSameAsPickup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickupAddress || !pickupTime || !dropAddress || !dropTime) {
      alert("Please provide pickup and drop-off details.");
      return;
    }
    // Handle form submission logic here
  };

  const handleSameAsPickupChange = (e) => {
    setSameAsPickup(e.target.checked);
    if (e.target.checked) {
      setDropAddress(pickupAddress); // Set drop address to pickup address if checkbox is checked
    } else {
      setDropAddress(""); // Clear drop address if unchecked
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Pickup & Drop-off Details</h2>

        <div className="space-y-4">
          {/* Pickup Address */}
          <div>
            <label htmlFor="pickup-address" className="block text-lg font-medium text-gray-700">
              Pickup Address
            </label>
            <input
              type="text"
              id="pickup-address"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
              required
            />
          </div>

          {/* Pickup Time */}
          <div>
            <label htmlFor="pickup-time" className="block text-lg font-medium text-gray-700">
              Pickup Time
            </label>
            <input
              type="datetime-local"
              id="pickup-time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
              required
            />
          </div>

          {/* Checkbox for Same as Pickup Address */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="same-as-pickup"
              checked={sameAsPickup}
              onChange={handleSameAsPickupChange}
              className="h-5 w-5 text-black focus:ring focus:ring-orange-300"
            />
            <label htmlFor="same-as-pickup" className="text-lg text-gray-700">
              Drop-off address same as pickup address
            </label>
          </div>

          {/* Drop-off Address */}
          <div>
            <label htmlFor="drop-address" className="block text-lg font-medium text-gray-700">
              Drop-off Address
            </label>
            <input
              type="text"
              id="drop-address"
              value={dropAddress}
              onChange={(e) => setDropAddress(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
              required
              disabled={sameAsPickup} // Disable the field if checkbox is checked
            />
          </div>

          {/* Drop-off Time */}
          <div>
            <label htmlFor="drop-time" className="block text-lg font-medium text-gray-700">
              Drop-off Time
            </label>
            <input
              type="datetime-local"
              id="drop-time"
              value={dropTime}
              onChange={(e) => setDropTime(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PickupDrop;
