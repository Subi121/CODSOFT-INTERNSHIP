import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Practice = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState('');

    const handleGetContacts = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const fetchedContacts = res.data.map(user => ({ id: user.id, name: user.name }));
                setContacts(fetchedContacts);
                console.log("Fetched contacts: ", fetchedContacts);
            })
            .catch(err => {
                console.error("Error fetching contacts: ", err);
            });
    };

    const handleAddContact = () => {
        if (!newContact) {
            alert("Please enter a contact name");
            return;
        }

        axios.post("https://jsonplaceholder.typicode.com/users", { name: newContact })
            .then(res => {
                console.log("Added contact: ", res.data);
                // Add new contact locally
                setContacts(prevContacts => [...prevContacts, { id: res.data.id || Date.now(), name: newContact }]);
                setNewContact('');
            })
            .catch(err => {
                console.error("Error adding contact: ", err);
            });
    };

    useEffect(() => {
        handleGetContacts(); // Fetch contacts on component mount
    }, []);

    return (
        <div>
            <h1>Contact Management</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter new contact name"
                    value={newContact}
                    onChange={(e) => setNewContact(e.target.value)}
                />
                <button onClick={handleAddContact}>Post</button>
            </div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Practice;

