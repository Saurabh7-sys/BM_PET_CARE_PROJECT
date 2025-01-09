import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

const HomeBoarding = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [vaccinationCertificate, setVaccinationCertificate] = useState(null);
  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropAddress, setDropAddress] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [sameAsPickup, setSameAsPickup] = useState(false);
  const [withPickupDrop, setWithPickupDrop] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false); // New state for terms acceptance

  const [showTermsModal, setShowTermsModal] = useState(false); // Modal state

  useEffect(() => {
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

    if (!termsAccepted) {
      alert("Please accept the Terms and Conditions.");
      return; // Prevent form submission unless terms are accepted
    }

    calculatePrice(startDate, endDate);
  };

  const handleSameAsPickupChange = (e) => {
    setSameAsPickup(e.target.checked);
    if (e.target.checked) {
      setDropAddress(pickupAddress);
    } else {
      setDropAddress("");
    }
  };

  const handleOpenModal = () => setShowTermsModal(true);
  const handleCloseModal = () => setShowTermsModal(false);

  return (
    <div className="flex justify-center items-center min-h-screen py-16 px-4">
      <div className="max-w-3xl w-full bg-lime-100 shadow-lg rounded-lg p-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-black">Home Boarding</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Existing Form Fields */}
          <div>
            <label htmlFor="start-date" className="block text-lg font-medium text-gray-700">
              Start Date & Time
            </label>
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
            <label htmlFor="end-date" className="block text-lg font-medium text-gray-700">
              End Date & Time
            </label>
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
            <label htmlFor="vaccination-certificate" className="block text-lg font-medium text-gray-700">
              Upload Vaccination Certificate
            </label>
            <input
              type="file"
              id="vaccination-certificate"
              onChange={handleFileChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
              accept=".pdf, .jpg, .jpeg, .png"
              required
            />
          </div>

          {/* Pickup & Drop Option */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="pickup-drop-option"
              checked={withPickupDrop}
              onChange={(e) => setWithPickupDrop(e.target.checked)}
              className="h-5 w-5 text-black focus:ring focus:ring-orange-300"
            />
            <label htmlFor="pickup-drop-option" className="text-lg text-gray-700">
              Add Pickup & Drop-off Option
            </label>
          </div>

          {withPickupDrop && (
            <div className="space-y-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
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

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="same-as-pickup"
                  checked={sameAsPickup}
                  onChange={handleSameAsPickupChange}
                  className="h-5 w-5 text-black focus:ring focus:ring-orange-300"
                />
                <label htmlFor="same-as-pickup" className="text-lg text-gray-700">
                  Same as Pickup Address
                </label>
              </div>

              <div>
                <label htmlFor="drop-address" className="block text-lg font-medium text-gray-700">
                  Drop-off Address
                </label>
                <input
                  type="text"
                  id="drop-address"
                  value={dropAddress}
                  onChange={(e) => setDropAddress(e.target.value)}
                  className={`mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-orange-300 ${
                    sameAsPickup ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  required
                  disabled={sameAsPickup}
                />
              </div>

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
            </div>
          )}

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="terms-conditions"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="h-5 w-5 text-black focus:ring focus:ring-orange-300"
            />
            <label htmlFor="terms-conditions" className="text-lg text-gray-700">
              I accept the <span className="text-blue-500 cursor-pointer" onClick={handleOpenModal}>Terms and Conditions</span>
            </label>
          </div>

          <Button
            type="submit"
            children={"Calculate Charges"}
            className="bg-orange-400 hover:bg-orange-200 hover:text-gray-600 w-full px-6 py-3"
          />
        </form>

        {totalPrice > 0 && (
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-green-400">Total Boarding Fee: ₹{totalPrice}</h3>
          </div>
        )}

        <div className="mt-6 text-center">
          <Button
            children={"Proceed to Payment"}
            type="button"
            className="bg-sangGreen hover:bg-[#a5d2c1] hover:text-gray-600"
          />
        </div>

        {/* Terms Modal */}
        {showTermsModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[800px] max-h-[90vh] overflow-auto relative">
              <h3 className="text-xl font-semibold text-gray-800">Terms and Conditions</h3>
              <p className="mt-2 text-sm text-gray-600">
              **Terms and Conditions for Home Dog Boarding**

We aim to provide a safe, comfortable, and loving environment for your furry friend. Please review the following terms and conditions carefully before booking:

**1. Health and Vaccination Requirements:**
   - All dogs must be healthy and free from any contagious diseases.
   - A valid vaccination certificate, including vaccinations for rabies, distemper, parvovirus, and other core vaccines, must be provided before boarding.
   - Dogs showing signs of illness, infection, or parasites will not be accepted.

**2. Payment and Booking Policy:**
   - Full payment must be made at the time of booking to confirm your reservation.
   - Payments are non-refundable but can be adjusted for future bookings in case of cancellations made at least 48 hours before the check-in date.

**3. No Free Trials:**
   - We do not offer free trials for dog boarding services.
   - A meet-and-greet can be arranged before booking for you to visit the premises and ensure comfort.

**4. Dog’s Behavior and Health:**
   - Dogs must be non-aggressive and well-socialized with children and other dogs.
   - We reserve the right to refuse boarding if a dog shows aggressive behavior during the stay.

**5. Extended Stays:**
   - Extension of stay can be accommodated based on availability.
   - However, extensions cannot be guaranteed on short notice.

**6. Food and Supplies:**
   - Food and basic supplies will be provided as part of the selected package.
   - If you prefer to provide your dog's food, you are welcome to do so.
   - Clean dog bowls and fresh drinking water will always be available.

**7. Hygiene and Grooming:**
   - Dogs must have trimmed nails before boarding to avoid accidental scratches.
   - Basic grooming can be arranged upon request at an additional charge.

**8. Emergencies and Medical Care:**
   - In case of a medical emergency, we will attempt to contact you immediately.
   - If you are unreachable, we will take the dog to the nearest vet, and medical expenses will be covered by the owner.

**9. Owner’s Responsibility:**
   - The owner must provide accurate information about their dog's health, behavior, and special needs.
   - Owners must provide a valid emergency contact.

**10. Liability:**
   - While every precaution will be taken to ensure your pet’s safety, we cannot be held responsible for unforeseen incidents or natural causes.
   - Boarding is at the owner’s risk.

**11. Drop-off and Pick-up Timings:**
   - Drop-off and pick-up timings must be adhered to as per the agreed schedule.

**12. Agreement:**
   - By booking with us, you acknowledge and agree to all the above terms and conditions.

Thank you for choosing our home boarding service! Your pet’s comfort and safety are our priority.


              </p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeBoarding;
