import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const MessageCompose = () => {
  const { id } = useParams();  // Retrieve the contact ID from the URL
  const [otp] = useState(Math.floor(100000 + Math.random() * 900000));
  const [message, setMessage] = useState(`Hi. Your OTP is: ${otp}`);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [status, setStatus] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    axios.post('http://localhost:8080/api/send-otp', { contactId: id, message })
      .then((response) => setStatus('Message Sent'))
      .catch((error) => setStatus('Failed to Send Message'));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Compose Message</h1>
      <textarea
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p className="mb-4 text-sm text-gray-600">Current time: {time}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        onClick={handleSend}
      >
        Send
      </button>
      {status && (
        <p className="mt-4 text-green-600">
          {status}
        </p>
      )}
    </div>
  );
};

export default MessageCompose;
