import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Pagination from "./components/Pagination";

function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
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
    const filterContact = contacts.filter(contact => contact.id !== id);
    setContacts(filterContact);
  };

  const contactsPerPage = 20;
  const currentContacts = contacts.slice((currentPage - 1) * contactsPerPage, currentPage * contactsPerPage);
  const totalPages = Math.ceil(contacts.length / contactsPerPage);



  return (
    <div className="flex md:flex-row flex-col justify-center min-h-screen w-screen bg-gray-900">
      <div className="md:w-[25%] bg-gray-700 w-full p-5">
        <ContactForm editingContact={editingContact} addOrUpdateContact={addOrUpdateContact} />
      </div>
      <div className="md:w-[75%] w-full p-3 flex flex-col items-center justify-between">
        <ContactList handleEdit={handleEdit} handleDelete={handleDelete} contacts={currentContacts} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}  />
      </div>

    </div>
  );
}

export default App;
