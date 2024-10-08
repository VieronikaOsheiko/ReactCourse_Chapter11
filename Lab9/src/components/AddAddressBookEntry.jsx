import React, { useState } from 'react';
import Book from '../Book';

const AddAddressBookEntry = ({ onAddContact }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!firstName) newErrors.firstName = 'The first name is required.';
    if (!lastName) newErrors.lastName = 'The last name is required.';
    if (!phone) newErrors.phone = 'The phone number is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const newContact = new Book(Date.now(), firstName, lastName, phone);
      onAddContact(newContact);
      setFirstName('');
      setLastName('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddAddressBookEntry;
