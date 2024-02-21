import React, { useState } from 'react';

const TrackingProcess = () => {
  const [trackingStatus, setTrackingStatus] = useState('Processing');

  const handleTrackPackage = () => {
    // Simulate the tracking process with a delay for each status update
    setTrackingStatus('Shipped');

    setTimeout(() => {
      setTrackingStatus('In Transit');
    }, 2000); // Wait 2 seconds

    setTimeout(() => {
      setTrackingStatus('Out for Delivery');
    }, 4000); // Wait 4 seconds

    setTimeout(() => {
      setTrackingStatus('Delivered');
    }, 6000); // Wait 6 seconds
  };

  return (
    <div>
      <h2>Package Tracking</h2>
      <p>Status: {trackingStatus}</p>
      <button onClick={handleTrackPackage}>Track Package</button>
    </div>
  );
};

export default TrackingProcess;
