import React, { useState } from 'react';

const Payment = ({ formData }) => {
  const [error, setError] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPaymentLoading(true);

    try {
      // Simulate payment processing (no actual payment)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Payment successful!');
      console.log('Form data:', formData);

      // Show a success message or redirect to a thank you page
      // Handle the successful payment completion here

    } catch (error) {
      setError('Payment failed. Please try again later.');
    }

    setPaymentLoading(false);
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-element">Credit or Debit Card:</label>
        {/* Replace this input with any other payment-related fields you want to simulate */}
        <input
          type="text"
          id="card-element"
          name="card-element"
          placeholder="Card Number"
        />
        <div className="error-message">{error}</div>
        <button type="submit" disabled={paymentLoading}>
          {paymentLoading ? 'Processing...' : 'Pay'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
