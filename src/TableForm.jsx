import React, { useState } from 'react';

// CSS styles defined as a template literal
const styles = `
.textCenter { text-align: center; }
.inputContent { margin: auto; width: 50%; display: flex; flex-direction: column; align-items: center; }
.txtLeft { text-align: left; width: 100%; }
.btn { padding: 10px; margin-top: 10px; cursor: pointer; }
.error { color: red; padding-top: 10px; text-align: center; }
.contactSummary { margin-top: 20px; width: 100%; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ddd; padding: 8px; }
`;

function TableForm() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', mobile: '', email: '' });
  const [error, setError] = useState('');

  const isValidName = (name) => /^[A-Za-z\s]{1,20}$/.test(name);
  const isValidMobile = (mobile) => /^\d{10}$/.test(mobile);
  const isValidEmail = (email) => /^[A-Za-z][A-Za-z0-9\.]{1,8}@[A-Za-z]{2,20}\.[A-Za-z]{2,10}$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const addContact = (e) => {
    e.preventDefault();
    const { name, mobile, email } = form;

    if (!isValidName(name) || !isValidMobile(mobile) || !isValidEmail(email)) {
      setError('Invalid Input! Please check the fields.');
      return;
    }

    setContacts((prevContacts) => [...prevContacts, form]);
    setForm({ name: '', mobile: '', email: '' }); // Reset form
    setError(''); // Clear errors
  };

  return (
    <>
      <style>{styles}</style> {/* Inject styles into the component */}
      <main>
        <h1 className="textCenter">Phone Directory</h1>
        <div className="inputContent">
          <form className="txtLeft" onSubmit={addContact}>
            <input type="text" name="name" placeholder="Contact Name" aria-label="Contact Name"
              value={form.name} onChange={handleInputChange} />
            <input type="text" name="mobile" placeholder="Mobile Number" aria-label="Mobile Number"
              value={form.mobile} onChange={handleInputChange} maxLength="10" />
            <input type="email" name="email" placeholder="Email" aria-label="Email"
              value={form.email} onChange={handleInputChange} />
            <input type="submit" className="btn" value="Add Contact" />
            {error && <div className="error">{error}</div>}
          </form>
        </div>
        <div className="contactSummary">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.mobile}</td>
                  <td>{contact.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default TableForm;
