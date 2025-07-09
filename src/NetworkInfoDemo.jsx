import React, { useEffect, useState } from 'react';

const NetworkInfoDemo = () => {
  const [info, setInfo] = useState(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return connection
      ? {
          type: connection.effectiveType,
          downlink: connection.downlink,
        }
      : null;
  });

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!connection) return;
    const updateInfo = () => {
      setInfo({
        type: connection.effectiveType,
        downlink: connection.downlink,
      });
    };
    connection.addEventListener('change', updateInfo);
    return () => connection.removeEventListener('change', updateInfo);
  }, []);

  return (
    <div>
      <h2>Network Information API Demo</h2>
      {info ? (
        <>
          <p>Effective Connection Type: {info.type}</p>
          <p>Downlink: {info.downlink} Mbps</p>
        </>
      ) : (
        <p>Your browser does not support the Network Information API.</p>
      )}
      <p style={{fontSize: '0.9em', color: '#888'}}>Note: This API is not supported in all browsers.</p>
    </div>
  );
};

export default NetworkInfoDemo; 