import React, { useState } from 'react';

const BackgroundTasksDemo = () => {
  const [supported, setSupported] = useState('BackgroundTaskController' in window);
  const [status, setStatus] = useState('Not started');

  const handleRegister = async () => {
    if (!supported) return;
    try {
      // The Background Tasks API is experimental and not widely available.
      // This is a placeholder for the real API usage.
      setStatus('Attempting to register background task...');
      // Example usage (will likely fail in most browsers):
      // const controller = new window.BackgroundTaskController();
      // await controller.start();
      setStatus('Background task registered (simulated).');
    } catch (e) {
      setStatus('Failed to register background task: ' + e.message);
    }
  };

  return (
    <div>
      <h2>Background Tasks API Demo</h2>
      {!supported ? (
        <p>Your browser does not support the Background Tasks API.</p>
      ) : (
        <>
          <button onClick={handleRegister}>Register Background Task</button>
          <p>Status: {status}</p>
        </>
      )}
      <p style={{fontSize: '0.9em', color: '#888'}}>Note: This API is experimental and may not work in your browser.</p>
    </div>
  );
};

export default BackgroundTasksDemo; 