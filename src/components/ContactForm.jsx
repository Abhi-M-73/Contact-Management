// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', image: null });

    const handleChange = () => { }

    return (
        <div className=" rounded-lg shadow-lg max-w-lg mx-auto">
            <h1 className='text-3xl text-center font-bold text-white mb-5'>Contact Form</h1>
            <div>
                <form className='h-fit p-6 rounded-lg bg-white'>
                <h2 className="text-2xl font-bold mb-4 text-center">Add Contact</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Image</label>
                        <input
                            type="file"
                            className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Save Contact
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
