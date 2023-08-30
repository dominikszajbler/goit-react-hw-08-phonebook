import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import  './ContactListItem.css';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className="box">
      <div className="contactDetails">
        <p>
          <strong>{contact.name}</strong>
        </p>
        <p>{contact.number}</p>
      </div>
      <button
        className="button is-danger"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};