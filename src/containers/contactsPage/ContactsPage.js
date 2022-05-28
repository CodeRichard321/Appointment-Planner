import React, { useState, useEffect } from "react";
//import { useEffect } from "react/cjs/react.production.min"; // Uncomment for production
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (duplicate) {
      return;
    } else {
      // Add contact
      addContact(name.trim(), phone.trim(), email.trim());

      // Clear form
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts.find(c => c.name === name.trim())) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} />
        {(duplicate ? <p>Name already exists.</p> : '')}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
