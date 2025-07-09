import React, { useRef, useEffect, useState } from 'react';

const CanvasDemo = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
  }, []);

  const startDrawing = (e) => {
    setDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setDrawing(false);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div>
      <h2>Canvas API Demo</h2>
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        style={{ border: '1px solid #888', background: '#fff' }}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
      />
      <p>Draw on the canvas with your mouse!</p>
    </div>
  );
};

export default CanvasDemo; 