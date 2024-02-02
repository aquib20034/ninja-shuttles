import React, { useState } from 'react';

const MyForm = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the input value, e.g., send it to an API or perform an action
    console.log('Submitted:', inputValue);
    // You can reset the input value after submission if needed
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Enter INJ Wallet Address"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
};

export default MyForm;