import React, { useState } from "react";

function EventRegistrationForm({ eventId }) {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        phone_number: "",
        event_id: eventId,
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
            const response = await fetch(
                "http://localhost:8080/events/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="user_name">Name:</label>
                <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="user_email">Email:</label>
                <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="phone_number">Phone Number:</label>
                <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    pattern="\d{3}-\d{3}-\d{4}"
                    required
                />
                <small>Format: XXX-XXX-XXXX</small>
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default EventRegistrationForm;
