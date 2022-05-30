import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = e => setName(e.target.value);

  const handlePhoneChange = e => setPhone(e.target.value);

  const handleEmailChange = e => setEmail(e.target.value);

  return (
    <form onSubmit={handleSubmit} role='form'>
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />
      <label>Phone Number</label>
      <input type="tel" name="phone" value={phone} onChange={handlePhoneChange} pattern={"[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"} />
      <label>Email</label>
      <input type="email" name="email" value={email} onChange={handleEmailChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};
