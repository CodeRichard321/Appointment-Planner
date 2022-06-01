import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select name="contacts" onChange={onChange}>
      <option value={{}}>No contact selected</option>
      {contacts.map((contact, index) => <option key={index} value={contact.name}>{contact.name}</option>)}
    </select>
  );
};
