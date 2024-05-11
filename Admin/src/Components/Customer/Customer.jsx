// src/AdminPortal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Customer.css'
import moment from 'moment';

const AdminPortal = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`https://consultancy-zefr.onrender.com/contacts`);
                setContacts(response.data);
            } catch (err) {
                console.error(err.response.data.message);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="admin-container">
            <h2>Admin Portal</h2>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Order</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact._id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{moment(contact.date).format('DD-MM-YYYY')}</td>
                            <td>{contact.subject}</td>
                            <td>{contact.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPortal;