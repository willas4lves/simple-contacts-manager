import { useState } from "react";
import ContactItem from "./ContactItem";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert("please fill in your details");
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      phone,
      email,
    };

    addContact(newContact);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        placeholder="NAME"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="PHONE"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
    </div>
  );
};

export default ContactForm;
