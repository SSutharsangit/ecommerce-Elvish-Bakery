import React from 'react';
import v2 from "../Assets/v2.mp4";

function Section5() {
  return (
    <div className='mt-5 flex flex-col items-center relative'>
      <video
        src={v2}
        autoPlay
        loop
        muted
        style={{ width: '80vw' }}
        className='mb-5'
      ></video>
      <div className="content flex flex-col justify-center items-center absolute top-24">
        <p className='text-5xl font-serif font-bold text-white text-center'>Brace the cold with our <br/>winter drink specials.</p> 
        <button className='py-1 px-4 text-white font-mono font-semibold bg-orange-600 mt-4'>JOIN US</button>
      </div>
    </div>
  );
}

export default Section5;
