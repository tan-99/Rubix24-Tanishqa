import React, { useState } from 'react';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    nationality: '',
    emergencyContact: '',
  });

  const [selectedImage, setSelectedImage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if(file) {
        const reader = new FileReader()
        reader.onload = (event) => {
            setSelectedImage(event.target.result)
        }
        reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">User Registration</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-3xl lg:flex" 
            onSubmit={handleSubmit}
        >
        <div className="lg:w-1/2 pr-4 border-r-2 border-dotted mb-4 lg:mb-0">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Phone
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nationality
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Emergency Contact
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="w-1/2 pl-4 flex flex-col items-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                 Upload Image
                <input
                    className="border-dashed border-2 p-4 rounded-md mt-2"
                    type="file"
                    name="image"
                    // Add onChange handler if needed
                    onChange={handleImageChange}
                    accept="image/*"
                />
            </label>
            {selectedImage && (
                <div className="mb-4">
                    <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="rounded-md max-h-40 max-w-full mb-2"
                    />
                </div>
            )}
            
        </div>
      </form>
        <div className="flex items-center justify-end">
            <button
            type="submit"
            className="bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleSubmit}
            >
            Submit
            </button>
        </div>
    </div>
  );
};

export default UserRegistration;
