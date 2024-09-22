import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ContactInfo = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/contacts/${id}`).then((response) => {
      setContact(response.data);
    });
  }, [id]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p>Phone: {contact.phone}</p>
      <Link to={`http://localhost:8080/compose-message/${id}`}>
        <button>Send Message</button>
      </Link>
    </div>
  );
};

export default ContactInfo;
