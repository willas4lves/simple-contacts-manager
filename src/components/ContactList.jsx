import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p>No contacts added.</p>
      ) : (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            updateContact={updateContact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
