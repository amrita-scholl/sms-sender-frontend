import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactInfo from './components/ContactInfo';
import ContactList from './components/ContactList';
import MessageCompose from './components/MessageCompose';
import MessagesSent from './components/MessagesSent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactInfo />} />
        <Route path="/compose-message/:id" element={<MessageCompose />} />
        <Route path="/messages-sent" element={<MessagesSent />} />
      </Routes>
    </Router>
  );
}

export default App;
