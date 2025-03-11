import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors when typing
  };

  const validateForm = () => {
    let newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Only letters and spaces are allowed";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Thank you for reaching out! We will get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> Ultimatetourguide4@gmail.com</p>
          <p><strong>Phone:</strong> +91 81280 70702</p>
          <p><strong>Address:</strong> Silver Oak University, Opp Bhavik Publication, Sola - Bhagvat, 380060</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch with Us</h2>
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <div className="error">{errors.name}</div>}

            <label>Your Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}

            <label>Your Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <div className="error">{errors.phone}</div>}

            <label>Your Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <div className="error">{errors.message}</div>}

            <button type="submit">Send Message</button>
            {successMessage && <div className="success">{successMessage}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
