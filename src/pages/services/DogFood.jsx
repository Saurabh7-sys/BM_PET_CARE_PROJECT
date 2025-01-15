import React, { useState } from 'react';

const DogFood = () => {
  // State for allergy form
  const [dogName, setDogName] = useState('');
  const [age, setAge] = useState('');
  const [allergies, setAllergies] = useState({
    chicken: false,
    beef: false,
    dairy: false,
    grains: false,
  });
  const [preferences, setPreferences] = useState([]);

  // State for cart
  const [cart, setCart] = useState([]);

  // Dog food menu items with pricing in Rupees
  const foodItems = [
    { name: 'Chicken Meal', description: 'Healthy chicken-based food.', price: 500 }, // Price in Rupees
    { name: 'Beef Meal', description: 'Nutritious beef meal for your dog.', price: 600 },
    { name: 'Vegetarian Meal', description: 'Grain-free vegetarian food.', price: 400 },
  ];

  // Handle allergy form changes
  const handleAllergyChange = (e) => {
    const { name, checked } = e.target;
    setAllergies(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePreferenceChange = (e) => {
    const { value } = e.target;
    setPreferences((prev) =>
      prev.includes(value) ? prev.filter((pref) => pref !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission or filtering food items based on allergies
    console.log({ dogName, age, allergies, preferences });
  };

  // Add food to cart
  const addToCart = (food) => {
    setCart((prev) => [...prev, food]);
  };

  // Remove food from cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1); // Remove the item at the given index
    setCart(newCart);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Homemade Dog Food</h1>

      {/* Allergy & Preference Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tell Us About Your Dog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium">Dog's Name:</label>
            <input
              type="text"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter dog's name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Dog's Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter dog's age"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Allergies:</label>
            <div className="flex space-x-4">
              {['chicken', 'beef', 'dairy', 'grains'].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={item}
                    checked={allergies[item]}
                    onChange={handleAllergyChange}
                    className="h-5 w-5"
                  />
                  <span className="text-lg capitalize">{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Preferences (Optional):</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="grain-free"
                  checked={preferences.includes('grain-free')}
                  onChange={handlePreferenceChange}
                  className="h-5 w-5"
                />
                <span className="text-lg">Grain-Free</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="high-protein"
                  checked={preferences.includes('high-protein')}
                  onChange={handlePreferenceChange}
                  className="h-5 w-5"
                />
                <span className="text-lg">High Protein</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Dog Food Menu */}
      <h2 className="text-2xl font-semibold mb-6">Dog Food Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((food) => (
          <div
            key={food.name}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold">{food.name}</h3>
            <p className="text-gray-700 my-2">{food.description}</p>
            <p className="font-semibold text-lg">₹{food.price}</p> {/* Price in Rupees */}
            <button
              onClick={() => addToCart(food)}
              className="mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      {cart.length > 0 && (
        <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-2 border-b border-gray-300">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600 hover:text-red-700 transition duration-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <span className="text-xl font-semibold">
              Total: ₹{cart.reduce((total, item) => total + item.price, 0)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogFood;
