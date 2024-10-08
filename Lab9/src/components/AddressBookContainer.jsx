import React, { useState } from 'react';
import AddAddressBookEntry from './AddAddressBookEntry';
import AddressBookTable from './AddressBookTable';
import SearchInput from './SearchInput';
import Book from "./Book";

const AddressBookContainer = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleEditContact = (id, updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, ...updatedContact } : contact
    );
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AddAddressBookEntry onAddContact={handleAddContact} />
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AddressBookTable
        contacts={filteredContacts}
        onDelete={handleDeleteContact}
        onEdit={handleEditContact}
      />
    </div>
  );
};

export default AddressBookContainer;
