import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Pagination from "./components/Pagination";

function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1 555-123-4567",
      image: "https://via.placeholder.com/100?text=John"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+1 555-987-6543",
      image: "https://via.placeholder.com/100?text=Jane"
    },
    {
      id: 3,
      name: "Alex Johnson",
      email: "alexjohnson@example.com",
      phone: "+1 555-456-7890",
      image: "https://via.placeholder.com/100?text=Alex"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emilydavis@example.com",
      phone: "+1 555-321-6548",
      image: "https://via.placeholder.com/100?text=Emily"
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      phone: "+1 555-654-3212",
      image: "https://via.placeholder.com/100?text=Michael"
    },
    {
      id: 6,
      name: "Sarah Wilson",
      email: "sarahwilson@example.com",
      phone: "+1 555-741-8529",
      image: "https://via.placeholder.com/100?text=Sarah"
    },
    {
      id: 7,
      name: "David Miller",
      email: "davidmiller@example.com",
      phone: "+1 555-963-2587",
      image: "https://via.placeholder.com/100?text=David"
    },
    {
      id: 8,
      name: "Laura Taylor",
      email: "laurataylor@example.com",
      phone: "+1 555-852-9631",
      image: "https://via.placeholder.com/100?text=Laura"
    },
    {
      id: 9,
      name: "Chris Anderson",
      email: "chrisanderson@example.com",
      phone: "+1 555-147-2583",
      image: "https://via.placeholder.com/100?text=Chris"
    },
    {
      id: 10,
      name: "Olivia Martinez",
      email: "oliviamartinez@example.com",
      phone: "+1 555-369-1470",
      image: "https://via.placeholder.com/100?text=Olivia"
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addOrUpdateContact = (newContact) => {
    if (editingContact) {
      const updatedContacts = contacts.map(contact =>
        contact.id === editingContact.id ? { ...contact, ...newContact } : contact
      );
      setContacts(updatedContacts);
    } else {
      setContacts([...contacts, { ...newContact, id: Date.now() }]);
    }
    setEditingContact(null);
  };

  const handleEdit = (id) => {
    const contact = contacts.find(c => c.id === id);
    setEditingContact(contact);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const contactsPerPage = 20;
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const totalPages = Math.ceil(contacts.length / contactsPerPage);

  return (
    <div className="flex md:flex-row flex-col justify-center min-h-screen w-screen bg-gray-900">
      <div className="md:w-[25%] bg-gray-700 w-full p-5">
        <ContactForm editingContact={editingContact} addOrUpdateContact={addOrUpdateContact} />
      </div>
      <div className="md:w-[75%] w-full p-3 flex flex-col items-center justify-between">
        <ContactList handleEdit={handleEdit} handleDelete={handleDelete} contacts={currentContacts} />
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>

    </div>
  );
}

export default App;
