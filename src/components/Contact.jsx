import { useEffect, useState } from "react";

export default function Contact() {
  const [formInputs, setFormInput] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [submittedData, setSubmittedData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
    setSubmittedData(true);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name
        <input
          type="text"
          value={formInputs.name}
          name="name"
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          type="text"
          value={formInputs.email}
          name="email"
          onChange={handleChange}
        />
      </label>

      <label>
        Age
        <input
          type="text"
          value={formInputs.age}
          name="age"
          onChange={handleChange}
        />
      </label>

      <hr />

      <button type="submit">Submit</button>

      {submittedData && (
        <div>
          Name is {formInputs.name} Email is {formInputs.email} Age is {formInputs.age}
        </div>
      )}
    </form>
  );
}
