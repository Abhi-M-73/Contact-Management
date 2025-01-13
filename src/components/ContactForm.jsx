import axios from 'axios';
import { useEffect, useState } from 'react';

const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_URL;
const cloudinaryPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

const ContactForm = ({ addOrUpdateContact, editingContact }) => {
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '', image: null });
  const [isUploading, setIsUploading] = useState(false); // Track image upload status

  useEffect(() => {
    if (editingContact) {
      setNewContact(editingContact);
    }
  }, [editingContact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryPreset);

    setIsUploading(true); // Start upload loading

    try {
      const { data } = await axios.post(cloudinaryUrl, formData);
      setNewContact({ ...newContact, image: data.secure_url });
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false); // End upload loading
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateContact(newContact);
    setNewContact({ name: '', email: '', phone: '', image: null });
  };
 
  return (
    <div className="rounded-lg shadow-lg max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold text-white mb-5">Contact Form</h1>
      <div>
        <form onSubmit={handleSubmit} className="h-fit p-6 rounded-lg bg-white">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {editingContact ? 'Edit Contact' : 'Add Contact'}
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              onChange={handleInputChange}
              value={newContact.name}
              name="name"
              type="text"
              placeholder="Enter name"
              className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              onChange={handleInputChange}
              value={newContact.email}
              name="email"
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              onChange={handleInputChange}
              value={newContact.phone}
              name="phone"
              type="text"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Image</label>
            <input
              onChange={handleImageUpload}
              name="image"
              type="file"
              className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
            {isUploading && <p className="text-red-500 mb-2 mt-1">Image is uploading, please wait...</p>}
            {newContact.image && !isUploading && <p className="text-green-500 mb-2 mt-1">Uploading Successfull.</p>}
          </div>
          
          <button
            type="submit"
            className={`w-full text-white py-2 px-4 rounded-lg ${
              isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={isUploading}
          >
            {editingContact ? 'Update Contact' : 'Save Contact'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
