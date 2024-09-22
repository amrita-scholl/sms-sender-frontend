import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MessagesSent = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/sent-messages').then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Messages Sent</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            {msg.contactName} - {msg.time} - OTP: {msg.otp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesSent;
