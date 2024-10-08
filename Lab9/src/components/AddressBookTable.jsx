import React from 'react';
import ContactRow from './ContactRow';

const AddressBookTable = ({ contacts, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length === 0 ? (
          <tr>
            <td colSpan="5">No data to display.</td>
          </tr>
        ) : (
          contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default AddressBookTable;
