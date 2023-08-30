import React from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import './ContactList.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <ul className="columns is-multiline">
        {filteredContacts.map(contact => (
          <li key={contact.id} className="column is-one-third">
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};