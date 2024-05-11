import styled from "./Contact.module.css";
import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData)
      const response = await axios.post(
        `https://consultancy-zefr.onrender.com/contact`,
        formData
        );
      alert("Ordered successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        description: "",
      });
    } catch (err) {
      console.error(err.response.data.message);
      alert("Sorry there was an error!");
    }
  };

  return (
    <div id={styled.contact_section}>
      <h1 className={styled.contact_title}>BOOKING</h1>
      <form onSubmit={handleSubmit} className={styled.form}>
        <div className={styled.field}>
          <label htmlFor="name" className={styled.labels}>
            NAME
          </label>
          <input
            title="Enter your name"
            placeholder="Your name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styled.field}>
          <label htmlFor="email" className={styled.labels}>
            EMAIL
          </label>
          <input
            title="Enter your email"
            placeholder="Your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styled.field}>
          <label htmlFor="phone" className={styled.labels}>
            PHONE
          </label>
          <input
            title="Enter your phone number"
            placeholder="Your phone number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styled.field}>
          <label htmlFor="subject" className={styled.labels}>
            PRODUCT
          </label>
          <textarea
            title="10 L - Quantity: 2, 25 L - Quantity: 1"
            placeholder="10 L - Quantity: 2
25 L - Quantity: 1"
            name="subject"
            rows="5"
            value={formData.subject}
            onChange={handleChange}
            className={styled.subject}
            required
          />
        </div>

        <div className={styled.field}>
          <label htmlFor="description" className={styled.labels}>
            ADDRESS
          </label>
          <textarea
            title="Enter your address"
            placeholder="7A/30, Rssr complex,Thirunagar, Yercaud Main Road, Salem, Tamil Nadu 636007, India"
            id="description"
            rows="15"
            name="description"
            onChange={handleChange}
            value={formData.description}
            required
          ></textarea>
        </div>

        <button type="submit">PLACE ORDER</button>
      </form>
    </div>
  );
};

export default Contact;
