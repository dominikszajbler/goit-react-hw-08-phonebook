import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { fetchContacts, addContact } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';

import 'bulma/css/bulma.min.css'; 
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    const { name, number } = formData;
    if (name && number) {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          number,
        })
      );
      setFormData({
        name: '',
        number: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} className={css.contactForm}>
        <div className="field">
          <label className="label">Name:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Number:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="button is-primary">
          Add Contact
        </button>
        <Filter />
      </form>
    </div>
  );
};

export default ContactForm;