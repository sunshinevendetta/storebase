'use client';

import { useState } from 'react';
import ExpoFloor from '../../components/Floor/ExpoFloor';

const BoothPage = () => {
  const [quoteDetails, setQuoteDetails] = useState({ size: '', price: '' });
  const [formData, setFormData] = useState({ name: '', email: '' });

  const updateQuoteDetails = (details: { size: string; price: string }) => {
    setQuoteDetails(details);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/sendQuote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...quoteDetails, ...formData }),
    });
    const result = await response.json();
    if (result.success) {
      alert('Quote sent successfully!');
    } else {
      alert('Error sending quote');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Interactive Expo Floor</h1>
      <ExpoFloor updateQuoteDetails={updateQuoteDetails} />
      {quoteDetails.size && (
        <div>
          <h2>Selected Booth Size: {quoteDetails.size}</h2>
          <p>Price: {quoteDetails.price}</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border p-2 mb-2 w-full"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border p-2 mb-2 w-full"
              onChange={handleInputChange}
            />
            <button type="submit" className="bg-blue-500 text-white p-2">
              Send Quote
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BoothPage;
