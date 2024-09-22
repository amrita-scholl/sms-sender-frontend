import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/contacts').then((response) => {
      setContacts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`http://localhost:8080/api/contacts/${contact.id}`}>
              {contact.firstName} {contact.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
