import { useState } from "react";

const ContactItem = ({ contact, updateContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contact });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateContact(editedContact);
    setIsEditing(false);
  };

  return (
    <div className="contact-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedContact.name}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />
          <input
            type="tel"
            value={editedContact.phone}
            onChange={(e) =>
              setEditedContact({ ...editedContact, phone: e.target.value })
            }
          />
          <input
            type="email"
            value={editedContact.email}
            onChange={(e) =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
          />
          <button onClick={handleSave}>SAVE</button>
        </>
      ) : (
        <>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <button onClick={handleEdit}>edit</button>
        </>
      )}
      <button onClick={() => deleteContact(contact.id)}>delete</button>
    </div>
  );
};

export default ContactItem;
