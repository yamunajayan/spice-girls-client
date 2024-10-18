import React, { useState } from "react";
import "./EventRegistrationForm.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventRegistrationForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone_number: "",
    event_id: Number(id),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.user_email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber(formData.phone_number)) {
      alert("Please enter a valid phone number (format: XXX-XXX-XXXX).");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/events/register",
        formData
      );

      if (response.status === 201) {
        alert("Registration successful!");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form__header">
        Thank you for your interest in this event!
      </h2>
      <p className="form__body">
        Fill out this form to complete your registration
      </p>
      <div className="form__field">
        <label htmlFor="user_name" className="form__field--label">
          Name:
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          value={formData.user_name}
          placeholder="Name"
          onChange={handleChange}
          className="form__field--input"
          required
        />
      </div>
      <div className="form__field">
        <label htmlFor="user_email" className="form__field--label">
          Email:
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          value={formData.user_email}
          placeholder="janedoe@email.com"
          onChange={handleChange}
          className="form__field--input"
          required
        />
      </div>
      <div className="form__field">
        <label htmlFor="phone_number" className="form__field--label">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          placeholder="XXX-XXX-XXXX"
          onChange={handleChange}
          className="form__field--input"
          pattern="\d{3}-\d{3}-\d{4}"
          required
        />
      </div>
      <button type="submit" className="form__button">
        Register
      </button>
    </form>
  );
}

export default EventRegistrationForm;
