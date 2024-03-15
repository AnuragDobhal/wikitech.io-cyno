"use client"
import { useState } from "react";
import Image from "next/image";
import ContactImg from "../../public/contact.jpg";
import styles from "./contact.module.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
<div>

    <div className={styles.heading}>
      <h1>Contact Us</h1>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={ContactImg}
            alt="Contact Image"
            className={styles.image}
            width={500}
            height={500}
          />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </label>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>

    </div>
  );
};

export default ContactForm;
