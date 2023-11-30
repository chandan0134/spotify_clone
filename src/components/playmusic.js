import React from 'react';

const Playbutton = ({ onClick }) => {
  return (
    <button className="bg-green-500 text-white p-2 rounded-full" onClick={onClick}>
      Play
    </button>
  );
};

export default Playbutton;