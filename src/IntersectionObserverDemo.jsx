import React, { useRef, useEffect, useState } from 'react';

const IntersectionObserverDemo = () => {
  const boxRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }
    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  return (
    <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: 20 }}>
      <div style={{ height: '200px' }} />
      <div
        ref={boxRef}
        style={{
          width: 200,
          height: 100,
          margin: '0 auto',
          background: visible ? '#4caf50' : '#f44336',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.3s',
        }}
      >
        {visible ? 'In viewport!' : 'Scroll to me!'}
      </div>
      <div style={{ height: '400px' }} />
    </div>
  );
};

export default IntersectionObserverDemo; 