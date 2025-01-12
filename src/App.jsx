import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="flex md:flex-row flex-col justify-center min-h-screen w-screen bg-gray-800">
      <div className="md:w-[25%] w-full p-3">
        <ContactForm />
      </div>
      <div className="md:w-[70%] w-full p-3 flex flex-col items-center justify-between">
        <ContactList />
        <Pagination />
      </div>

    </div>
  );
}

export default App;
