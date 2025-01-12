// ContactList.jsx
import React from 'react';

const ContactList = () => {
    const dummyContacts = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phone: '123-456-7890',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '987-654-3210',
            image: 'https://via.placeholder.com/150',
        },
    ];


    return (
        <div className="rounded-lg shadow-lg mx-auto">
            <h2 className="text-3xl text-white font-bold mb-6 text-center">Contact List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                {dummyContacts.map((contact) => (
                    <div
                        key={contact.id}
                        className="bg-white p-5 border border-gray-300 rounded-lg shadow-sm"
                    >
                        <div className='flex items-center space-x-3'>
                            <img
                                src={contact.image}
                                alt={contact.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-lg font-medium">{contact.name}</h3>
                                <p className="text-sm text-gray-600">{contact.email}</p>
                                <p className="text-sm text-gray-600">{contact.phone}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <button type="submit" className="w-fit bg-indigo-500 text-white py-1 px-6 rounded hover:bg-indigo-600">Edit</button>
                            <button type="submit" className="w-fit bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;
