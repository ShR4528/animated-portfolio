import './cursor.scss';
import { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.addEventListener('mousemove', mouseMove);
    };
  });
  console.log(position);

  return <div className='cursor'>Cursor</div>;
};

export default Cursor;
